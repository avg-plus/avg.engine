import { AVGScriptUnit } from "../script-unit";
import { ScreenImage } from "../../data/screen-image";

export class APIScreenImage extends AVGScriptUnit {
    public onClicked: (data: ScreenImage) => void;
    public onHover: (data: ScreenImage) => void;
    public data: ScreenImage = new ScreenImage();
}
