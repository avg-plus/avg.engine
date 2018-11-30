
import { APICameraShake } from './../api/api-camera';
import { CameraDirectorLayers, CameraShakeData } from "./../../data/camera-data";
import { APIExport, AVGExportedAPI } from "./avg-exported-api";
import { APIManager } from "../api-manager";
import { APICameraMove } from "../api/api-camera";
import { OP } from "../../const/op";
import { CameraData } from "../../data/camera-data";

import * as joi from "joi";
import { AVGEngineError } from "../../core/engine-errors";
import { i18n, APITransitionTo } from "../..";

@APIExport("camera", EngineAPI_Camera)
export class EngineAPI_Camera extends AVGExportedAPI {
  public static async to(layer: CameraDirectorLayers, data: CameraData, duration: number = 1000) {
    const camera = new APICameraMove();
    camera.layer = layer;
    camera.duration = duration;
    camera.data = data;

    const proxy = APIManager.getImpl(APICameraMove.name, OP.MoveCamera);
    proxy && (await proxy.runner(<APICameraMove>camera));
  }

  public static async shake(options: CameraShakeData) {

    const schema = joi.object().keys({
      horizontal: joi.number().min(0).default(10),
      vertical: joi.number().min(0).default(10),
      rotation: joi.number().min(0).default(5),
      duration: joi.number().min(1).default(1000).required(),
      count: joi.number().allow(["infinite"]).min(-1).not(0).max(999999).default(5).required(),
    })

    const validateResult = schema.validate(options);
    if (validateResult.error) {
      AVGEngineError.emit(i18n.lang.SCRIPTING_API_IVALID_ARGUMENTS, validateResult.error.message, validateResult.error.stack);
    }

    const api = new APICameraShake();
    api.data = validateResult.value;

    const proxy = APIManager.getImpl(APICameraShake.name, OP.ShakeCamera);
    proxy && (await proxy.runner(<APICameraShake>api));
  }

  public static async stopShake() {

  }


  public static async transitionTo(color: string, opacity: number, duration: number) {
    const api = new APITransitionTo();
    api.color = color || "#FFFFFF";
    api.opacity = opacity;
    api.duration = duration || 1000;

    const proxy = APIManager.getImpl(APITransitionTo.name, OP.TransitionTo);
    proxy && ( proxy.runner(<APITransitionTo>api));
  }
}
