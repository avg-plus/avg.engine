
import { AVGData } from "./avg-data";

export class Character extends AVGData {
    private _name: string;
    private _avatar: string;

    public set name(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }

    public set avatar(avatar: string) {
        this._avatar = avatar;
    }

    public get avatar(): string {
        return this._avatar;
    }
}
