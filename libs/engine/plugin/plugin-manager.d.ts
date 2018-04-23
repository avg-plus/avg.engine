import { PluginBase } from './plugin-base';
import { PluginEvents } from './avg-plugin';
export declare class PluginManager {
    private static _registeredPlugins;
    static init(): void;
    static register(plugin: PluginBase): void;
    static on(event: PluginEvents, ...args: any[]): void;
}
