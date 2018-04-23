import { PluginInfo } from './plugin-info';
export interface PluginBase {
    onLoad(): PluginInfo;
    onUnload(): any;
}
