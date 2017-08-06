import { AVGScriptUnit, RunnerFunction } from "./script-unit";

type APITable = Map<string, RunnerFunction>;
export class APIManager {

    private static _apis: APITable = new Map<string, RunnerFunction>();

    public static extendImpl<T extends AVGScriptUnit>(type: { new(): T }, proxy: RunnerFunction): void {
        if (!this._apis) {
            this._apis = new Map<string, RunnerFunction>();
        }

        if (!proxy) {
            proxy = (): Promise<AVGScriptUnit> => { return null; }
        }

        this._apis.set(type.name, proxy);
        console.log(`Registered API proxy: ${type.name}`);
    }

    public static getImpl<T extends AVGScriptUnit>(APIType: string): RunnerFunction {
        return this._apis.get(APIType);
    }
}

