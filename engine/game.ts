import { AVGStory } from './core/story';
import { AVGScriptingLoop } from "./scripting/scripting-loop";

export class AVGGame {
    private _entryStoryScript: AVGStory;
    private _scriptingLoop: AVGScriptingLoop;

    constructor() {
        this._entryStoryScript = new AVGStory();
        this._scriptingLoop = new AVGScriptingLoop();
    }

    private loadStartupScript() {

    }

    public save() {

    }

    public load() {

    }

    public start() {
        this._entryStoryScript.loadFromFile('./start-scripting.js');

        this._scriptingLoop.addStory(this._entryStoryScript);
        this._scriptingLoop.run().on('AVGData', (data) => {
            console.log(`Received data: ${data}`);
        }).on('AVGLoopEnd', () => {
            console.log(`Loop ended.`);
        });

    }
}
