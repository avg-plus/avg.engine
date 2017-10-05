export class Dimension {
    public width: number;
    public height: number;
}

export class Screen extends Dimension {
}

export enum SoundTrack {
    BGM,    // Background Music
    BGS,    // Background Sound
    SE,     // Sound Effect
    Voice,   // CV Voice

    MAX,
}