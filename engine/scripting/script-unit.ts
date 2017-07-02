import { EventEmitter } from "events";
import { GameSandbox } from "../core/game-sanbox";
import { AVGData } from "../data/avg-data";

export class AVGScriptUnit {
    private _blocking: boolean;

    public Next: AVGScriptUnit = null;
    public Result: any;

    public set Blocking(isBlock: boolean) {
        this._blocking = isBlock;
    }

    public execute(): Promise<AVGData> {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }

}