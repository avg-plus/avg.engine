import { SkipOptions } from './../data/skip-options';
import { AVGEngineError } from "./engine-errors";
import { Character } from "../data/character";
import { AVGScriptUnit } from "../scripting/script-unit";
import { Dialogue } from "../data/dialogue";
import { APIDialogue } from "../scripting/api/api-dialogue";
import { api, SelectedDialogueChoice } from "../scripting/api";
import { plugins } from "../scripting/api/api-plugins";
import { Runtime } from "../data/runtime";
import { AVGExportedAPI } from "../scripting/exports/avg-exported-api";
import { AVGStory } from "../scripting/story";

export class Sandbox {
  public done: () => void;
  public console = console;
  public api = (global["api"] = api);
  public $data = (global["$data"] = {});
  public static storyQueue: AVGStory[] = [];

  AVGEngineError = (global["AVGEngineError"] = AVGEngineError);

  public static inject(name: string, t: any) {
    Sandbox[name] = global[name] = t;
    console.log(`Inject ${name} ...`);
  }

  /*
    - API Exports
  */
  public static isSkipMode: boolean = false; // Will skip all dialogues
  public static skipOptions: SkipOptions = {};

  public static runtime: Runtime = new Runtime();
  
  public static recordChoice(selected: SelectedDialogueChoice) {
    this.runtime.choices.push(selected);
  }
}

// const registeredClasses = AVGExportedAPI.registeredClasses();

// for (let i = 0; i < registeredClasses.size; ++i) {
//   const className = registeredClasses.;
// }
