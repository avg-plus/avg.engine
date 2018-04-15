import { AVGScriptUnit } from "../script-unit";
import { Scene } from "../../data";

export class SceneHandle {
    public index: number = 0;
}

export class APIScene extends AVGScriptUnit {

    public index: number = 0;
    public data: Scene = new Scene();
}
