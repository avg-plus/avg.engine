import { AVGScriptUnit } from "../script-unit";
import { Subtitle } from "../../data";
import { ScriptingResult } from "../../data/scripting-result";

export class ScreenSubtitleResult extends ScriptingResult {}

export class APIScreenSubtitle extends AVGScriptUnit {
    public data: Subtitle = new Subtitle();
}
