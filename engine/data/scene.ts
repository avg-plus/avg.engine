import { ResourceData } from "./resource-data";
import { WidgetAnimation } from "./screen-widget";
import { ImageTransform } from '../const/model';

export class Scene {
    public file: ResourceData;
    public transition?: string;
    public duration?: number;
    public transform?: ImageTransform = new ImageTransform();
}
