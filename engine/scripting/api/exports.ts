import { AVGScriptUnit } from "../script-unit";
import { APIManager } from "../api-manager";

import {
    Dialogue,
    Sound,
    Scene,
    AVGData,
    ResourceData,
    Timer,
    Variable,
    SoundBGM,
    Effect,
    ScreenPosition,
    ScreenWidgetType,
    WidgetAnimation,
    Avatar
} from "../../data";

import { APIScene } from "./api-scene";
import { APIDialogue } from "./api-dialogue";
import { APISound } from "./api-sound";
import { APITimer } from "./api-timer";
import { APIVariable } from "./api-variable";
import { SoundTrack } from "../../const";
import { Sandbox, Resource } from "../../core";
import { APIEffect } from "./api-effect";
import { APIGotoTitleView } from "./api-title-view";
import { OP } from "../../const/op";
import { APIScreenSubtitle } from "./api-screen-subtitle";
import { Subtitle } from "../../data/screen-subtitle";
import { ScreenWidgetAnimation } from "../../data/screen-widget";
import { APIDialogueChoice } from "./api-dialogue-choices";
import { DialogueChoice } from "../../data/dialogue-choice";
import { Character } from "../../data/character";
import { APICharacter } from "./api-character";
import { InputData } from "../../data/input-data";
import { APIInputBox } from "./api-input-box";
import { APICallScript } from "./api-call-script";
import { AVGStory } from "../story";
import { ResourcePath } from "../../core/resource";
import { APIScreenImage } from "./api-screen-image";
import { ScreenImage } from "../../data/screen-image";
import { IDGenerator } from "../../core/id-generator";

function paramCompatible<T extends AVGScriptUnit, U extends AVGData>(
    model: T,
    options?: any,
    keyField?: { field: string; value: any }
) {
    let data = <U>model.data;
    if (keyField) {
        data[keyField.field] = keyField.value;
    }

    if (options && typeof options === "object") {
        Object.assign(model.data, model.data, options);
    }

    return model;
}

export namespace api {
    /**
     * Show dialogue box
     *
     * @export
     * @param {string} text
     * @param {Dialogue} [options]
     */
    export async function showText(
        text: string | Array<string>,
        options?: Dialogue
    ) {
        const show = async (content: string) => {
            let model = new APIDialogue();
            paramCompatible<APIDialogue, Dialogue>(model, options, {
                field: "text",
                value: content
            });

            const proxy = APIManager.getImpl(APIDialogue.name, OP.ShowText);

            proxy && (await proxy.runner(<APIDialogue>model));
        };

        if (Array.isArray(text)) {
            for (let content of text) {
                await show(content);
            }
        } else {
            await show(<string>text);
        }
    }

    export async function hideText(options?: Dialogue) {
        let model = new APIDialogue();
        paramCompatible<APIDialogue, Dialogue>(model, options);

        const proxy = APIManager.getImpl(APIDialogue.name, OP.HideText);
        proxy && (await proxy.runner(<APIDialogue>model));
    }

    export async function showCharacter(
        index: number,
        filename: string,
        options?: { avatar: Avatar }
    ) {
        let model = new APICharacter();
        model.index = index;
        model.data = new Avatar();
        model.data.file = ResourceData.from(
            filename,
            ResourcePath.Characters
        ).filename;

        if (options !== undefined) {
            paramCompatible<APICharacter, Avatar>(model, options.avatar);
        }

        const proxy = APIManager.getImpl(APICharacter.name, OP.ShowCharacter);
        proxy && (await proxy.runner(<APICharacter>model));
    }

    export async function hideCharacter(index: number = -1) {
        let model = new APICharacter();
        model.index = index;

        paramCompatible<APICharacter, Avatar>(model, {});
        const proxy = APIManager.getImpl(APICharacter.name, OP.HideCharacter);
        proxy && (await proxy.runner(<APICharacter>model));
    }

    export async function showChoices(
        choices: Array<string>,
        onEnter: (index: number) => void,
        onLeave: (index: number) => void
    ) {
        let model = new APIDialogueChoice();
        choices.forEach(s => {
            model.choices.push(new DialogueChoice(s));
        });

        model.onEnter = onEnter;
        model.onLeave = onLeave;

        return await APIManager.getImpl(
            APIDialogueChoice.name,
            OP.ShowChioce
        ).runner(<APIDialogueChoice>model);
    }

