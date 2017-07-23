import { AVGStory } from './scripting/story';
import { AVGScriptingLoop, LoopEvents } from "./scripting/scripting-loop";
import { AVGScriptUnit } from "./scripting/script-unit";

import * as path from "path";

export class AVGGame {

    private static DEFAULT_ENTRY_SCRIPT = 'start.js';

    private _entryStory: AVGStory;
    private _scriptingLoop: AVGScriptingLoop;
    private _scriptDir: string;

    constructor() {
        this._entryStory = new AVGStory();
        this._scriptingLoop = new AVGScriptingLoop();
    }

    public setScriptDir(dir: string) {
        this._scriptDir = dir;
    }

    public start(entryScript?: string) {

        let scriptDir = this._scriptDir || './';
        entryScript = entryScript || path.join(scriptDir, AVGGame.DEFAULT_ENTRY_SCRIPT);

        this._entryStory.loadFromFile(entryScript);
        this._scriptingLoop.addStory(this._entryStory);

        this._run();
    }

    public startFromAPIs(scripts: Array<AVGScriptUnit>) {
        this._entryStory.loadFromScripts(scripts);
        this._scriptingLoop.addStory(this._entryStory);

        this._run();
    }

    private _run() {
        this._scriptingLoop.run().on(LoopEvents.OnLoopData, (data) => {
            console.log(`Received data: `, data);
        }).on(LoopEvents.OnLoopEnd, () => {
            console.log(`Loop ended. Game End.`);
        });
    }
}
