import { AVGScriptUnit } from "../script-unit";
import { APIManager } from "../api-manager";

import { Dialogue, Sound, Scene, AVGData, ResourceData, Timer, Variable, SoundBGM, Effect } from "../../data";

import { APIScene } from "./api-scene";
import { APIDialogue } from "./api-dialogue";
import { APISound } from "./api-sound";
import { APITimer } from "./api-timer";
import { APIVariable } from "./api-variable";
import { SoundTrack } from "../../const";
import { Sandbox } from "../../core";
import { APIEffect } from "./api-effect";


function paramCompatible<T extends AVGScriptUnit, U extends AVGData>
    (model: T, options?: any, keyField?: { field: string, value: any }) {

    let data = (<U>(model.data));
    if (keyField) {
        data[keyField.field] = keyField.value;
    }

    if (options && typeof options === 'object') {
        Object.assign(model.data, model.data, options);
    }

    return model;
}

export module api {
    /**
     * Show dialogue box
     * 
     * @export
     * @param {string} text
     * @param {Dialogue} [options] 
     */
    export async function showText(text: string | Array<string>, options?: Dialogue) {

        const show = async (content: string) => {

            let model = new APIDialogue();
            paramCompatible<APIDialogue, Dialogue>(model, options, {
                field: 'text',
                value: content
            });

            const proxy = APIManager.getImpl(APIDialogue.name, 'op_show');
            proxy && await proxy.runner(<APIDialogue>model);
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

        const proxy = APIManager.getImpl(APIDialogue.name, 'op_hide');
        proxy && await proxy.runner(<APIDialogue>model);
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
            field: 'file',
            value: ResourceData.from(filename)
        });

        const proxy = APIManager.getImpl(APIScene.name, 'op_load_scene');
        proxy && await proxy.runner(<APIScene>model);
    }


    export async function playBGM(filename: string, options: Sound) {
        let model = new APISound();
        model.data.track = SoundTrack.BGM;

        paramCompatible<APISound, SoundBGM>(model, options, {
            field: 'file',
            value: ResourceData.from(filename)
        });

        const proxy = APIManager.getImpl(APISound.name, 'op_play_bgm');
        proxy && await proxy.runner(<APISound>model);
    }

    export async function stopBGM(options: Sound) {
        let model = new APISound();
        model.data.track = SoundTrack.BGM;

        paramCompatible<APISound, SoundBGM>(model, options);

        const proxy = APIManager.getImpl(APISound.name, 'op_stop_bgm');
        proxy && await proxy.runner(<APISound>model);
    }

    export async function pauseBGM(options: Sound) {
        let model = new APISound();
        model.data.track = SoundTrack.BGM;

        paramCompatible<APISound, SoundBGM>(model, options);

        const proxy = APIManager.getImpl(APISound.name, 'op_pause_bgm');
        proxy && await proxy.runner(<APISound>model);
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

        const proxy = APIManager.getImpl(APISound.name, 'op_resume_bgm');
        proxy && await proxy.runner(<APISound>model);
    }

    export async function playVoice(filename: string, options: Sound) {
        let model = new APISound();
        model.data.track = SoundTrack.Voice;

        paramCompatible<APISound, Sound>(model, options, {
            field: 'file',
            value: ResourceData.from(filename)
        });

        const proxy = APIManager.getImpl(APISound.name, 'op_play_voice');
        proxy && await proxy.runner(<APISound>model);
    }

    export async function playSE(filename: string, options: Sound) {
        let model = new APISound();
        model.data.track = SoundTrack.Voice;

        paramCompatible<APISound, Sound>(model, options, {
            field: 'file',
            value: ResourceData.from(filename)
        });

        const proxy = APIManager.getImpl(APISound.name, 'op_play_se');
        proxy && await proxy.runner(<APISound>model);
    }

    export async function playBGS(filename: string, options: Sound) {
        let model = new APISound();
        model.data.track = SoundTrack.Voice;

        paramCompatible<APISound, Sound>(model, options, {
            field: 'file',
            value: ResourceData.from(filename)
        });

        const proxy = APIManager.getImpl(APISound.name, 'op_play_bgs');
        proxy && await proxy.runner(<APISound>model);
    }

    export async function wait(time: number, options: Timer) {
        let model = new APITimer();
        paramCompatible<APITimer, Timer>(model, options, {
            field: 'time',
            value: time
        });

        const proxy = APIManager.getImpl(APITimer.name, 'op_wait');
        proxy && await proxy.runner(<APITimer>model);
    }

    export async function playEffect(effectName: string, options: any) {
        let model = new APIEffect();
        paramCompatible<APIEffect, Effect>(model, options, {
            field: 'effectName',
            value: effectName
        });

        const proxy = APIManager.getImpl(APIEffect.name, 'op_play_effect');
        proxy && await proxy.runner(<APIEffect>model);
    }

    export async function getVariable(name: string): Promise<any> {
        return Promise.resolve(APIVariable.get(name));
    }

    export async function setVariable(name: string, value: any): Promise<any> {
        return Promise.resolve(APIVariable.set(name, value));
    }
}
