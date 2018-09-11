import { PluginInfo } from "./plugin-info";
import { Dialogue } from "../index";

export interface PluginBase {
  pluginInfo(): PluginInfo;
}
