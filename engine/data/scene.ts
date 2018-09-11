import { ResourceData } from "./resource-data";
import { WidgetAnimation } from "./screen-widget";
import { ImageTransform } from "../const/model";
import { Renderer } from "./renderer";

export class Scene {
  public file: ResourceData;
  public transition?: string = "crossfade";
  public duration?: number = 1;
  
  public renderer?: Renderer = new Renderer();
}
