import { Character } from './character';
import { AVGData } from './avg-data';
export declare class Dialogue extends AVGData {
    text: string;
    voice?: string;
    name?: string;
    character?: Character;
}
