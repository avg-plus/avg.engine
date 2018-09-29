import { APIExport, AVGExportedAPI } from "./avg-exported-api";
import { APIManager } from "../api-manager";
import { APICamera } from "../api/api-camera";
import { CameraData } from "../../data/camera-data";
import { OP } from "../../const/op";

@APIExport("camera", EngineAPI_Camera)
export class EngineAPI_Camera extends AVGExportedAPI {
  public static async moveTo(duration: number, data: CameraData) {
    const camera = new APICamera();
    camera.duration = duration;
    camera.data = data;

    const proxy = APIManager.getImpl(APICamera.name, OP.MoveCamera);
    proxy && (await proxy.runner(<APICamera>camera));
  }
}
