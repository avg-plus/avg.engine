import { AVGScriptUnit } from "../script-unit";
import { APIManager } from "../api-manager";

import { Dialogue, Sound, Scene, AVGData, ResourceData } from "../../data";

import { APILoadScene } from "./api-load-scene";
import { APIShowDialogue } from "./api-show-dialogue";
import { APISound } from "./api-sound";


function paramCompatible<T extends AVGScriptUnit, U extends AVGData>
    (model: T, options: any, keyField?: { field: string, value: any }) {

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
    export async function showText(text: string, options?: Dialogue) {
        let model = new APIShowDialogue();
        paramCompatible<APIShowDialogue, Dialogue>(model, options, {
            field: 'text',
            value: text
        });

        const proxy = APIManager.getImpl(APIShowDialogue.name, 'op_show');
        proxy && await proxy.runner(<APIShowDialogue>model);
    }

    export async function hideText(options?: Dialogue) {
        let model = new APIShowDialogue();
        paramCompatible<APIShowDialogue, Dialogue>(model, options);

        const proxy = APIManager.getImpl(APIShowDialogue.name, 'op_hide');
        proxy && await proxy.runner(<APIShowDialogue>model);
    }

    /**
     * Load scene with image filename
     * 
     * @export
     * @param {string} filename The background image file of scene
     * @param {Scene} [options] 
     */
    export async function loadScene(filename: string, options?: Scene) {
        let model = new APILoadScene();
        paramCompatible<APILoadScene, Scene>(model, options, {
            field: 'filename',
            value: ResourceData.from(filename)
        });

        const proxy = APIManager.getImpl(APILoadScene.name, 'op_load');
        proxy && await proxy.runner(<APILoadScene>model);
    }


    export async function playSound(filename: string, options: Sound) {
        let model = new APISound();
        paramCompatible<APISound, Sound>(model, options, {
            field: 'filename',
            value: ResourceData.from(filename)
        });

        const proxy = APIManager.getImpl(APISound.name, 'op_play_bgm');
        proxy && await proxy.runner(<APISound>model);
    }
}
