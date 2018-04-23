import { AVGScriptUnit, RunnerFunction } from './script-unit';
export declare type OP_Runner = {
    op: string;
    runner: RunnerFunction;
};
export declare type OP_RunnerContainer = Array<OP_Runner>;
export declare type APITable = Map<string, OP_RunnerContainer>;
export declare class APIManager {
    private static _apis;
    static extendImpl<T extends AVGScriptUnit>(typename: string, op: string, implRunner: RunnerFunction): void;
    static getImpl(typename: string, op: string): OP_Runner;
    private static tryCreateOPContainer(typename);
    private static tryGetOP(typename, op);
}
