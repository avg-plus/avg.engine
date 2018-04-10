import { AVGData } from "./avg-data";

export enum ScreenPosition {
    TopLeft, // 左上
    TopRight, // 右上
    BottomLeft, // 左下
    BottomRight, // 右下
    Top, // 顶部
    Left, // 左
    Right, // 右
    Bottom, // 下
    Center // 居中
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

export class WidgetAnimation_FadeInOptions extends WidgetAnimationOptions {}
export class WidgetAnimation_FadeOutOptions extends WidgetAnimationOptions {}
export class WidgetAnimation_FlyInOptions extends WidgetAnimationOptions {
    public offset: number = 10;
    public direction: string = AnimationDirection.FromLeft;
}

export class WidgetAnimation_FlyOutOptions extends WidgetAnimation_FlyInOptions {}

export class WidgetAnimation {
    public name: ScreenWidgetAnimation;

    public options:
        | WidgetAnimation_FadeInOptions
        | WidgetAnimation_FadeOutOptions
        | WidgetAnimation_FlyInOptions;
}

export class ScreenWidget {
    private _widgetType: ScreenWidgetType;

    public position: ScreenPosition = ScreenPosition.Center;
    public animation: WidgetAnimation;

    constructor(type: ScreenWidgetType) {
        this._widgetType = type;
    }
}
