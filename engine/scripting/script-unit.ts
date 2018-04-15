import { AVGData } from "../data/avg-data";

export type RunnerFunction = (scriptUnit: AVGScriptUnit) => void; //Promise<AVGScriptUnit>;
export class AVGScriptUnit {
    public data: AVGData;
    private _runner: RunnerFunction;
    private _isAsync: boolean = true;

    public get isAsync(): boolean {
        return this._isAsync;
    }

    public set isAsync(value: boolean) {
        this._isAsync = value;
    }

    public get runner(): RunnerFunction {
        console.log("Execute API Runner:", this);
        return this._runner;
    }

    public set runner(value: RunnerFunction) {
        this._runner = value;
    }
}
