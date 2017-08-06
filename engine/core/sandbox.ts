import { Character } from "../data/character";
import { AVGScriptUnit } from "../scripting/script-unit";
import { Dialogue } from "../data/dialogue";
import { APIShowDialogue } from "../scripting/api/api-show-dialogue";
import { api } from "../scripting/api";

export class Sandbox {

    public console = console;
    public api = api;

    // Characters Data
    public static Character: Array<Character>;

    // Game Variables
    public static Variables: Map<string, any>;


}

