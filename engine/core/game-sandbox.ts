import { Character } from "../data/character";
import { AVGScriptUnit, APICallback } from "../scripting/script-unit";
import { Dialogue } from "../data/dialogue";
import { APIShowDialogue } from "../scripting/api/api-show-dialogue";


// require = require;
// public static console = console;
export class GameSandbox {
    // Characters Data
    public static Character: Array<Character>;

    // Game Variables
    public static Variables: Map<string, any>;

    public async text(options: Dialogue, callback?: APICallback) {
        console.log(options);

        let script = new APIShowDialogue();
        script.data = options;

        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('time out');
                resolve();
            }, 3000);
        });
    }
}
