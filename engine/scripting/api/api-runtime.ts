import { AVGScriptUnit } from "../script-unit";
import { Subtitle } from "../../data/screen-subtitle";
import { AVGGameRuntime, AVGMusicState } from "../../core/runtime";
import { ScreenImage } from "../../data/screen-image";
import { Sound } from "../../data/sound";
import { Dialogue, Avatar, Character } from "../..";
import { isNull } from "util";

export class APIRuntime extends AVGScriptUnit {

    public static updateSubtitles(subtitles: Array<Subtitle>) {
        AVGGameRuntime.screenSubtitles = subtitles;
    }

    public static updateImages(images: Array<ScreenImage>) {
        AVGGameRuntime.screenImages = images;
    }

    public static updateBGM(sound: Sound, isStop: boolean) {
        AVGGameRuntime.bgm = new AVGMusicState(sound, isStop);
    }

    public static updateDialogue(dialogue: Dialogue) {
        AVGGameRuntime.dialogue = dialogue;
        if (!isNull(dialogue.character)) {
            AVGGameRuntime.characters.push(dialogue.character);
        }
    }

    public static updateCharacters(characters: Array<Character>) {
        AVGGameRuntime.characters = characters;
    }
}
