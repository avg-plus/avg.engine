import { AVGData } from "./avg-data";
import { isNull } from "util";

export class Archive extends AVGData {
    public progressAt: number;
    public timestamp: number;
    public thumbnail: string;
    public data: Map<string, any>;

    constructor(json: any = null) {
        super();

        if (!isNull(json)) {
            this.progressAt = json.progressAt;
            this.timestamp = json.timestamp;
            this.thumbnail = json.thumbnail;
            this.data = json.data;
        }
    }
}
