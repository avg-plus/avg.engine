import { InputKeys } from './../../core/input';
import { APIExport, AVGExportedAPI } from "./avg-exported-api";
import { APIExportName } from '../api-export-name';

@APIExport(APIExportName.HotKey, EngineAPI_Hotkey)
export class EngineAPI_Hotkey extends AVGExportedAPI {

  // public static bindHotkey(command: InputKeys, )

  // public static async addHotkeys(keys: string, cb: (event) => void, sources: string[]) {
  //   hotkeys(keys, cb);
  // }
}