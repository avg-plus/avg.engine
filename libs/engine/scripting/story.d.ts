import { AVGScriptUnit } from "../scripting/script-unit";
export declare class AVGStory {
    private _scriptUnits;
    private _cursor;
    private _sanbox;
    private _code;
    constructor();
    loadFromScripts(units: Array<AVGScriptUnit>): void;
    loadFromFile(filename: string): void;
    getScripts(): Array<AVGScriptUnit>;
    loadFromString(code: string): void;
    private compile();
    addScriptUnit(unit: AVGScriptUnit): void;
    next(): AVGScriptUnit;
}
