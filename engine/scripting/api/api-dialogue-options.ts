import { AVGScriptUnit } from "..";
import { DialogueChoice } from '../../data/dialogue-choice';

export class APIDialogueChoice extends AVGScriptUnit {
    public options: Array<DialogueChoice> = new Array<DialogueChoice>();
}
