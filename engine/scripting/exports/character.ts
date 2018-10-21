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
import { Character } from "../../data/character";

@APIExport("character", EngineAPI_Character)
export class EngineAPI_Character extends AVGExportedAPI {
  public static async show(filename: string, options?: Character) {
    let model = new APICharacter();
    // model.data.slot = index;

    model.data.avatar = new Avatar();
    
    model.data = Object.assign(model.data, options);
    // model.data.avatar = Object.assign(model.data.avatar, options.avatar);

    model.data.avatar.file = ResourceData.from(filename, ResourcePath.Characters).filename;
    if (EngineUtils.isNullOrUndefined(model.data.avatar.renderer)) {
      model.data.avatar.renderer = new Renderer();
    }

    console.log(model);

    const proxy = APIManager.getImpl(APICharacter.name, OP.ShowCharacter);
    proxy && (await proxy.runner(<APICharacter>model));
  }

  public static async animate(id: string, animateName: string, options: any) {
    const model = new APIAnimateCharacter();
    model.id = id;
    model.animateName = animateName;

    const proxy = APIManager.getImpl(APICharacter.name, OP.AnimateCharacter);
    proxy && (await proxy.runner(<APIAnimateCharacter>model));
  }

  public static async hide(id: string) {
    // if (!index) {
    //   index = -1;
    // }

    let model = new APICharacter();
    // model.data.slot = index;

    paramCompatible<APICharacter, Avatar>(model, {});
    const proxy = APIManager.getImpl(APICharacter.name, OP.HideCharacter);
    proxy && (await proxy.runner(<APICharacter>model));
  }
}
