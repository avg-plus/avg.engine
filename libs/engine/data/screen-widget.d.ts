export declare enum ScreenPosition {
    TopLeft = "TopLeft",
    TopRight = "TopRight",
    BottomLeft = "BottomLeft",
    BottomRight = "BottomRight",
    Top = "Top",
    Left = "Left",
    Right = "Right",
    Bottom = "Bottom",
    Center = "Center",
}
export declare enum ScreenWidgetType {
    Image = 0,
    Text = 1,
}
export declare enum ScreenWidgetAnimation {
    Enter_Appear = "Appear",
    Enter_FadeIn = "FadeIn",
    Enter_FlyIn = "FlyIn",
    Enter_ScaleIn = "ScaleIn",
    Leave_Hide = "Hide",
    Leave_FadeOut = "FadeOut",
    Leave_FlyOut = "FlyOut",
    Leave_ScaleOut = "ScaleOut",
}
export declare enum AnimationDirection {
    FromLeft = "Left",
    FromRight = "Right",
    FromUp = "Up",
    FromDown = "Down",
}
export declare class WidgetAnimationOptions {
    duration: number;
}
export declare class WidgetAnimation_FadeInOptions extends WidgetAnimationOptions {
}
export declare class WidgetAnimation_FadeOutOptions extends WidgetAnimationOptions {
}
export declare class WidgetAnimation_FlyInOptions extends WidgetAnimationOptions {
    offset: number;
    direction: string;
}
export declare class WidgetAnimation_FlyOutOptions extends WidgetAnimation_FlyInOptions {
}
export declare class WidgetAnimation {
    name: ScreenWidgetAnimation;
    options: WidgetAnimation_FadeInOptions | WidgetAnimation_FadeOutOptions | WidgetAnimation_FlyInOptions;
}
export declare class ScreenWidget {
    private _widgetType;
    private _position;
    x: string;
    y: string;
    position: string;
    animation: WidgetAnimation;
    constructor(type: ScreenWidgetType);
}
