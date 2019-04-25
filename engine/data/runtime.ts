import { AVGScriptUnit } from "../scripting/script-unit";
import { APIDialogueChoice, SelectedDialogueChoice } from "../scripting/api/api-dialogue-choices";
import { OP } from "../const/op";
import { api } from "../scripting/api/exports"
import { EngineAPI_Character } from "../scripting/exports/character";
import { Character } from "./character";
import { EngineAPI_Scene, EngineAPI_Widget } from "../scripting/exports";
import { Scene } from "./scene";
import { AVGArchives } from "../core";
// import {  } from ./sel;

export class RuntimeState {

    public name: String

    public op: String

    public model: AVGScriptUnit

    public constructor(name: String, op: String, model: AVGScriptUnit) {
        this.name   = name;
        this.op     = op;
        this.model  = model;
    }
}

export class Runtime {

    public choices: Array<SelectedDialogueChoice> = new Array<SelectedDialogueChoice>();

    private _script: string;

    private _characters = {};

    private _scenes = {};

    private _widgets = {};
    
    public update(op: string, model: any) {
        if (AVGArchives.isLoading()) {
            return;
        }

        switch (op) {
            case OP.CallScript:
                this._script = model.script;
                break;
            case OP.ShowCharacter:
                this._characters[model.id] = model;
                break;
            case OP.HideCharacter:
                this._characters[model.id] = undefined;
                break;
            case OP.LoadScene:
                this._scenes[model.index] = model;
                break;
            case OP.RemoveScene:
                this._scenes[model.index] = undefined;
                break;
            case OP.ShowTextWidget:
            case OP.ShowImageWidget:
                this._widgets[model.id] = model;
                break;
            case OP.RemoveTextWidget:
            case OP.RemoveImageWidget:
                this._widgets[model.id] = undefined;
                break;
        }
    }

    public fill(json) {
        this._script = json.script;
        this._characters = json._characters;
        this._scenes = json._scenes;
        this._widgets = json._widgets;
        this.choices = json.choices;
    }

    public load() {
        //  load character
        for (let id in this._characters) {
            let chr = this._characters[id];
            EngineAPI_Character.show(chr.id, chr.filename, <Character> chr.options);
        }

        //  load scene
        for (let index in this._scenes) {
            let scene = this._scenes[index];
            EngineAPI_Scene.load(scene.index, scene.filename, <Scene> scene.options);
        }

        //  load widget
        for (let id in this._widgets) {
            let widget = this._widgets[id];
            switch (widget.op) {
                case OP.ShowTextWidget:
                    EngineAPI_Widget.text(widget.id, widget.text, widget.options, widget.isAsync);
                    break;
                case OP.ShowImageWidget:
                    EngineAPI_Widget.image(widget.id, widget.filename, widget.options, widget.isAsync);
                    break;
            }
        }
    }
}
