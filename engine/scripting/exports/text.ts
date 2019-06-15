import { Sandbox } from "../../core/sandbox";
import { Dialogue } from "../../data/dialogue";
import { APIDialogue } from "../api/api-dialogue";
import { ResourceData } from "../../data/resource-data";
import { ResourcePath } from "../../core/resource";
import { APIManager } from "../api-manager";
import { OP } from "../../const/op";
import { mergeDeep, paramCompatible, isNull } from "../../core/utils";
import { APICharacter } from "../api/api-character";
import { Avatar } from "../../data/avatar";
import { EngineUtils } from "../../core/engine-utils";
import { Renderer } from "../../data/renderer";
import { APIAnimateCharacter } from "../api/api-animate-character";
import { APIDialogueChoice, SelectedDialogueChoice } from "../api/api-dialogue-choices";
import { DialogueChoice } from "../../data/dialogue-choice";
import { AVGGame } from "../../core/game";
import { AVGArchives } from "../../core/game-archives";
import { Transpiler } from "../transpiler";
import { AVGExportedAPI, APIExport } from "./avg-exported-api";

@APIExport("text", EngineAPI_Text)
export class EngineAPI_Text extends AVGExportedAPI {
  /**
   * Show dialogue box
   *
   * @export
   * @param {string} text
   * @param {Dialogue} [options]
   */
  public static async show(text: string | Array<string>, options?: Dialogue) {
    if (Sandbox.isSkipMode) {
      return;
    }

    let model = new APIDialogue();

    let originAvatarFile = "";

    // if (EngineUtils.isUndefined(options.character.avatar.renderer)) {
    //   options.character.avatar.renderer = new Renderer();
    // }

    options = mergeDeep(new Dialogue(), options);

    let voices = [];
    if (options && options.voice) {
      if (Array.isArray(options.voice)) {
        voices = options.voice.slice(0);
      } else {
        voices = [options.voice];
      }
    }

    const _show = async (content: string, showOptions: Dialogue) => {
      console.log("first model options", model);

      // paramCompatible<APIDialogue, Dialogue>(model, showOptions, {
      //   field: "text",
      //   value: content
      // });

      // model.data.text = content;
      model.data = mergeDeep(model.data, showOptions);
      // Object.assign(model.data, showOptions);

      // if (model.data.character && model.data.character.avatar && model.data.character.avatar.file) {
      //   if (originAvatarFile === "") {
      //     originAvatarFile = model.data.character.avatar.file;
      //   }

      //   const fullpath = ResourceData.from(originAvatarFile, ResourcePath.Characters).filename;

      //   model.data.character.avatar.file = fullpath;
      // }

      console.log("model options", model);

      const proxy = APIManager.getImpl(APIDialogue.name, OP.ShowText);
      proxy && (await proxy.runner(<APIDialogue>model));
    };
    // options = mergeDeep(new Dialogue(), options);

    if (Array.isArray(text)) {
      for (let i = 0; i < text.length; ++i) {
        let content = text[i];

        options.text = content;
        options.voice = voices[i] || "";

        await _show(content, options);
      }
    } else {
      options.text = text;
      options.voice = voices[0];

      await _show(<string>text, options);
    }
  }

  public static async hide() {
    let model = new APIDialogue();
    paramCompatible<APIDialogue, Dialogue>(model, {});

    const proxy = APIManager.getImpl(APIDialogue.name, OP.HideText);
    proxy && (await proxy.runner(<APIDialogue>model));
  }
}
