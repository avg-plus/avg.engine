import { AVGData } from "./avg-data";
import { isNull } from "util";
import { Runtime } from "./runtime";

export class Archive extends AVGData {
    public progressAt: number;
    public timestamp: number;
    public thumbnail: string;
    public runtime: Runtime;

    constructor(json: any = null) {
        super();

        if (!isNull(json)) {
            this.progressAt = json.progressAt;
            this.timestamp = json.timestamp;
            this.thumbnail = json.thumbnail;
            this.runtime = json.runtime;
        }
    }
}
