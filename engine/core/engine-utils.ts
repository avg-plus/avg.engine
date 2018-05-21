import { Dimension } from "../const/model";
import * as sizeOf from "image-size";

export class EngineUtils {
  public static getImageSize(file: string): Dimension {
    return sizeOf(file);
  }

  public static async wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public static NumericRange(value: number, min: number, max: number): number {
    if (value < min) {
      value = 0;
    }

    if (value > max) {
      value = 100;
    }

    return value;
  }
}
