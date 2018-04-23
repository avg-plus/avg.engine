export declare class Setting {
    private static settings;
    static TextSpeed: number;
    static AutoPlay: boolean;
    static AutoPlaySpeed: number;
    static BGMVolume: number;
    static BGSVolume: number;
    static SEVolume: number;
    static VoiceVolume: number;
    static WindowWidth: number;
    static WindowHeight: number;
    static FullScreen: boolean;
    static parseFromSettings(settings: string): void;
    private static NumericRange(value, min, max);
}
