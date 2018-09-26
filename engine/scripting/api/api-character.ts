import { AVGScriptUnit } from "../script-unit";
import { Character } from "../../data/character";
import { Avatar } from "../..";

export class APICharacter extends AVGScriptUnit {
    // public index: number = 0;
    // public data: Avatar = new Avatar();
    public id: string = "";
    public data: Character = new Character();
}
