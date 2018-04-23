import { AVGData } from "../data/avg-data";
export declare type RunnerFunction = (scriptUnit: AVGScriptUnit) => void;
export declare class AVGScriptUnit {
    data: AVGData;
    private _runner;
    private _isAsync;
    isAsync: boolean;
    runner: RunnerFunction;
}
