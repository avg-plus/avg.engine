import { Sound, SoundBGM } from "../data/sound";
import { Subtitle } from "../data/screen-subtitle";
import { ScreenImage } from "../data/screen-image";
import { Avatar } from "../data/avatar";

export class AVGGameState {

    public screenSubtitles: Array<Subtitle>;

    public screenImage: Array<ScreenImage>

    public bgm: SoundBGM;
    
    public avatar: Avatar;
}
