import { AVGScriptUnit } from "../script-unit";
import { Subtitle } from "../../data/screen-subtitle";
import { Runtime, AVGMusicState } from "../../data/runtime";
import { ScreenImage } from "../../data/screen-image";
import { Sound } from "../../data/sound";
import { Dialogue, Avatar, Character, Sandbox } from "../..";
// import { isNull } from "util";
const path = null;
const fs = null;
const url = null;
const isNull = (v: any) => {}

export class APIRuntime extends AVGScriptUnit {

    public static updateSubtitles(subtitles: Array<Subtitle>) {
        Sandbox.runtime.screenSubtitles = subtitles;
    }

    public static updateImages(images: Array<ScreenImage>) {
        Sandbox.runtime.screenImages = images;
    }

    public static updateBGM(sound: Sound, isStop: boolean) {
        Sandbox.runtime.bgm = new AVGMusicState(sound, isStop);
    }

    public static updateDialogue(dialogue: Dialogue) {
        Sandbox.runtime.dialogue = dialogue;
        if (!isNull(dialogue.character)) {
            Sandbox.runtime.characters[dialogue.character.index] = dialogue.character;
        }
    }

    public static updateCharacters(characters: Array<Character>) {
        Sandbox.runtime.characters = characters;
    }
}
