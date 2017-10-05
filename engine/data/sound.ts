import { AVGData } from "./avg-data";
import { SoundTrack } from "../const";
import { ResourceData } from "./resource-data";

export class Sound extends AVGData {
    public file: ResourceData;
    public track: SoundTrack;
}

export class SoundBGM extends Sound {
    public loop: boolean = true;
}