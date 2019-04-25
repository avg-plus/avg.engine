import { AVGScriptUnit, RunnerFunction } from "./script-unit";
import { AVGArchives } from "../core/game-archives";
import { AVGGame, Sandbox } from "..";
import { OP } from "../const";
import { AVGData } from "../data";

export type OP_Runner = { op: string; runner: RunnerFunction };
export type OP_RunnerContainer = Array<OP_Runner>;
export type APITable = Map<string, OP_RunnerContainer>;

export class APIManager {
  private static _apis: APITable = new Map<string, OP_RunnerContainer>();

  private static _currentAPILine: number = 0;

  private static _exportedClasses: Map<string, any> = new Map<string, any>();

  private static _emptyOP: OP_Runner = {op: 'empty', runner: async function (scriptUnit: AVGScriptUnit): Promise<any> {} }

  public static registerExportClass(name: string, t: any) {
    this._exportedClasses.set(name, t);
  }

  public static registeredClasses(): Map<string, any> {
    return this._exportedClasses;
  }

  public static injectExports() {
    this.registeredClasses().forEach((value, key) => {
      Sandbox[key] = global[key] = value;
    });
  }

  public static init() {
    this.injectExports();
  }

  public static extendImpl<T extends AVGScriptUnit>(typename: string, op: string, implRunner: RunnerFunction): void {
    if (!op) {
      throw new Error("Invalid OP or runmer");
    }

    if (!this._apis) {
      this._apis = new Map<string, OP_RunnerContainer>();
    }

    if (!implRunner) {
      implRunner = (): Promise<AVGScriptUnit> => {
        return null;
      };
    }

    let opData = this.tryGetOP(typename, op);
    if (opData) {
      opData.runner = implRunner;
    } else {
      let container = this.tryCreateOPContainer(typename);
      container.push({ op: op, runner: implRunner });

      this._apis.set(typename, container);
    }

    // console.log(`Registered API proxy: ${typename}::${op}`);
  }

  public static getImpl(typename: string, op: string): OP_Runner {
    this._currentAPILine++;
    AVGArchives.postAPICall(this._currentAPILine);

    return AVGGame.isLoading() ? this._emptyOP : this.tryGetOP(typename, op);
  }

  private static tryCreateOPContainer(typename: string) {
    let container = this._apis.get(typename);
    if (!container) {
      container = new Array<OP_Runner>();
      this._apis.set(typename, container);
    }

    return container;
  }

  private static tryGetOP(typename: string, op: string): OP_Runner {
    const container = this._apis.get(typename);
    if (!container) {
      return null;
    }

    for (const opData of container) {
      if (opData.op === op) {
        return opData;
      }
    }

    return null;
  }

  public static getCurrentAPILine() {
    return this._currentAPILine;
  }

  public static resetCurrentAPILine() {
    this._currentAPILine = 0;
  }
}
