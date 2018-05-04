import { AVGArchives } from "../../core/game-archives";
import { Archive } from "../../data/archive";

export class APIArchive {
    public static async init() {
        await AVGArchives.syncArchiveFromFile();
    }

    public static getList(): Array<Archive> {
        return AVGArchives.getList();
    }

    public static load(index: number): boolean {
        let success: boolean = AVGArchives.loadArchive(index);
        return success;
    }

    public static save(index: number, thumb: string) {
        AVGArchives.saveArchive(index, thumb);
    }
}