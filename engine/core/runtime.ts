import { Sound, SoundBGM } from "../data/sound";
import { Subtitle } from "../data/screen-subtitle";
import { ScreenImage } from "../data/screen-image";
import { Avatar } from "../data/avatar";

export class AVGMusicState {

    public sound: Sound;

    public isStop: boolean;
}

export class AVGGameRuntime {

    private static screenSubtitles: Array<Subtitle>;

    private static screenImages: Array<ScreenImage>

    private static bgm: AVGMusicState;
    
    private static avatars: Array<Avatar>;

    public static Variables: Map<string, any> = new Map<string, any>();
}
