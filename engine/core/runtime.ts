import { Sound, SoundBGM } from "../data/sound";
import { Subtitle } from "../data/screen-subtitle";
import { ScreenImage } from "../data/screen-image";
import { Avatar } from "../data/avatar";
import { SelectedDialogueChoice, Dialogue, Character } from "..";

export class AVGMusicState {

    public sound: Sound;

    public isStop: boolean;

    public constructor(sound: Sound, isStop: boolean) {
        this.sound = sound;
        this.isStop = isStop;
    }
}

export class AVGGameRuntime {

    public static screenSubtitles: Array<Subtitle>;

    public static screenImages: Array<ScreenImage>

    public static bgm: AVGMusicState;

    public static dialogue: Dialogue;
    
    public static characters: Array<Character>;

    public static choices: Array<SelectedDialogueChoice>;

    public static Variables: Map<string, any> = new Map<string, any>();
}
