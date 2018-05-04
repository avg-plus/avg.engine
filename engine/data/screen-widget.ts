import { AVGData } from "./avg-data";

export class ScreenPosition {
    public static TopLeft = "TopLeft"; // 左上
    public static TopRight = "TopRight"; // 右上
    public static BottomLeft = "BottomLeft"; // 左下
    public static BottomRight = "BottomRight"; // 右下
    public static Top = "Top"; // 顶部
    public static Left = "Left"; // 左
    public static Right = "Right"; // 右
    public static Bottom = "Bottom"; // 下
    public static Center = "Center" // 居中
}

export enum ScreenWidgetType {
    Image,
    Text
}

export class ScreenWidgetAnimation {
    public static Enter_Appear = "Appear";
    public static Enter_FadeIn = "FadeIn";
    public static Enter_FlyIn = "FlyIn";
    public static Enter_ScaleIn = "ScaleIn";
    public static Leave_Hide = "Hide";
    public static Leave_FadeOut = "FadeOut";
    public static Leave_FlyOut = "FlyOut";
    public static Leave_ScaleOut = "ScaleOut"
}

export class AnimationDirection {
    public static FromLeft = "Left";
    public static FromRight = "Right";
    public static FromUp = "Up";
    public static FromDown = "Down"
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
    private _position: string = ScreenPosition.Center;

    public id: string;
    public x: string;
    public y: string;

    public get position() {
        return this._position;
    }

    public set position(value: string) {
        // Ignore spaces
        this._position = value.trim();

        // If custom position
        let regex = /\((\d+%?);(\d+%?)\)/;
        let matches = this._position.match(regex);

        if (matches) {
            this.x = matches[1];
            this.y = matches[2];
        }
    }

    public animation: WidgetAnimation = new WidgetAnimation();

    constructor(type: ScreenWidgetType) {
        this._widgetType = type;
    }
}
