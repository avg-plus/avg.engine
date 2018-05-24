import * as path from "path-browserify";

export class AVGNativePath {
  public static join(...paths: string[]): string {
    return path.join(...paths);
  }
}
