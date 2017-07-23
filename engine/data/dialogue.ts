
import { Character } from "./character";
import { AVGData } from "./avg-data";
import { AVGScriptUnit } from "../scripting/script-unit";

export class DialogueOption {
    public title: string;
    public execute: AVGScriptUnit;
}

export class Dialogue extends AVGData {
    public text: string;
    public speaker?: Character;
    public options?: Array<DialogueOption>;
}

