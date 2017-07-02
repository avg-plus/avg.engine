import { AVGScriptUnit } from "../script-unit";
import { Dialogue } from "../../data/dialogue";

export class APIShowDialogue extends AVGScriptUnit {
    public data: Dialogue;
}

export function API_ShowDialogue(options: Dialogue): AVGScriptUnit {
    let script = new APIShowDialogue();
    script.data = options;

    return script;
}
