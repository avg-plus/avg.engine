import * as fs from "fs";
import * as path from "path";
import { Archive } from "../data/archive";
import { AVGGame, GameRunningType } from "./game";
import { APIManager } from "../scripting/api-manager";
import { Sandbox } from "./sandbox";

export class AVGArchives {

    private static _archiveFilePath: string = "./archives";

    private static _archives: Array<Archive>;
    private static _selectedArchive: number;
    private static _isLoading: boolean = false;


    private static getIndexFromFilename(filename: string): number {
        return Number.parseInt(filename.split(".")[0]);
    }

    private static appendArchive(index: number, archiveString: string) {
        let archiveJson: any = JSON.parse(archiveString);
        let archive: Archive = new Archive(archiveJson);
        this._archives[index] = archive;
    }

    public static saveArchive(index: number, thumb: string) {
        let archive: Archive = new Archive();
        archive.timestamp = new Date().getTime();
        archive.progressAt = APIManager.getCurrentAPILine();
        archive.thumbnail = thumb;
        archive.data = Sandbox.Variables;
    }

    public static loadArchive(index: number) {
        this._selectedArchive = index;
        this._isLoading = true;
        AVGGame.setRunningType(GameRunningType.Loading);
        Sandbox.Variables = this._archives[index].data;
    }

    public static postAPICall(line: number) {
        if (this._isLoading) {
            if (line > this._archives[this._selectedArchive].progressAt) {
                this._isLoading = false;
                AVGGame.setRunningType(GameRunningType.Normal);
            }
        }
    }

    public static getList(): any {
        return this._archives;
    }

    public static async saveToFile(index: number, archive: Archive) {
        return new Promise((resolve, reject) => {
            let filePathAndName: string = path.join(this._archiveFilePath, index + ".te");
            try {
                fs.writeFileSync(filePathAndName, JSON.stringify(archive), "w");
                resolve();
            } catch(err) {
                reject(err);
            }
        });
    }

    public static async syncArchiveFromFile() {
        return new Promise((resolve, reject) => {
            fs.readdir(this._archiveFilePath, (err, files) => {
                if (err) {
                    reject(err);
                    return;
                } 

                files.forEach((filename) => {
                    let filePathAndName = path.join(this._archiveFilePath, filename);
                    fs.stat(filePathAndName, (err, stats) => {
                        if (err) {
                            reject(err);
                            return;
                        }

                        if (stats.isFile()) {
                            fs.readFile(filePathAndName, "utf8", (err, data) => {
                                if (err) {
                                    reject(err);
                                    return;
                                }
                
                                this.appendArchive(this.getIndexFromFilename(filename), data);
                                resolve();
                            });
                        }
                    });
                });
            });
        });
    }
}