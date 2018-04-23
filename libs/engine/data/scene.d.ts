import { ResourceData } from "./resource-data";
import { WidgetAnimation } from "./screen-widget";
import { ImageTransform } from '../const/model';
export declare class Scene {
    file: ResourceData;
    block?: boolean;
    duration?: number;
    transform?: ImageTransform;
    animation?: WidgetAnimation;
}
