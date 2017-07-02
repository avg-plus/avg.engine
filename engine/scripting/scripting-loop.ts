import { EventEmitter } from "events";
import { AVGScriptUnit } from "./script-unit";
import { AVGStory } from "../core/story";

export class AVGScriptingLoop {
    private _scripts: Array<AVGScriptUnit> = [];
    private _cursor = 0;
    private _handle = null;
    private _resumeEvent: EventEmitter;
    private _loopEvent: EventEmitter;

    constructor() {
        this._resumeEvent = new EventEmitter();
        this._loopEvent = new EventEmitter();
    }

    public addStory(story: AVGStory) {
        this._scripts.concat(story.getScripts());
    }

    public run(): EventEmitter {
        this._handle = setInterval(() => {
            let current = this._scripts[this._cursor];
            if (!current) {
                this._loopEvent.emit('AVGLoopEnd');
                this.reset();
                return;
            }

            if (current.Blocking) {
                this.waitFor();
                return;
            }

            current.execute && current.execute().then((data) => {
                this._cursor++;
                this._loopEvent.emit('AVGLoopData', current);
            }, _ => { });
        }, 1);

        return this._loopEvent;
    }

    public waitFor() {
        this.reset();

        this._resumeEvent.on('AVGLoopResume', () => {
            this._cursor++;
            this.run();
        })
    }

    private reset() {
        if (this._handle) {
            clearInterval(this._handle);
        }
    }
}