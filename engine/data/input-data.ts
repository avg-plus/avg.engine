import { AVGData } from "./avg-data";

export enum InputType {
    String,
    Number
}

export class InputData extends AVGData {
    public data: string | number = "";
    public inputType: InputType = InputType.String;
    public minLength: number = 0;
    public maxLength: number = 255;
}
