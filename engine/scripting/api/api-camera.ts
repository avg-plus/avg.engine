import { AVGScriptUnit } from "../script-unit";
import { CameraData, CameraDirectorLayers } from "../../data";

export class APICamera extends AVGScriptUnit {
  public layer: CameraDirectorLayers = CameraDirectorLayers.All;
  public duration: number = 1000;
  public data: CameraData = new CameraData();
}
