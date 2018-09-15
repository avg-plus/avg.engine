import { Sandbox } from "../../core/sandbox";
import { APIManager } from "..";

export function APIExport(name: string, t: any) {
  console.log("APIExport " + name);
  return function(constructor: Function) {
    APIManager.registerExportClass(name, t);
  };
}

export class AVGExportedAPI {}
