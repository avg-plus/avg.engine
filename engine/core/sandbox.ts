import { api, SelectedDialogueChoice } from "../scripting/api";
import { plugins } from "../scripting/api/api-plugins";
import { Runtime } from "../data/runtime";

export class Sandbox {
  public done: () => void;
  public console = console;
  public api = (global["api"] = api);
  public plugins = (global["plugins"] = plugins);

  public static runtime: Runtime = new Runtime();

  public static recordChoice(selected: SelectedDialogueChoice) {
    this.runtime.choices.push(selected);
  }
}
