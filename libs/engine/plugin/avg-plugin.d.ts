import { Dialogue } from '../index';
import { PluginBase } from './plugin-base';
import { PluginInfo } from './plugin-info';
export declare enum PluginEvents {
    OnBeforeStartGame = 0,
    OnAfterStartGame = 1,
    OnBeforeLoadScene = 2,
    OnAfterLoadScene = 3,
    OnBeforeDialogue = 4,
    OnAfterDialogue = 5,
}
export declare class AVGPlugin implements PluginBase {
    onLoad(): PluginInfo;
    onUnload(): void;
    protected OnBeforeDialogue(dialogue: Dialogue): void;
}
