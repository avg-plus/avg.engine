import * as vm from "vm";
import * as fs from "fs";
import { AVGScriptUnit } from "../scripting/script-unit";
import { GameSandbox } from "./game-sanbox";

export class AVGStory {
    private _scripts: Array<AVGScriptUnit> = [];
    private _cursor: number = 0;
    private _sanbox: GameSandbox;
    private _code: string;

    constructor() {
        this._sanbox = new GameSandbox();
    }

    public loadFromFile(filename: string) {
        fs.readFile(filename, "utf8", (err, data) => {
            if (err) {
                throw err;
            }

            this.load(data);
        });
    }

    public getScripts(): Array<AVGScriptUnit> {
        return this._scripts;
    }

    public load(code: string) {
        this._code = code;
        this.compile();
    }

    private compile() {
        return new Promise((resolve, reject) => {
            try {
                let script = new vm.Script(this._code);
                script.runInContext(vm.createContext(this._sanbox));

                resolve();
            } catch (err) {
                reject('AVG Script errror:' + err);
            }
        });
    }

    public addEvent(event: AVGScriptUnit) {
        this._scripts.push(event);
    }

    public next(): AVGScriptUnit {
        this._cursor++;

        if (this._cursor >= this._scripts.length) {
            return null;
        }

        return this._scripts[this._cursor];
    }
}
