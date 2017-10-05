import { Dimension } from "../const/model";
import * as sizeOf from "image-size";

export class Utils {
    public static getImageSize(file: string): Dimension {
        return sizeOf(file);
    }
}