import { Screen } from "../const/model";

export class Setting {
    private static _textSpeed: number = 80;
    private static _autoPlay: boolean = false;
    private static _autoPlaySpeed: number = 1;
    private static _bgmVolume: number = 40;
    private static _bgsVolume: number = 100;
    private static _seVolume: number = 100;
    private static _voiceVolume: number = 100;
    private static _screen: Screen = { width: 1366, height: 768 };

    public static get TextSpeed(): number { return this._textSpeed; }
    public static set TextSpeed(value: number) { this.NumericRange(this._textSpeed, 0, 100); }
    public static get AutoPlay(): boolean { return this._autoPlay; }
    public static set AutoPlay(value: boolean) { this._autoPlay = value; }
    public static get AutoPlaySpeed(): number { return this._autoPlaySpeed; }
    public static set AutoPlaySpeed(value: number) { this.NumericRange(this._autoPlaySpeed, 0, 100); }
    public static get BGMVolume(): number { return this._bgmVolume; }
    public static set BGMVolume(value: number) { this.NumericRange(this._bgmVolume, 0, 100); }
    public static get BGSVolume(): number { return this._bgsVolume; }
    public static set BGSVolume(value: number) { this.NumericRange(this._bgsVolume, 0, 100); }
    public static get SEVolume(): number { return this._seVolume; }
    public static set SEVolume(value: number) { this.NumericRange(this._seVolume, 0, 100); }
    public static get VoiceVolume(): number { return this._voiceVolume; }
    public static set VoiceVolume(value: number) { this.NumericRange(this._voiceVolume, 0, 100); }
    public static get WindowWidth(): number { return this._screen.width; }
    public static set WindowWidth(value: number) { this._screen.width = value }
    public static get WindowHeight(): number { return this._screen.height; }
    public static set WindowHeight(value: number) { this._screen.height = value }

    private static NumericRange(value: number, min: number, max: number) {
        if (value < min) {
            value = 0;
        }

        if (value > max) {
            value = 100;
        }
    }
}