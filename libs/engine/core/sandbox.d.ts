/// <reference types="node" />
import { api } from '../scripting/api';
export declare class Sandbox {
    console: Console;
    api: typeof api;
    static Variables: Map<string, any>;
}
