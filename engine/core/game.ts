import * as fs from "fs";

import { AVGStory } from "../scripting/story";
// import { AVGScriptingLoop } from '../scripting/scripting-loop';
import { AVGScriptUnit } from "../scripting/script-unit";

import * as path from "path";
import { Screen } from "../const/model";
import { Transition } from "./transition";
import { PluginManager } from "../index";
import { Setting } from "./setting";
import { Resource } from "./resource";

export class AVGGame {
    private static DEFAULT_ENTRY_SCRIPT = "start.avs";

    private _entryStory: AVGStory;
    // private _scriptingLoop: AVGScriptingLoop;
    private _scriptDir: string;
    private _transition: Transition;

    private _screen: Screen = {
        width: 1366,
        height: 768
    };

    constructor(name?: string, screen?: Screen) {
        this._entryStory = new AVGStory();
        // this._scriptingLoop = new AVGScriptingLoop();
    }

    public setResolution(screen: Screen) {
        this._screen = screen;
    }

    public getResolution(): Screen {
        return this._screen;
    }

    public setScriptDir(dir: string) {
        this._scriptDir = dir;
    }

    public async start(entryScript?: string) {
        // Init plugins
        PluginManager.init();

        let scriptDir = this._scriptDir || "./";
        entryScript =
            entryScript || path.join(scriptDir, AVGGame.DEFAULT_ENTRY_SCRIPT);

        await this._entryStory.loadFromFile(entryScript);
        await this._entryStory.run();
    }
}

export let game = new AVGGame();
