import { CameraDirectorLayers } from "./../../data/camera-data";
import { APIExport, AVGExportedAPI } from "./avg-exported-api";
import { APIManager } from "../api-manager";
import { APICamera } from "../api/api-camera";
import { OP } from "../../const/op";
import { CameraData } from "../../data/camera-data";

@APIExport("camera", EngineAPI_Camera)
export class EngineAPI_Camera extends AVGExportedAPI {
  public static async to(layer: CameraDirectorLayers, data: CameraData, duration: number = 1000) {
    const camera = new APICamera();
    camera.layer = layer;
    camera.duration = duration;
    camera.data = data;

    const proxy = APIManager.getImpl(APICamera.name, OP.MoveCamera);
    proxy && (await proxy.runner(<APICamera>camera));
  }

  public static async character(data: CameraData, duration: number = 1000) {}
}
