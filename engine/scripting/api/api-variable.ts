import { AVGScriptUnit } from '../script-unit';
import { Sandbox } from '../../core/sandbox';
import { Variable } from '../../data/variable';
import { AVGGameRuntime } from '../../core/runtime';

export class APIVariable extends AVGScriptUnit {
    public static set(name: string, value: any) {
        AVGGameRuntime.Variables.set(name, value);
    }

    public static get(name: string): any {
        if (AVGGameRuntime.Variables.has(name)) {
            return AVGGameRuntime.Variables.get(name);
        }

        return undefined;
    }
}
