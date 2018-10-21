import { ScreenWidget } from "./screen-widget";
import { ScreenWidgetType, ResourceData, Renderer } from ".";
import { Dimension } from "../const/model";
import { AVGMeasurementUnit } from "../core/measurement-unit";

export class ScreenImage extends ScreenWidget {
  public file: ResourceData;

  private _size?: string; // (640, 480), (50%, 30%), 50%

  public width?: string;
  public height?: string;
  public scale?: number;

  public renderer?: Renderer = new Renderer();

  public mergeToRenderer?(renderer: Renderer) {
    renderer.x = renderer.x || this.x;
    renderer.y = renderer.y || this.y;
    renderer.width = renderer.width || this.width;
    renderer.height = renderer.height || this.height;
    renderer.scale = renderer.scale || this.scale || 1;

    return renderer;
  }

  public set size(value: string) {
    const units = AVGMeasurementUnit.fromString(value);

    if (units) {
      if (units.getLeft()) {
        this.width = units.getLeft().getValue();
      }

      if (units.getRight()) {
        this.height = units.getRight().getValue();
      }

      this._size = units.getValue();
    }
  }

  public get size(): string {
    return this._size;
  }

  constructor() {
    super(ScreenWidgetType.Image);

    this.size = "(100%,100%)";
  }
}
