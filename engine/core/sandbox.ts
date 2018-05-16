import { Character } from "../data/character";
import { AVGScriptUnit } from "../scripting/script-unit";
import { Dialogue } from "../data/dialogue";
import { APIDialogue } from "../scripting/api/api-dialogue";
import { api } from "../scripting/api";

export class Sandbox {
    public done: () => void;
    public console = console;
    public api = (global["api"] = api);

    // Game Variables
    // public static Variables: Map<string, any> = new Map<string, any>();
}
