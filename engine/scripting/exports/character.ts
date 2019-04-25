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
import { paramCompatible, mergeDeep } from "../../core/utils";
import { Character } from "../../data/character";
import { Sandbox } from "../../core/sandbox";

@APIExport("character", EngineAPI_Character)
export class EngineAPI_Character extends AVGExportedAPI {
  public static async show(id: string, filename: string, options?: Character) {
    let model = new APICharacter();
    model.id = EngineUtils.makeWidgetID(id);
    model.data.avatar = new Avatar();

    model.data = mergeDeep(model.data, options);

    model.data.avatar.file = ResourceData.from(filename, ResourcePath.Characters).filename;
    if (EngineUtils.isNullOrUndefined(model.data.avatar.renderer)) {
      model.data.avatar.renderer = new Renderer();
    }

    Sandbox.runtime.update(OP.ShowCharacter, {
      id: id,
      filename: filename,
      options: options
    });
    const proxy = APIManager.getImpl(APICharacter.name, OP.ShowCharacter);
    return await proxy.runner(<APICharacter>model);
  }

  public static async update(id: string, filename: string, options?: Character) {

    let model = new APICharacter();
    model.id = EngineUtils.makeWidgetID(id);
    model.data.avatar = new Avatar();
    model.data = mergeDeep(model.data, options);
    model.data.position = options.position;

    model.data.avatar.file = ResourceData.from(filename, ResourcePath.Characters).filename;

    if (options && options.renderer && options.renderer.filters) {
      model.data.avatar.renderer.filters = options.renderer.filters;
    }

    const proxy = APIManager.getImpl(APICharacter.name, OP.UpdateCharacter);
    return await proxy.runner(<APICharacter>model);
  }

  public static async animate(id: string, animateName: string, options: any) {
    const model = new APIAnimateCharacter();
    model.id = id;
    model.animateName = animateName;

    const proxy = APIManager.getImpl(APICharacter.name, OP.AnimateCharacter);
    proxy && (await proxy.runner(<APIAnimateCharacter>model));
  }

  public static async hide(id: string | string[]) {

    let ids = [];
    if (Array.isArray(id)) {
      ids = id;
    } else {
      ids = [id];
    }

    ids.map(async v => {
      let model = new APICharacter();
      model.id = EngineUtils.makeWidgetID(v);

      Sandbox.runtime.update(OP.HideCharacter, {
        id: v
      });
      const proxy = APIManager.getImpl(APICharacter.name, OP.HideCharacter);
      return await proxy.runner(<APICharacter>model);
    })

  }

}