    /**
     * Load scene with image filename
     *
     * @export
     * @param {string} filename The background image file of scene
     * @param {Scene} [options]
     */
    export async function loadScene(
        index: number,
        filename: string,
        options?: Scene
    ) {
        let model = new APIScene();
        model.index = index;
        paramCompatible<APIScene, Scene>(model, options, {
            field: "file",
            value: ResourceData.from(filename, ResourcePath.Backgrounds)
        });

        return await APIManager.getImpl(APIScene.name, OP.LoadScene).runner(
            <APIScene>model
        );
    }

    export async function removeScene(index: number) {
        let model = new APIScene();
        model.index = index;

        return await APIManager.getImpl(APIScene.name, OP.RemoveScene).runner(
            <APIScene>model
        );
    }

    export async function playBGM(filename: string, options: SoundBGM) {
        let model = new APISound();
        model.data.track = SoundTrack.BGM;

        paramCompatible<APISound, SoundBGM>(model, options, {
            field: "file",
            value: ResourceData.from(filename, ResourcePath.BGM)
        });

        const proxy = APIManager.getImpl(APISound.name, OP.PlayBGM);
        proxy && (await proxy.runner(<APISound>model));
    }

    export async function stopBGM(options: Sound) {
        let model = new APISound();
        model.data.track = SoundTrack.BGM;

        paramCompatible<APISound, SoundBGM>(model, options);

        const proxy = APIManager.getImpl(APISound.name, OP.StopBGM);
        proxy && (await proxy.runner(<APISound>model));
    }

    export async function pauseBGM(options: Sound) {
        let model = new APISound();
        model.data.track = SoundTrack.BGM;

        paramCompatible<APISound, SoundBGM>(model, options);

        const proxy = APIManager.getImpl(APISound.name, OP.PauseBGM);
        proxy && (await proxy.runner(<APISound>model));
    }

    /**
     * Represents a book.
     * @constructor
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     */
    export async function resumeBGM(options: Sound) {
        let model = new APISound();
        model.data.track = SoundTrack.BGM;

        paramCompatible<APISound, SoundBGM>(model, options);

        const proxy = APIManager.getImpl(APISound.name, OP.ResumeBGM);
        proxy && (await proxy.runner(<APISound>model));
    }

    export async function playVoice(filename: string, options: Sound) {
        let model = new APISound();
        model.data.track = SoundTrack.Voice;

        paramCompatible<APISound, Sound>(model, options, {
            field: "file",
            value: ResourceData.from(filename, ResourcePath.Voice)
        });

        const proxy = APIManager.getImpl(APISound.name, OP.PlayVoice);
        proxy && (await proxy.runner(<APISound>model));
    }

    export async function playSE(filename: string, options: Sound) {
        let model = new APISound();
        model.data.track = SoundTrack.Voice;

        paramCompatible<APISound, Sound>(model, options, {
            field: "file",
            value: ResourceData.from(filename, ResourcePath.SE)
        });

        const proxy = APIManager.getImpl(APISound.name, OP.PlaySE);
        proxy && (await proxy.runner(<APISound>model));
    }

    export async function playBGS(filename: string, options: Sound) {
        let model = new APISound();
        model.data.track = SoundTrack.Voice;

        paramCompatible<APISound, Sound>(model, options, {
            field: "file",
            value: ResourceData.from(filename, ResourcePath.BGS)
        });

        const proxy = APIManager.getImpl(APISound.name, OP.PlayBGS);
        proxy && (await proxy.runner(<APISound>model));
    }

    export async function wait(time: number, options: Timer) {
        let model = new APITimer();
        paramCompatible<APITimer, Timer>(model, options, {
            field: "time",
            value: time
        });

        const proxy = APIManager.getImpl(APITimer.name, OP.Wait);
        proxy && (await proxy.runner(<APITimer>model));
    }

    /**
     * Navigate to game title view
     *
     * @export
     */
    export async function callTitleView() {
        let model = new APIGotoTitleView();

        const proxy = APIManager.getImpl(
            APIGotoTitleView.name,
            OP.GotoTitleView
        );
        proxy && (await proxy.runner(<APIGotoTitleView>model));
    }

