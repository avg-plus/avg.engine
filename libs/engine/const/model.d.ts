export declare class Dimension {
    width: number;
    height: number;
}
export declare class Position {
    x: number;
    y: number;
}
export declare class ImageTransform {
    private _isStretch;
    stretch: boolean;
    width: string;
    height: string;
    x: string;
    y: string;
}
export declare class Screen extends Dimension {
}
export declare enum SoundTrack {
    BGM = 0,
    BGS = 1,
    SE = 2,
    Voice = 3,
    MAX = 4,
}
