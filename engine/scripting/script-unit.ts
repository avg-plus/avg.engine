import { AVGData } from "../data/avg-data";

export type RunnerFunction = (scriptUnit: AVGScriptUnit) => Promise<AVGScriptUnit>;
export class AVGScriptUnit {
    public data: AVGData;
    public runner: RunnerFunction;
}