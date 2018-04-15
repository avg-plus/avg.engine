import { Dialogue } from "../../data";
import { AVGPlugin } from "../avg-plugin";
import { PluginInfo } from "../plugin-info";
import { AVGInternalPlugin } from "../avg-internal-plugin";
import { APIVariable } from "../../index";

export class DialogueParserPlugin extends AVGInternalPlugin {
    public onLoad(): PluginInfo {
        return {
            author: "AngryPowman",
            pluginName: "TextParser",
            comment: "Text plugin with text highlighting supported."
        };
    }

    public onUnload() {}

    public static parseContent(text: string) {
        // [b][/b] Bold
        // [color=red][/color] Change text color
        // [sN][/size] Change text size

        if (!text) {
            return "";
        }

        // Grammar: [color=N][/color]
        text = text.replace(/\[color=([a-zA-Z0-9#]+)\]/g, `<font color=$1>`);
        text = text.replace(/\[\/color\]/g, `</font>`);

        // Grammar: [c=N][/c]
        text = text.replace(
            /\[c=([a-zA-Z0-9#]+)\]|\[color=([a-zA-Z0-9#]+)\]/g,
            `<font color=$1>`
        );
        text = text.replace(/\[\/c\]/g, `</font>`);

        // Grammar: [bold][/bold]
        text = text.replace(/\[bold\]/g, `<bold>`);
        text = text.replace(/\[\/bold\]/g, `</bold>`);

        // Grammar: [b][/b]
        text = text.replace(/\[b\]/g, `<b>`);
        text = text.replace(/\[\/b\]/g, `</b>`);

        // Grammar: [italic][/italic]
        text = text.replace(/\[italic\]/g, `<i>`);
        text = text.replace(/\[\/italic\]/g, `</i>`);

        // Grammar: [i][/i]
        text = text.replace(/\[i\]/g, `<i>`);
        text = text.replace(/\[\/i\]/g, `</i>`);

        // Grammar: [del][/del]
        text = text.replace(/\[del\]/g, `<del>`);
        text = text.replace(/\[\/del\]/g, `</del>`);

        // Grammar: [size=N][/size]
        text = text.replace(/\[size=(\d+)\]/g, `<font size=$1>`);
        text = text.replace(/\[\/size\]/g, `</font>`);

        // Grammar: [s=N][/s]
        text = text.replace(/\[s=(\d+)\]/g, `<font size=$1>`);
        text = text.replace(/\[\/s\]/g, `</font>`);

        // Grammar: [emoji=file]
        text = text.replace(
            /\[emoji=([\w\-\. ]+)]/g,
            `<img src='assets/graphics/emoji/$1' />`
        );

        // Grammar: [br]
        text = text.replace(/\[br]/g, `<br>`);

        // Grammar: ${variable}
        let variableRegex = /\${(.*)}/;
        let vMatch: RegExpExecArray = null;
        while ((vMatch = variableRegex.exec(text)) !== null) {
            let value = APIVariable.get(vMatch[1]);
            text = text.replace(
                variableRegex,
                value === undefined ? "" : value
            );
        }

        return text;
    }

    public OnBeforeDialogue(dialogue: Dialogue) {
        dialogue.text = DialogueParserPlugin.parseContent(dialogue.text);
    }
}