    export async function sceneEffect(
        index: number,
        effectName: string,
        options: any
    ) {
        let model = new APIEffect();
        model.index = index;
        model.data.effectName = effectName;

        paramCompatible<APIEffect, Effect>(model, options);

        const proxy = APIManager.getImpl(APIEffect.name, OP.PlayEffect);
        proxy && (await proxy.runner(<APIEffect>model));
    }

    export async function animateScene(
        index: number,
        animateName: string,
        options: any
    ) {}

    export async function getVariable(name: string): Promise<any> {
        return Promise.resolve(APIVariable.get(name));
    }

    export async function setVariable(name: string, value: any): Promise<any> {
        return Promise.resolve(APIVariable.set(name, value));
    }

    export async function showSubtitle(text: string, options: Subtitle) {
        let model = new APIScreenSubtitle();
        model.data.id = IDGenerator.generate();
        model.data.text = text;
        model.data.animation = new WidgetAnimation();
        model.data.animation.name = ScreenWidgetAnimation.Enter_Appear;

        paramCompatible<APIScreenSubtitle, Subtitle>(model, options);

        return await APIManager.getImpl(
            APIScreenSubtitle.name,
            OP.ShowSubtitle
        ).runner(<APIScreenSubtitle>model);
    }

    export async function animateSubtitle(
        id: string,
        animation: WidgetAnimation
    ) {
        let model = new APIScreenSubtitle();
        model.data.id = id;

        const proxy = APIManager.getImpl(
            APIScreenSubtitle.name,
            OP.AnimateSubtitle
        );
        proxy && (await proxy.runner(<APIScreenSubtitle>model));
    }

    export async function updateSubtitle(id: string, text: string) {
        let model = new APIScreenSubtitle();
        model.data.id = id;
        model.data.text = text;

        const proxy = APIManager.getImpl(
            APIScreenSubtitle.name,
            OP.UpdateSubtitle
        );

        proxy && (await proxy.runner(<APIScreenSubtitle>model));
    }

    export async function removeSubtitle(
        id: string,
        options?: { animation?: WidgetAnimation }
    ) {
        let model = new APIScreenSubtitle();
        model.data.id = id;
        model.data.animation = options
            ? options.animation || undefined
            : undefined;

        const proxy = APIManager.getImpl(
            APIScreenSubtitle.name,
            OP.HideSubtitle
        );

        proxy && (await proxy.runner(<APIScreenSubtitle>model));
    }

    export async function showInputBox(title: string, options: InputData) {
        let model = new APIInputBox();

        paramCompatible<APIInputBox, InputData>(model, options, {
            field: "title",
            value: title
        });

        return await APIManager.getImpl(
            APIInputBox.name,
            OP.ShowInputBox
        ).runner(<APIInputBox>model);
    }

    export async function call(file: string) {
        let model = new APICallScript();
        model.scriptFile = ResourceData.from(
            file,
            ResourcePath.Scripts
        ).filename;

        let story = new AVGStory();
        await story.loadFromFile(model.scriptFile);
        return await story.run();
    }

    export async function showImage(file: string, options: ScreenImage) {
        let model = new APIScreenImage();
        model.data.id = IDGenerator.generate();
        model.data.file = ResourceData.from(file);
        model.data.animation = new WidgetAnimation();
        model.data.animation.name = ScreenWidgetAnimation.Enter_Appear;

        paramCompatible<APIScreenImage, ScreenImage>(model, options);

        return await APIManager.getImpl(
            APIScreenImage.name,
            OP.ShowImage
        ).runner(<APIScreenImage>model);
    }

    export async function removeImage(id: string, options: ScreenImage) {
        let model = new APIScreenImage();
        model.data.id = id;

        model.data.animation = new WidgetAnimation();
        model.data.animation.name = ScreenWidgetAnimation.Leave_Hide;

        paramCompatible<APIScreenImage, ScreenImage>(model, options);

        const proxy = APIManager.getImpl(APIScreenImage.name, OP.RemoveImage);
        proxy && (await proxy.runner(<APIScreenImage>model));
    }
}
