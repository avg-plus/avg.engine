import { APIShowDialogue } from "./api-show-dialogue";
import { Dialogue, Sound } from "../../data";

export module api {
    export async function text(options: Dialogue) {
        let script = new APIShowDialogue();
        script.data = options;

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('show text:', options);
                resolve();
            }, 1000);
        });
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
