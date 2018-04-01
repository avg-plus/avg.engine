import { Dialogue } from '../index';
import { PluginBase } from './plugin-base';
import { PluginInfo } from './plugin-info';

export enum PluginEvents {
    OnBeforeStartGame,
    OnAfterStartGame,
    OnBeforeLoadScene,
    OnAfterLoadScene,
    OnBeforeDialogue,
    OnAfterDialogue,
}

export class AVGPlugin implements PluginBase {
    onLoad(): PluginInfo {
        return {
            pluginName: null,
            author: null,
            comment: null
        };
    }

    onUnload(): void {
        throw new Error('Method not implemented.');
    }

    protected OnBeforeDialogue(dialogue: Dialogue) { }
}