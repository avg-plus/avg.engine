import { APIExport, AVGExportedAPI } from "./avg-exported-api";
import { Timer } from "../../data/timer";
import { Sandbox } from "../../core/sandbox";
import { APITimer } from "../api/api-timer";
import { paramCompatible } from "../../core/utils";
import { APIManager } from "../api-manager";
import { OP } from "../../const/op";

@APIExport("flow", EngineAPI_Flow)
export class EngineAPI_Flow extends AVGExportedAPI {

  public static async wait(time: number /*, options: Timer*/) {
    if (Sandbox.isSkipMode) {
      return;
    }

    let model = new APITimer();
    model.data.time = time;
    // paramCompatible<APITimer, Timer>(model, {}, {
    //   field: "time",
    //   value: time
    // });

    const proxy = APIManager.getImpl(APITimer.name, OP.Wait);
    await proxy.runner(<APITimer>model);
  }
}