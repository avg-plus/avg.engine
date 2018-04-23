import { AVGData } from './avg-data';
import { SoundTrack } from '../const';
import { ResourceData } from './resource-data';
export declare class Sound extends AVGData {
    file: ResourceData;
    track: SoundTrack;
}
export declare class SoundBGM extends Sound {
    loop: boolean;
}
