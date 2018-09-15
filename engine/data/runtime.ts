import { Sound } from "./sound";
import { Subtitle } from "./screen-subtitle";
import { ScreenImage } from "./screen-image";
import { Character, Dialogue, SelectedDialogueChoice } from "..";

export class AVGMusicState {

  public sound: Sound;

  public isStop: boolean;

  public constructor(sound: Sound, isStop: boolean) {
    this.sound = sound;
    this.isStop = isStop;
  }
}

export class Runtime {

  public screenSubtitles: Array<Subtitle> = new Array<Subtitle>();

  public screenImages: Array<ScreenImage> = new Array<ScreenImage>();

  public bgm: AVGMusicState;

  public dialogue: Dialogue;

  public characters: Array<Character> = new Array<Character>(5);

  public choices: Array<SelectedDialogueChoice> = new Array<SelectedDialogueChoice>();

  public Variables: Map<string, any> = new Map<string, any>();
}
