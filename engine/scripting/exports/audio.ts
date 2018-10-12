import { APIExport, AVGExportedAPI } from "./avg-exported-api";
import { SoundBGM, Sound } from "../../data/sound";
import { APISound } from "../api/api-sound";
import { SoundTrack } from "../../const/model";
import { paramCompatible } from "../../core/utils";
import { ResourceData } from "../../data/resource-data";
import { ResourcePath } from "../../core/resource";
import { APIManager } from "../api-manager";
import { OP } from "../../const/op";

@APIExport("audio", EngineAPI_Audio)
export class EngineAPI_Audio extends AVGExportedAPI {
  public static async playBGM(filename: string, options?: SoundBGM) {
    let model = new APISound();
    model.data = new SoundBGM();
    model.data.track = SoundTrack.BGM;

    paramCompatible<APISound, SoundBGM>(model, options, {
      field: "file",
      value: ResourceData.from(filename, ResourcePath.BGM)
    });

    const proxy = APIManager.getImpl(APISound.name, OP.PlayBGM);
    proxy && (await proxy.runner(<APISound>model));
  }

  public static async stopBGM(options?: Sound) {
    let model = new APISound();
    model.data.track = SoundTrack.BGM;

    paramCompatible<APISound, SoundBGM>(model, options);

    const proxy = APIManager.getImpl(APISound.name, OP.StopBGM);
    proxy && (await proxy.runner(<APISound>model));
  }

  public static async pauseBGM(options?: Sound) {
    let model = new APISound();
    model.data.track = SoundTrack.BGM;

    paramCompatible<APISound, SoundBGM>(model, options);

    const proxy = APIManager.getImpl(APISound.name, OP.PauseBGM);
    proxy && (await proxy.runner(<APISound>model));
  }

  /**
   * Represents a book.
   * @constructor
   * @param {string} title - The title of the book.
   * @param {string} author - The author of the book.
   */
  public static async resumeBGM(options?: Sound) {
    let model = new APISound();
    model.data.track = SoundTrack.BGM;

    paramCompatible<APISound, SoundBGM>(model, options);

    const proxy = APIManager.getImpl(APISound.name, OP.ResumeBGM);
    proxy && (await proxy.runner(<APISound>model));
  }

  public static async playVoice(filename: string, options?: Sound) {
    let model = new APISound();
    model.data.track = SoundTrack.Voice;

    paramCompatible<APISound, Sound>(model, options, {
      field: "file",
      value: ResourceData.from(filename, ResourcePath.Voice)
    });

    const proxy = APIManager.getImpl(APISound.name, OP.PlayVoice);
    proxy && (await proxy.runner(<APISound>model));
  }

  public static async playSE(filename: string, options?: Sound) {
    let model = new APISound();
    model.data.track = SoundTrack.Voice;

    paramCompatible<APISound, Sound>(model, options, {
      field: "file",
      value: ResourceData.from(filename, ResourcePath.SE)
    });

    const proxy = APIManager.getImpl(APISound.name, OP.PlaySE);
    proxy && (await proxy.runner(<APISound>model));
  }

  public static async playBGS(filename: string, options?: Sound) {
    let model = new APISound();
    model.data.track = SoundTrack.Voice;

    paramCompatible<APISound, Sound>(model, options, {
      field: "file",
      value: ResourceData.from(filename, ResourcePath.BGS)
    });

    const proxy = APIManager.getImpl(APISound.name, OP.PlayBGS);
    proxy && (await proxy.runner(<APISound>model));
  }
}
