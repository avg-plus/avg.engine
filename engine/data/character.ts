import { AVGData } from './avg-data';
import { Avatar } from './avatar';

export class Character extends AVGData {
  public index?: number = 0;
  // public offsetX: number = 0;
  // public offsetY: number = 0;
  public avatar?: Avatar = new Avatar();
}
