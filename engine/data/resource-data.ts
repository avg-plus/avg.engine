export class ResourceData {
    public filename: string;

    constructor(filename?: string) {
        this.filename = filename;
    }

    public static from(filename: string) {
        return new ResourceData(filename);
    }
}