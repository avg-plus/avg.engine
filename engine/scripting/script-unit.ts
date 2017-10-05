import { AVGData } from "../data/avg-data";

export type RunnerFunction = (scriptUnit: AVGScriptUnit) => Promise<AVGScriptUnit>;
export class AVGScriptUnit {
    public data: AVGData;
    private _runner: RunnerFunction;

    public get runner(): RunnerFunction {
        console.log('Execute API Runner:', this);
        return this._runner;
    }

    public set runner(value: RunnerFunction) {
        this._runner = value;
    }
}