import { AVGData } from "./avg-data";

export class Variable extends AVGData {
    private _name: string;
    private _value: any;

    constructor(name: string, value: any) {
        super();
        
        this._name = name;
        this._value = value;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }

    public set value(value: string) {
        this._value = value;
    }

    public get value(): string {
        return this._value;
    }
}

