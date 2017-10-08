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

    public onUnload() {

    }

    public OnBeforeDialogue(dialogue: Dialogue) {
        // [b][/b] Bold
        // [color=red][/color] Change text color
        // [sN][/size] Change text size

        // Grammar: [color=N][/color]
        dialogue.text = dialogue.text.replace(/\[color=([a-zA-Z0-9#]+)\]/g, `<font color=$1>`);
        dialogue.text = dialogue.text.replace(/\[\/color\]/g, `</font>`);

        // Grammar: [c=N][/c]
        dialogue.text = dialogue.text.replace(/\[c=([a-zA-Z0-9#]+)\]|\[color=([a-zA-Z0-9#]+)\]/g, `<font color=$1>`);
        dialogue.text = dialogue.text.replace(/\[\/c\]/g, `</font>`);

        // Grammar: [bold][/bold]
        dialogue.text = dialogue.text.replace(/\[bold\]/g, `<bold>`);
        dialogue.text = dialogue.text.replace(/\[\/bold\]/g, `</bold>`);

        // Grammar: [b][/b]
        dialogue.text = dialogue.text.replace(/\[b\]/g, `<b>`);
        dialogue.text = dialogue.text.replace(/\[\/b\]/g, `</b>`);

        // Grammar: [italic][/italic]
        dialogue.text = dialogue.text.replace(/\[italic\]/g, `<i>`);
        dialogue.text = dialogue.text.replace(/\[\/italic\]/g, `</i>`);

        // Grammar: [i][/i]
        dialogue.text = dialogue.text.replace(/\[i\]/g, `<i>`);
        dialogue.text = dialogue.text.replace(/\[\/i\]/g, `</i>`);

        // Grammar: [del][/del]
        dialogue.text = dialogue.text.replace(/\[del\]/g, `<del>`);
        dialogue.text = dialogue.text.replace(/\[\/del\]/g, `</del>`);

        // Grammar: [size=N][/size]
        dialogue.text = dialogue.text.replace(/\[size=(\d+)\]/g, `<font size=$1>`);
        dialogue.text = dialogue.text.replace(/\[\/size\]/g, `</font>`);

        // Grammar: [s=N][/s]
        dialogue.text = dialogue.text.replace(/\[s=(\d+)\]/g, `<font size=$1>`);
        dialogue.text = dialogue.text.replace(/\[\/s\]/g, `</font>`);

        // Grammar: [emoji=file]
        dialogue.text = dialogue.text.replace(/\[emoji=([\w\-\. ]+)]/g, `<img src="assets/graphics/emoji/$1" />`);

        // Grammar: ${variable}
        let variableRegex = /\${(.*)}/;
        let vMatch: RegExpExecArray = null;
        while ((vMatch = variableRegex.exec(dialogue.text)) !== null) {
            let value = APIVariable.get(vMatch[1]);
            dialogue.text = dialogue.text.replace(variableRegex, value === undefined ? '' : value)
        }

        console.log("On DialogueParserPlugin called:", dialogue.text);
    }
}