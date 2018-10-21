import { AVGScriptUnit } from "../script-unit";
import { APIManager } from "../api-manager";

import {
  Dialogue,
  Sound,
  Scene,
  AVGData,
  ResourceData,
  Timer,
  Variable,
  SoundBGM,
  Effect,
  ScreenPosition,
  ScreenWidgetType,
  WidgetAnimation,
  Avatar,
  Archive,
  Renderer
} from "../../data";

import { APIScene } from "./api-scene";
import { APIDialogue } from "./api-dialogue";
import { APISound } from "./api-sound";
import { APITimer } from "./api-timer";
import { APIVariable } from "./api-variable";
import { SoundTrack } from "../../const";
import {
  Sandbox,
  Resource,
  Setting,
  AVGGame,
  GameRunningType,
  AVGArchives,
  mergeDeep,
  paramCompatible
} from "../../core";
import { APIEffect } from "./api-effect";
import { APIGotoTitleView } from "./api-title-view";
import { OP } from "../../const/op";
import { APIScreenSubtitle } from "./api-screen-subtitle";
import { Subtitle } from "../../data/screen-subtitle";
import {
  ScreenWidgetAnimation,
  WidgetAnimation_HideOptions,
  WidgetAnimation_FadeInOptions
} from "../../data/screen-widget";
import { APIDialogueChoice, SelectedDialogueChoice } from "./api-dialogue-choices";
import { DialogueChoice } from "../../data/dialogue-choice";
import { Character } from "../../data/character";
import { APICharacter } from "./api-character";
import { InputData } from "../../data/input-data";
import { APIInputBox } from "./api-input-box";
import { APICallScript } from "./api-call-script";
import { AVGStory } from "../story";
import { ResourcePath } from "../../core/resource";
import { APIScreenImage, ScreenImageResult } from "./api-screen-image";
import { ScreenImage } from "../../data/screen-image";
import { IDGenerator } from "../../core/id-generator";
import { APITransitionTo } from "./api-transition-to";
import { APIAnimateCharacter } from "./api-animate-character";
import { isNull } from "util";
import { EngineUtils } from "../../core/engine-utils";
import { Transpiler } from "..";

// function paramCompatible<T extends AVGScriptUnit, U extends AVGData>(
//   model: T,
//   options?: any,
//   keyField?: { field: string; value: any }
// ) {
//   let data = <U>model.data;
//   if (keyField) {
//     data[keyField.field] = keyField.value;
//   }

//   if (options && typeof options === "object") {
//     Object.assign(model.data, model.data, options);
//   }

//   return model;
// }

export namespace api {
  
