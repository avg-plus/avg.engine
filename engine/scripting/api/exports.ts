import { AVGScriptUnit } from "../script-unit";
import { APIManager } from "../api-manager";

import { Dialogue, Sound, Scene, AVGData, ResourceData } from "../../data";

import { APILoadScene } from "./api-load-scene";
import { APIShowDialogue } from "./api-show-dialogue";


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

        const proxy = APIManager.getImpl(APIShowDialogue.name);
        proxy && await proxy(<APIShowDialogue>model);
    }

    export async function hideText(text: string, options?: Dialogue) {
        let model = new APIShowDialogue();
        paramCompatible<APIShowDialogue, Dialogue>(model, options);

        const proxy = APIManager.getImpl(APIShowDialogue.name);
        proxy && await proxy(<APIShowDialogue>model);
    }

    /**
     * Load scene with image filename
     * 
     * @export
     * @param {string} filename The background image file of scene
     * @param {Scene} [options] 
     */
    export async function loadScene(filename: string, options?: {}) {
        let model = new APILoadScene();
        paramCompatible<APILoadScene, Scene>(model, options, {
            field: 'filename',
            value: ResourceData.from(filename)
        });

        const proxy = APIManager.getImpl(APILoadScene.name);
        proxy && await proxy(<APILoadScene>model);
    }


    export async function playSound(options: Sound) {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('play sound:', options);
                resolve();
            }, 1000);
        });
    }
}
