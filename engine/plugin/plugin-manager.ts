import { PluginBase } from './plugin-base';
import { DialogueParserPlugin, Dialogue } from '../index';
import { PluginEvents } from './avg-plugin';

export class PluginManager {
    private static _registeredPlugins: Map<string, PluginBase>;

    public static init() {
        this._registeredPlugins = new Map<string, PluginBase>();

        // Register internal plugins
        this.register(new DialogueParserPlugin());
    }

    public static register(plugin: PluginBase) {
        let pluginInfo = plugin.onLoad();
        console.log('Plugin registered: ', pluginInfo);

        if (!this._registeredPlugins.has(plugin.constructor.name)) {
            this._registeredPlugins.set(plugin.constructor.name, plugin);
        }
    }

    public static on(event: PluginEvents, ...args: any[]) {
        this._registeredPlugins.forEach((value: PluginBase, key: string) => {
            let eventName = PluginEvents[event];
            let method = value[eventName];

            method && method(...args);
        });
    }
}