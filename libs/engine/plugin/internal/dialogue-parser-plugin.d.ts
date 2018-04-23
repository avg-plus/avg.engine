import { Dialogue } from "../../data";
import { PluginInfo } from "../plugin-info";
import { AVGInternalPlugin } from "../avg-internal-plugin";
export declare class DialogueParserPlugin extends AVGInternalPlugin {
    onLoad(): PluginInfo;
    onUnload(): void;
    static parseContent(text: string): string;
    OnBeforeDialogue(dialogue: Dialogue): void;
}
