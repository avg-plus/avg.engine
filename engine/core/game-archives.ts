import { Archive } from '../data/archive';
import { AVGGame, GameRunningType } from './game';

export class AVGArchives {

    private static _archives: Array<Archive>;
    private static _selectedArchive: number;
    private static _isLoading: boolean = false;


    public static loadArchive(index: number) {
        this._selectedArchive = index;
        this._isLoading = true;
        AVGGame.setRunningType(GameRunningType.Loading);
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
}