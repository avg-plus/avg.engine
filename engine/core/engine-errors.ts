import { PlatformService, AVGGame, AVGStory } from "..";

export class AVGEngineError {
  private static _cb: (error: any) => void;

  public static init(window: any, cb: (error: any) => void) {
    this._cb = cb;

    if (PlatformService.isDesktop()) {
      process.addListener("uncaughtException", event => {
        this._cb(event);
      });
    } else {
      if (window) {
        window.addListener("error", event => {
          this._cb(event);
        });
      }
    }
  }

  public static emit(type, error: string, data?: any) {
    this._cb({
      type,
      desc: error,
      file: AVGStory.TracingScriptFile,
      data: data || {}
    });
  }
}
