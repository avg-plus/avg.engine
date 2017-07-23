import { EventEmitter } from "events";
import { GameSandbox } from "../core/game-sandbox";
import { AVGData } from "../data/avg-data";

export type APICallback = (scriptUnit: AVGScriptUnit, data: AVGData) => AVGScriptUnit;
export class AVGScriptUnit {

    public Data: AVGData;
    // public Callback: Promise<AVGData>;
    // public JumpTerm: Map<string, Array<AVGScriptUnit>>;
    public Next: Array<AVGScriptUnit> = [];

    public execute(): Promise<AVGScriptUnit> {
        return new Promise((resolve, reject) => {
            resolve(this);
        });
    }

}