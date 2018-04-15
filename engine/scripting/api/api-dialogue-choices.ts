import { AVGScriptUnit } from "..";
import { DialogueChoice } from "../../data/dialogue-choice";

export class SelectedDialogueChoice {
    public selectedIndex = -1;
    public selectedTitle = "";
}

export class APIDialogueChoice extends AVGScriptUnit {
    public choices: Array<DialogueChoice> = new Array<DialogueChoice>();
}
