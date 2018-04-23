import { AVGScriptUnit } from "..";
import { DialogueChoice } from "../../data/dialogue-choice";
export declare class SelectedDialogueChoice {
    selectedIndex: number;
    selectedTitle: string;
}
export declare class APIDialogueChoice extends AVGScriptUnit {
    choices: Array<DialogueChoice>;
}
