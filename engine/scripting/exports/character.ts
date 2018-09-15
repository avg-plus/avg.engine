import { APIExport, AVGExportedAPI } from "./avg-exported-api";
import { APICharacter } from "../api/api-character";
import { Avatar } from "../../data/avatar";
import { ResourceData } from "../../data/resource-data";
import { ResourcePath } from "../../core/resource";
import { EngineUtils } from "../../core/engine-utils";
import { Renderer } from "../../data/renderer";
import { APIManager } from "../api-manager";
import { OP } from "../../const/op";
import { APIAnimateCharacter } from "../api/api-animate-character";
import { paramCompatible } from "../../core/utils";

@APIExport("character", EngineAPI_Character)
export class EngineAPI_Character extends AVGExportedAPI {
  public static async show(index: number, filename: string, options?: Avatar) {
    let model = new APICharacter();
    model.data.index = index;

    // model.data.avatar = new Avatar();
    Object.assign(model.data.avatar, options);

    model.data.avatar.file = ResourceData.from(filename, ResourcePath.Characters).filename;
    if (EngineUtils.isUndefined(model.data.avatar.renderer)) {
      model.data.avatar.renderer = new Renderer();
    }

    const proxy = APIManager.getImpl(APICharacter.name, OP.ShowCharacter);
    proxy && (await proxy.runner(<APICharacter>model));
  }

  public static async animate(index: number, animateName: string, options: any) {
    const model = new APIAnimateCharacter();
    model.index = index;
    model.animateName = animateName;

    const proxy = APIManager.getImpl(APICharacter.name, OP.AnimateCharacter);
    proxy && (await proxy.runner(<APICharacter>model));
  }

  public static async hide(index: number = -1) {
    if (!index) {
      index = -1;
    }

    let model = new APICharacter();
    model.data.index = index;

    paramCompatible<APICharacter, Avatar>(model, {});
    const proxy = APIManager.getImpl(APICharacter.name, OP.HideCharacter);
    proxy && (await proxy.runner(<APICharacter>model));
  }
}
