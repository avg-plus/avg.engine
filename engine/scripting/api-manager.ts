import { AVGScriptUnit, RunnerFunction } from './script-unit';

export type OP_Runner = { op: string, runner: RunnerFunction };
export type OP_RunnerContainer = Array<OP_Runner>;
export type APITable = Map<string, OP_RunnerContainer>;

export class APIManager {

    private static _apis: APITable = new Map<string, OP_RunnerContainer>();

    public static extendImpl<T extends AVGScriptUnit>(typename: string, op: string, implRunner: RunnerFunction): void {

        if (!op) {
            throw new Error('Invalid OP or runmer');
        }

        if (!this._apis) {
            this._apis = new Map<string, OP_RunnerContainer>();
        }

        if (!implRunner) {
            implRunner = (): Promise<AVGScriptUnit> => { return null; }
        }

        let opData = this.tryGetOP(typename, op);
        if (opData) {
            opData.runner = implRunner;
        } else {
            let container = this.tryCreateOPContainer(typename);
            container.push({ op: op, runner: implRunner })

            this._apis.set(typename, container);
        }

        console.log(`Registered API proxy: ${typename}::${op}`);
    }

    public static getImpl(typename: string, op: string): OP_Runner {
        return this.tryGetOP(typename, op);
    }

    private static tryCreateOPContainer(typename: string) {
        let container = this._apis.get(typename);
        if (!container) {
            container = new Array<OP_Runner>();
            this._apis.set(typename, container);
        }

        return container;
    }

    private static tryGetOP(typename: string, op: string): OP_Runner {
        const container = this._apis.get(typename);
        if (!container) {
            return null;
        }

        for (const opData of container) {
            if (opData.op === op) {
                return opData;
            }
        }

        return null;
    }
}

