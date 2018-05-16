import { AVGScriptUnit } from "..";
import { DialogueChoice } from "../../data/dialogue-choice";
import { AVGData } from "../../data/avg-data";

export class SelectedDialogueChoice extends AVGData {
    public selectedIndex = -1;
    public selectedTitle = "";
}

export class APIDialogueChoice extends AVGScriptUnit {
    public choices: Array<DialogueChoice> = new Array<DialogueChoice>();
    public onEnter: (index: number) => void;
    public onLeave: (index: number) => void;
}
