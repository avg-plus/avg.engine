import { AVGScriptUnit } from "../script-unit";
import { CameraData } from "../../data";

export class APICamera extends AVGScriptUnit {
  public duration: number = 1000;
  public data: CameraData = new CameraData();
}