  /**
   * Show dialogue box
   *
   * @export
   * @param {string} text
   * @param {Dialogue} [options]
   */
  export async function showText(text: string | Array<string>, options?: Dialogue) {
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

    const show = async (content: string, showOptions: Dialogue) => {
      if (Sandbox.isSkipMode) {
        return;
      }

      console.log("first model options", model);

      // paramCompatible<APIDialogue, Dialogue>(model, showOptions, {
      //   field: "text",
      //   value: content
      // });

      // model.data.text = content;
      model.data = mergeDeep(model.data, showOptions);
      // Object.assign(model.data, showOptions);

      if (model.data.character && model.data.character.avatar && model.data.character.avatar.file) {
        if (originAvatarFile === "") {
          originAvatarFile = model.data.character.avatar.file;
        }

        const fullpath = ResourceData.from(originAvatarFile, ResourcePath.Characters).filename;

        model.data.character.avatar.file = fullpath;
      }

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

        await show(content, options);
      }
    } else {
      options.text = text;
      options.voice = voices[0];

      await show(<string>text, options);
    }
  }

  export async function hideText() {
    let model = new APIDialogue();
    paramCompatible<APIDialogue, Dialogue>(model, {});

    const proxy = APIManager.getImpl(APIDialogue.name, OP.HideText);
    proxy && (await proxy.runner(<APIDialogue>model));
  }

  export async function showCharacter(index: number, filename: string, options?: Avatar) {
    let model = new APICharacter();
    // model.data.slot = index;

    // model.data.avatar = new Avatar();
    Object.assign(model.data.avatar, options);

    model.data.avatar.file = ResourceData.from(filename, ResourcePath.Characters).filename;
    if (EngineUtils.isNullOrUndefined(model.data.avatar.renderer)) {
      model.data.avatar.renderer = new Renderer();
    }

    const proxy = APIManager.getImpl(APICharacter.name, OP.ShowCharacter);
    proxy && (await proxy.runner(<APICharacter>model));
  }

  // export async function animateCharacter(index: number, animateName: string, options: any) {
  //   const model = new APIAnimateCharacter();
  //   // model.data = index;
  //   model.animateName = animateName;

  //   const proxy = APIManager.getImpl(APICharacter.name, OP.ShowCharacter);
  //   // proxy && (await proxy.runner(<APICharacter>model));
  // }

  export async function hideCharacter(index: number = -1) {
    if (!index) {
      index = -1;
    }

    let model = new APICharacter();
    // model.data.slot = index;

    paramCompatible<APICharacter, Avatar>(model, {});
    const proxy = APIManager.getImpl(APICharacter.name, OP.HideCharacter);
    proxy && (await proxy.runner(<APICharacter>model));
  }

  export async function showChoices(
    choices: Array<string>,
    onEnter: (index: number) => void,
    onLeave: (index: number) => void
  ) {
    let model = new APIDialogueChoice();
    choices.forEach(s => {
      model.choices.push(new DialogueChoice(s));
    });

    model.onEnter = onEnter;
    model.onLeave = onLeave;

    let result: SelectedDialogueChoice;
    const proxy = APIManager.getImpl(APIDialogueChoice.name, OP.ShowChioce);
    if (isNull(proxy) && AVGGame.isLoading()) {
      result = Sandbox.runtime.choices[AVGArchives.loadChoiceCount++];
    } else {
      result = <SelectedDialogueChoice>await proxy.runner(<APIDialogueChoice>model);
      Sandbox.recordChoice(result);
    }

    return result;
  }

  /**
   * Load scene with image filename
   *
   * @export
   * @param {string} filename The background image file of scene
   * @param {Scene} [options]
   */
  export async function loadScene(index: number, filename: string, options?: Scene) {
    let model = new APIScene();
    model.index = index;

    options = mergeDeep(new Scene(), options);

    if (filename && filename.length > 0) {
      paramCompatible<APIScene, Scene>(model, options, {
        field: "file",
        value: ResourceData.from(filename, ResourcePath.Backgrounds)
      });
    } else {
      model.isAsync = false;
      paramCompatible<APIScene, Scene>(model, options, {
        field: "file",
        value: ResourceData.from("//:0")
      });
    }

    // options.duration = options.duration;
    // options.transition = options.transition || "";
    Object.assign(model.data, options);

    let proxy = APIManager.getImpl(APIScene.name, OP.LoadScene);
    if (proxy) {
      return await proxy.runner(<APIScene>model);
    } else {
      return null;
    }
  }

  export async function removeScene(index: number) {
    let model = new APIScene();
    model.index = index;

    return await APIManager.getImpl(APIScene.name, OP.RemoveScene).runner(<APIScene>model);
  }

  export async function playBGM(filename: string, options?: SoundBGM) {
    let model = new APISound();
    model.data = new SoundBGM();
    model.data.track = SoundTrack.BGM;

    paramCompatible<APISound, SoundBGM>(model, options, {
      field: "file",
      value: ResourceData.from(filename, ResourcePath.BGM)
    });

    const proxy = APIManager.getImpl(APISound.name, OP.PlayBGM);
    proxy && (await proxy.runner(<APISound>model));
  }

  export async function stopBGM(options?: Sound) {
    let model = new APISound();
    model.data.track = SoundTrack.BGM;

    paramCompatible<APISound, SoundBGM>(model, options);

    const proxy = APIManager.getImpl(APISound.name, OP.StopBGM);
    proxy && (await proxy.runner(<APISound>model));
  }

  export async function pauseBGM(options?: Sound) {
    let model = new APISound();
    model.data.track = SoundTrack.BGM;

    paramCompatible<APISound, SoundBGM>(model, options);

    const proxy = APIManager.getImpl(APISound.name, OP.PauseBGM);
    proxy && (await proxy.runner(<APISound>model));
  }

  /**
   * Represents a book.
   * @constructor
   * @param {string} title - The title of the book.
   * @param {string} author - The author of the book.
   */
  export async function resumeBGM(options?: Sound) {
    let model = new APISound();
    model.data.track = SoundTrack.BGM;

    paramCompatible<APISound, SoundBGM>(model, options);

    const proxy = APIManager.getImpl(APISound.name, OP.ResumeBGM);
    proxy && (await proxy.runner(<APISound>model));
  }

  export async function playVoice(filename: string, options?: Sound) {
    let model = new APISound();
    model.data.track = SoundTrack.Voice;

    paramCompatible<APISound, Sound>(model, options, {
      field: "file",
      value: ResourceData.from(filename, ResourcePath.Voice)
    });

    const proxy = APIManager.getImpl(APISound.name, OP.PlayVoice);
    proxy && (await proxy.runner(<APISound>model));
  }

  export async function playSE(filename: string, options?: Sound) {
    let model = new APISound();
    model.data.track = SoundTrack.Voice;

    paramCompatible<APISound, Sound>(model, options, {
      field: "file",
      value: ResourceData.from(filename, ResourcePath.SE)
    });

    const proxy = APIManager.getImpl(APISound.name, OP.PlaySE);
    proxy && (await proxy.runner(<APISound>model));
  }

  export async function playBGS(filename: string, options?: Sound) {
    let model = new APISound();
    model.data.track = SoundTrack.Voice;

    paramCompatible<APISound, Sound>(model, options, {
      field: "file",
      value: ResourceData.from(filename, ResourcePath.BGS)
    });

    const proxy = APIManager.getImpl(APISound.name, OP.PlayBGS);
    proxy && (await proxy.runner(<APISound>model));
  }

  export async function wait(time: number, options: Timer) {
    if (Sandbox.isSkipMode) {
      return;
    }

    let model = new APITimer();
    paramCompatible<APITimer, Timer>(model, options, {
      field: "time",
      value: time
    });

    const proxy = APIManager.getImpl(APITimer.name, OP.Wait);
    proxy && (await proxy.runner(<APITimer>model));
  }

  /**
   * Navigate to game title view
   *
   * @export
   */
  export async function callTitleView() {
    let model = new APIGotoTitleView();

    const proxy = APIManager.getImpl(APIGotoTitleView.name, OP.GotoTitleView);
    proxy && (await proxy.runner(<APIGotoTitleView>model));
  }

  export async function effect(effectName: string, options: any) {
    let model = new APIEffect();
    // model.index = index;
    model.data.effectName = effectName;

    paramCompatible<APIEffect, Effect>(model, options);

    const proxy = APIManager.getImpl(APIEffect.name, OP.PlayEffect);
    proxy && (await proxy.runner(<APIEffect>model));
  }

  export async function animateScene(index: number, animateName: string, options: any) {}

  export async function getVariable(name: string): Promise<any> {
    return Promise.resolve(APIVariable.get(name));
  }

  export async function setVariable(name: string, value: any): Promise<any> {
    return Promise.resolve(APIVariable.set(name, value));
  }

  export async function showSubtitle(text: string, options?: Subtitle, isAsync: boolean = false) {
    let model = new APIScreenSubtitle();
    model.isAsync = isAsync;
    model.data = new Subtitle();
    Object.assign(model.data, options);

    model.data.id = "Text_" + IDGenerator.generate();
    model.data.text = text;
    model.data.position = options.position || ScreenPosition.Center;
    model.data.animation = options.animation || new WidgetAnimation();
    model.data.animation.name = model.data.animation.name || ScreenWidgetAnimation.Enter_Appear;
    model.data.animation.options = model.data.animation.options || new WidgetAnimation_FadeInOptions();

    // if (!model.data) {
    //     model.data.animation.name = ScreenWidgetAnimation.Enter_Appear;
    // }

    // paramCompatible<APIScreenSubtitle, Subtitle>(model, options);

    return await APIManager.getImpl(APIScreenSubtitle.name, OP.ShowTextWidget).runner(<APIScreenSubtitle>model);
  }

  export async function animateSubtitle(id: string, animation: WidgetAnimation) {
    let model = new APIScreenSubtitle();
    model.data.id = id;

    const proxy = APIManager.getImpl(APIScreenSubtitle.name, OP.AnimateTextWidget);
    proxy && (await proxy.runner(<APIScreenSubtitle>model));
  }

  export async function updateSubtitle(id: string, text: string) {
    let model = new APIScreenSubtitle();
    model.data.id = id;
    model.data.text = text;

    const proxy = APIManager.getImpl(APIScreenSubtitle.name, OP.UpdateTextWidget);

    proxy && (await proxy.runner(<APIScreenSubtitle>model));
  }

  export async function removeSubtitle(
    id: string,
    options?: { animation?: WidgetAnimation },
    isAsync: boolean = false
  ) {
    let model = new APIScreenSubtitle();
    model.isAsync = isAsync;
    model.data.id = id || undefined;
    model.data.animation = options ? options.animation || undefined : undefined;

    const proxy = APIManager.getImpl(APIScreenSubtitle.name, OP.RemoveTextWidget);

    proxy && (await proxy.runner(<APIScreenSubtitle>model));
  }

  export async function showInputBox(title: string, options: InputData) {
    let model = new APIInputBox();

    paramCompatible<APIInputBox, InputData>(model, options, {
      field: "title",
      value: title
    });

    return await APIManager.getImpl(APIInputBox.name, OP.ShowInputBox).runner(<APIInputBox>model);
  }

  export async function call(file: string) {
    let model = new APICallScript();
    model.scriptFile = ResourceData.from(file, ResourcePath.Scripts).filename;

    let story = new AVGStory();
    await story.loadFromFile(model.scriptFile);
    return await story.run();
  }

  export async function showImage(file: string, options: ScreenImage, isAsync: boolean = false) {
    let model = new APIScreenImage();
    model.isAsync = isAsync;
    model.data = new ScreenImage();
    Object.assign(model.data, options);

    model.data.id = "Image_" + IDGenerator.generate();
    model.data.file = ResourceData.from(file, ResourcePath.Images);
    model.data.position = options.position || ScreenPosition.Center;
    model.data.size = options.size || "100%";
    model.data.animation = model.data.animation || new WidgetAnimation();
    model.data.animation.name = model.data.animation.name || ScreenWidgetAnimation.Enter_Appear;
    model.data.animation.options = model.data.animation.options || new WidgetAnimation_FadeInOptions();

    // paramCompatible<APIScreenImage, ScreenImage>(model, options);

    return await APIManager.getImpl(APIScreenImage.name, OP.ShowImageWidget).runner(<APIScreenImage>model);
  }

  export async function removeImage(id: string, options: ScreenImage, isAsync: boolean = false) {
    let model = new APIScreenImage();

    model.isAsync = isAsync;
    model.data.id = id;

    model.data.animation = new WidgetAnimation();
    model.data.animation.name = ScreenWidgetAnimation.Leave_Hide;

    if (!model.data.animation.options) {
      model.data.animation.options = new WidgetAnimation_HideOptions();
    }

    paramCompatible<APIScreenImage, ScreenImage>(model, options);

    const proxy = APIManager.getImpl(APIScreenImage.name, OP.RemoveImageWidget);
    proxy && (await proxy.runner(<APIScreenImage>model));
  }

  export async function updateSetting(key: string, value: any) {
    Setting[key] = value;
  }

  export async function transitionTo(color: string, opacity: number, duration: number) {
    const api = new APITransitionTo();
    api.color = color || "#FFFFFF";
    api.opacity = opacity;
    api.duration = duration || 1000;

    const proxy = APIManager.getImpl(APITransitionTo.name, OP.TransitionTo);
    proxy && (await proxy.runner(<APITransitionTo>api));
  }

  export async function startSkip() {
    Sandbox.isSkipMode = true;
  }

  export async function stopSkip() {
    Sandbox.isSkipMode = false;
  }
}
