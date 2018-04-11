import { AVGData } from "./avg-data";

export enum ScreenPosition {
    TopLeft = "TopLeft", // 左上
    TopRight = "TopRight", // 右上
    BottomLeft = "BottomLeft", // 左下
    BottomRight = "BottomRight", // 右下
    Top = "Top", // 顶部
    Left = "Left", // 左
    Right = "Right", // 右
    Bottom = "Bottom", // 下
    Center = "Center" // 居中
}

export enum ScreenWidgetType {
    Image,
    Text
}

export enum ScreenWidgetAnimation {
    Enter_Appear = "Appear",
    Enter_FadeIn = "FadeIn",
    Enter_FlyIn = "FlyIn",
    Enter_ScaleIn = "ScaleIn",
    Leave_Hide = "Hide",
    Leave_FadeOut = "FadeOut",
    Leave_FlyOut = "FlyOut",
    Leave_ScaleOut = "ScaleOut"
}

export enum AnimationDirection {
    FromLeft = "Left",
    FromRight = "Right",
    FromUp = "Up",
    FromDown = "Down"
}

/* Animations */
export class WidgetAnimationOptions {
    public duration: number = 5;
}

export class WidgetAnimation_FadeInOptions extends WidgetAnimationOptions { }
export class WidgetAnimation_FadeOutOptions extends WidgetAnimationOptions { }
export class WidgetAnimation_FlyInOptions extends WidgetAnimationOptions {
    public offset: number = 10;
    public direction: string = AnimationDirection.FromLeft;
}

export class WidgetAnimation_FlyOutOptions extends WidgetAnimation_FlyInOptions { }

export class WidgetAnimation {
    public name: ScreenWidgetAnimation;

    public options:
        | WidgetAnimation_FadeInOptions
        | WidgetAnimation_FadeOutOptions
        | WidgetAnimation_FlyInOptions;
}

export class ScreenWidget {
    private _widgetType: ScreenWidgetType;
    private _position: string = ScreenPosition.Center;

    public x: string;
    public y: string;

    public get position() {
        return this._position;
    }

    public set position(value: string) {
        // Ignore spaces
        this._position = value.trim();

        // If custom position
        let regex = /\((\d+%?),(\d+%?)\)/;
        let matches = this._position.match(regex);

        if (matches) {
            this.x = matches[1];
            this.y = matches[2];
        }
    }

    public animation: WidgetAnimation;

    constructor(type: ScreenWidgetType) {
        this._widgetType = type;
    }
}
