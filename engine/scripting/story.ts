import * as vm from "vm";
import * as fs from "fs";
import { AVGScriptUnit } from "../scripting/script-unit";
import { Sandbox } from "../core/sandbox";
import { Transpiler } from "../scripting/transpiler";

export class AVGStory {
    private _scriptUnits: Array<AVGScriptUnit> = [];
    private _cursor: number = 0;
    private _sanbox: Sandbox;
    private _code: string;

    constructor() {
        this._sanbox = new Sandbox();
    }

    public loadFromScripts(units: Array<AVGScriptUnit>) {
        this._scriptUnits = units;
    }

    public loadFromFile(filename: string) {
        fs.readFile(filename, "utf8", (err, data) => {
            if (err) {
                throw err;
            }

            this.loadFromString(data);
        });
    }

    public getScripts(): Array<AVGScriptUnit> {
        return this._scriptUnits;
    }

    public loadFromString(code: string) {
        this._code = code;
        this.compile();
    }

    private compile() {
        return new Promise((resolve, reject) => {
            let compiled = Transpiler.transpileFromCode(this._code);

            console.log("Compiled Code:" + compiled);

            try {
                let script = new vm.Script(compiled);
                script.runInContext(vm.createContext(this._sanbox));

                resolve();
            } catch (err) {
                reject("AVG Script errror : " + err);
            }
        });
    }

    public addScriptUnit(unit: AVGScriptUnit) {
        this._scriptUnits.push(unit);
    }

    public next(): AVGScriptUnit {
        this._cursor++;

        if (this._cursor >= this._scriptUnits.length) {
            return null;
        }

        return this._scriptUnits[this._cursor];
    }
}
