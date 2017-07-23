import { AVGScriptUnit } from "../script-unit";
import { GameSandbox } from "../../core/game-sandbox";
import { Variable } from "../../data/variable";

export class APIVariable extends AVGScriptUnit {
    public set(name: string, value: any) {
        GameSandbox.Variables.set(name, value);
    }

    public get(name: string): any {
        if (GameSandbox.Variables.has(name)) {
            return GameSandbox.Variables.get(name);
        }

        return undefined;
    }
}

export function API_SetVariable(options: Variable): AVGScriptUnit {
    let api = new APIVariable();
    api.set(options.name, options.value);

    return api;
}

export function API_GetVariable(options: Variable): AVGScriptUnit {
    let api = new APIVariable();
    // api.Result = api.get(options.name);

    return api;
}
