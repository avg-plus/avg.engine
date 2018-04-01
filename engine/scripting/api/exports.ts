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
    ScreenWidgetAnimation_Enter,
    ScreenWidgetAnimation_Leave,
    ScreenWidgetAnimation_Highlight
} from "../../data";

import { APIScene } from "./api-scene";
import { APIDialogue } from "./api-dialogue";
import { APISound } from "./api-sound";
import { APITimer } from "./api-timer";
import { APIVariable } from "./api-variable";
import { SoundTrack } from "../../const";
import { Sandbox } from "../../core";
import { APIEffect } from "./api-effect";
import { APIGotoTitleView } from "./api-title-view";
import { OP } from "../../const/op";
import { APISubtitle } from "./api-subtitle";
import { Subtitle } from "../../data/subtitle";

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

    /**
     * Load scene with image filename
     *
     * @export
     * @param {string} filename The background image file of scene
     * @param {Scene} [options]
     */
    export async function loadScene(filename: string, options?: Scene) {
        let model = new APIScene();
        paramCompatible<APIScene, Scene>(model, options, {
            field: "file",
            value: ResourceData.from(filename)
        });

        const proxy = APIManager.getImpl(APIScene.name, OP.LoadScene);
        proxy && (await proxy.runner(<APIScene>model));
    }

    export async function playBGM(filename: string, options: Sound) {
        let model = new APISound();
        model.data.track = SoundTrack.BGM;

        paramCompatible<APISound, SoundBGM>(model, options, {
            field: "file",
            value: ResourceData.from(filename)
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
            value: ResourceData.from(filename)
        });

        const proxy = APIManager.getImpl(APISound.name, OP.PlayVoice);
        proxy && (await proxy.runner(<APISound>model));
    }

    export async function playSE(filename: string, options: Sound) {
        let model = new APISound();
        model.data.track = SoundTrack.Voice;

        paramCompatible<APISound, Sound>(model, options, {
            field: "file",
            value: ResourceData.from(filename)
        });

        const proxy = APIManager.getImpl(APISound.name, OP.PlaySE);
        proxy && (await proxy.runner(<APISound>model));
    }

    export async function playBGS(filename: string, options: Sound) {
        let model = new APISound();
        model.data.track = SoundTrack.Voice;

        paramCompatible<APISound, Sound>(model, options, {
            field: "file",
            value: ResourceData.from(filename)
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

    export async function playEffect(effectName: string, options: any) {
        let model = new APIEffect();
        paramCompatible<APIEffect, Effect>(model, options, {
            field: "effectName",
            value: effectName
        });

        const proxy = APIManager.getImpl(APIEffect.name, OP.PlayEffect);
        proxy && (await proxy.runner(<APIEffect>model));
    }

    export async function getVariable(name: string): Promise<any> {
        return Promise.resolve(APIVariable.get(name));
    }

    export async function setVariable(name: string, value: any): Promise<any> {
        return Promise.resolve(APIVariable.set(name, value));
    }

    export async function showSubtitle(
        id: string,
        text: string,
        options: Subtitle
    ) {
        let model = new APISubtitle();
        model.data.id = id;
        model.data.text = text;
        model.data.widgetType = ScreenWidgetType.Text;

        paramCompatible<APISubtitle, Subtitle>(model, options);

        const proxy = APIManager.getImpl(APISubtitle.name, OP.ShowSubtitle);
        proxy && (await proxy.runner(<APISubtitle>model));
    }

    export async function animateSubtitle(
        id: string,
        animation: ScreenWidgetAnimation_Highlight
    ) {
        let model = new APISubtitle();
        model.data.id = id;
        model.data.animation = animation;
        model.data.widgetType = ScreenWidgetType.Text;

        const proxy = APIManager.getImpl(APISubtitle.name, OP.AnimateSubtitle);
        proxy && (await proxy.runner(<APISubtitle>model));
    }

    export async function updateSubtitle(id: string, text: string) {
        let model = new APISubtitle();
        model.data.id = id;
        model.data.text = text;
        model.data.widgetType = ScreenWidgetType.Text;

        const proxy = APIManager.getImpl(APISubtitle.name, OP.UpdateSubtitle);
        proxy && (await proxy.runner(<APISubtitle>model));
    }

    export async function hideSubtitle(
        id: string,
        animation: ScreenWidgetAnimation_Leave = ScreenWidgetAnimation_Leave.Hide
    ) {
        let model = new APISubtitle();
        model.data.id = id;
        model.data.animation= animation;
        model.data.widgetType = ScreenWidgetType.Text;

        const proxy = APIManager.getImpl(APISubtitle.name, OP.HideSubtitle);
        proxy && (await proxy.runner(<APISubtitle>model));
    }
}
