import { Character } from './character';
import { AVGData } from './avg-data';

export class Dialogue extends AVGData {
  public text: string = "";
  public voice?: string | Array<string> = "";
  public name?: string = "";
  public character?: Character = new Character();
}

