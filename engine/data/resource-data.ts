import { ResourcePath, Resource } from "..";
// import * as path from "path";
const path = null;
const fs = null;
const url = null;

export class ResourceData {
    public filename: string;

    constructor(filename?: string, dir?: ResourcePath) {
        this.filename = "";
        if (dir !== undefined) {
            this.filename = Resource.getPath(dir) + "/"  + filename;
        } else {
            this.filename = filename;
        }
    }

    public static from(filename: string, dir?: ResourcePath) {
        return new ResourceData(filename, dir);
    }
}
