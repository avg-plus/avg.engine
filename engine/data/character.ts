import { AVGData } from "./avg-data";
import { Avatar } from "./avatar";
import { Renderer } from "./renderer";

export class Character extends AVGData {
  // public index?: number = 0;
  // public slot?: number = 0;
  // public x: number = 0;
  // public y: number = 0;
  public position?: string = "(center, bottom)";
  public renderer?: Renderer = new Renderer();
  public avatar?: Avatar = new Avatar();
}
