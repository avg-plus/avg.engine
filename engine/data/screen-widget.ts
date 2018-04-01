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

export enum ScreenWidgetAnimation_Enter {
    Appear,
    FadeIn,
    FlyIn,

    Typewriter // Text Only
}

export enum ScreenWidgetAnimation_Highlight {}

export enum ScreenWidgetAnimation_Leave {
    Hide,
    FadeOut,
    FlyOut
}

export class ScreenWidget extends AVGData {
    public position: ScreenPosition = ScreenPosition.Center;
    public widgetType: ScreenWidgetType;
    public animation:
        | ScreenWidgetAnimation_Enter
        | ScreenWidgetAnimation_Highlight
        | ScreenWidgetAnimation_Leave;
}
