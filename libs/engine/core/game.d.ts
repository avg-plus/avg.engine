import { AVGScriptUnit } from '../scripting/script-unit';
import { Screen } from '../const/model';
export declare class AVGGame {
    private static DEFAULT_ENTRY_SCRIPT;
    private _entryStory;
    private _scriptDir;
    private _transition;
    private _screen;
    constructor(name?: string, screen?: Screen);
    setResolution(screen: Screen): void;
    getResolution(): Screen;
    setScriptDir(dir: string): void;
    start(entryScript?: string): void;
    startFromAPIs(scripts: Array<AVGScriptUnit>): void;
    private _run();
}
export declare let game: AVGGame;
