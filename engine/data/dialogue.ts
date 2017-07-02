
import { Character } from "./character";
import { AVGData } from "./avg-data";

export class Dialogue extends AVGData {
    private _text: string;
    private _speaker: Character;

    public get speaker(): Character {
        return this._speaker;
    }

    public set speaker(speaker: Character) {
        this._speaker = speaker;
    }

    public get text(): string {
        return this._text;
    }

    public set text(text: string) {
        this._text = this.parse(text);
    }

    private parse(content: string) {
        // TODO
        return content;
    }
}

