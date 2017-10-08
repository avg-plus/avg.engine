import { Screen } from "../const/model";

export class Setting {
    // private static _textSpeed: number = 80;
    // private static _autoPlay: boolean = false;
    // private static _autoPlaySpeed: number = 1;
    // private static _bgmVolume: number = 40;
    // private static _bgsVolume: number = 100;
    // private static _seVolume: number = 100;
    // private static _voiceVolume: number = 100;
    // private static _screen: Screen = { width: 1366, height: 768 };

    private static settings: any = {
        screen: {
            width: 1366,
            height: 768,
            fullscreen: false,
        },
        game: {
            text_speed: 80,
            auto_play: false,
            auto_play_speed: 1,
            sound: {
                bgm: 40,
                bgs: 100,
                se: 100,
                voice: 100
            }
        }
    };

    public static get TextSpeed(): number { return this.settings.game.text_speed; }
    public static set TextSpeed(value: number) { this.NumericRange(this.settings.game.text_speed, 0, 100); }
    public static get AutoPlay(): boolean { return this.settings.game.auto_play; }
    public static set AutoPlay(value: boolean) { this.settings.game.auto_play = value; }
    public static get AutoPlaySpeed(): number { return this.settings.game.auto_play_speed; }
    public static set AutoPlaySpeed(value: number) { this.NumericRange(this.settings.game.auto_play_speed, 0, 100); }
    public static get BGMVolume(): number { return this.settings.game.sound.bgm; }
    public static set BGMVolume(value: number) { this.NumericRange(this.settings.game.sound.bgm, 0, 100); }
    public static get BGSVolume(): number { return this.settings.game.sound.bgs; }
    public static set BGSVolume(value: number) { this.NumericRange(this.settings.game.sound.bgs, 0, 100); }
    public static get SEVolume(): number { return this.settings.game.sound.se; }
    public static set SEVolume(value: number) { this.NumericRange(this.settings.game.sound.se, 0, 100); }
    public static get VoiceVolume(): number { return this.settings.game.sound.voice; }
    public static set VoiceVolume(value: number) { this.NumericRange(this.settings.game.sound.voice, 0, 100); }
    public static get WindowWidth(): number { return this.settings.screen.width; }
    public static set WindowWidth(value: number) { this.settings.screen.width = value }
    public static get WindowHeight(): number { return this.settings.screen.height; }
    public static set WindowHeight(value: number) { this.settings.screen.height = value }
    public static get FullScreen(): boolean { return this.settings.screen.fullscreen; }
    public static set FullScreen(value: boolean) { this.settings.screen.fullscreen = value }

    public static parseFromSettings(settings: string) {
        try {
            this.settings = JSON.parse(settings);
            console.log(`Loaded settings: `, this.settings);
        } catch (err) {
            console.error(`Load settings failed:`, err);
        }
    }

    private static NumericRange(value: number, min: number, max: number) {
        if (value < min) {
            value = 0;
        }

        if (value > max) {
            value = 100;
        }
    }
}