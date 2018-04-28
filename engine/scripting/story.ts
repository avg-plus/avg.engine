import * as vm from "vm";
import * as fs from "fs";
import { AVGScriptUnit } from "../scripting/script-unit";
import { Sandbox } from "../core/sandbox";
import { Transpiler } from "../scripting/transpiler";

export class AVGStory {
    private static sanbox: Sandbox = new Sandbox();

    private _scriptUnits: Array<AVGScriptUnit> = [];
    private _cursor: number = 0;
    private _code: string;
    private _compiled: string;
    private _scriptFile: string;

    constructor() {}

    // public loadFromScripts(units: Array<AVGScriptUnit>) {
    //     this._scriptUnits = units;
    // }

    public async loadFromFile(filename: string) {
        return new Promise((resolve, reject) => {
            fs.readFile(filename, "utf8", (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }

                this.loadFromString(data);

                resolve();
            });
        });
    }

    // public getScripts(): Array<AVGScriptUnit> {
    //     return this._scriptUnits;
    // }

    public loadFromString(code: string) {
        this._code = code;
        this.compile();
    }

    private compile() {
        this._compiled = Transpiler.transpileFromCode(this._code);
        // console.log("this._compiled", this._compiled);
    }

    public async run() {
        return new Promise((resolve, reject) => {
            try {
                let script = new vm.Script(this._compiled);

                AVGStory.sanbox.done = () => {
                    console.log("Script execute done: " + this._scriptFile);
                    resolve();
                };

                script.runInContext(vm.createContext(AVGStory.sanbox), {
                    displayErrors: true
                });
            } catch (err) {
                reject("AVG Script errror : " + err);
            }
        });
    }

    // public addScriptUnit(unit: AVGScriptUnit) {
    //     this._scriptUnits.push(unit);
    // }

    // public next(): AVGScriptUnit {
    //     this._cursor++;

    //     if (this._cursor >= this._scriptUnits.length) {
    //         return null;
    //     }

    //     return this._scriptUnits[this._cursor];
    // }
}
