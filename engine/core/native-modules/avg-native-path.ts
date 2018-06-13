import { PlatformService } from "../platform";
// const path = require("path");
import * as path from "path";

export class AVGNativePath {
  public static join(...paths: string[]): string {
    // if (PlatformService.isDesktop()) {
    //   return path.join(paths);
    // } else {
    var parts = [];
    for (var i = 0, l = paths.length; i < l; i++) {
      if (!paths[i]) {
        continue;
      }
      parts = parts.concat(paths[i].split("/"));
    }

    const newParts = [];
    for (i = 0, l = parts.length; i < l; i++) {
      const part = parts[i];
      if (!part) continue;
      if (part === "..") {
        newParts.pop();
      } else {
        newParts.push(part);
      }
    }

    if (parts[0] === "") {
      newParts.unshift("");
    }

    return newParts.join("/") || (newParts.length ? "/" : ".");
  }
  // }
}
