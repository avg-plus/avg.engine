import * as fs from "fs";

import { AVGStory } from "../scripting/story";
// import { AVGScriptingLoop } from '../scripting/scripting-loop';
import { AVGScriptUnit } from "../scripting/script-unit";

// import * as path from 'path';
import { AVGNativePath } from "../core/native-modules/avg-native-path";
import { Screen } from "../const/model";
import { Transition } from "./transition";
import { PluginManager } from "../index";
import { Setting } from "./setting";
import { Resource } from "./resource";
import { AVGArchives } from "./game-archives";

export enum GameRunningType {
  Normal,
  Loading
}

export class AVGGame {
  private static DEFAULT_ENTRY_SCRIPT = "start.avs";
  private static _runningType: GameRunningType = GameRunningType.Normal;

  private _entryStory: AVGStory;
  // private _scriptingLoop: AVGScriptingLoop;
  private _scriptDir: string;
  private _transition: Transition;

  private _screen: Screen = {
    width: 1366,
    height: 768
  };

  constructor(name?: string, screen?: Screen) {
    this._entryStory = new AVGStory();
    // this._scriptingLoop = new AVGScriptingLoop();
  }

  public setResolution(screen: Screen) {
    this._screen = screen;
  }

  public getResolution(): Screen {
    return this._screen;
  }

  public static setRunningType(type: GameRunningType) {
    this._runningType = type;
  }

  public static getRunningType(): GameRunningType {
    return this._runningType;
  }

  public setScriptDir(dir: string) {
    this._scriptDir = dir;
  }

  public async start(entryScript?: string) {
    // Init plugins
    PluginManager.init();

    let scriptDir = this._scriptDir || "./";
    entryScript =
      entryScript ||
      AVGNativePath.join(scriptDir, AVGGame.DEFAULT_ENTRY_SCRIPT);

    await this._entryStory.loadFromFile(entryScript);
    await this._entryStory.run();
    // this._scriptingLoop.addStory(this._entryStory);
    // this._run();
  }

  // public startFromAPIs(scripts: Array<AVGScriptUnit>) {
  //     this._entryStory.loadFromScripts(scripts);
  //     this._entryStory.run();
  //     // this._scriptingLoop.addStory(this._entryStory);

  //     this._run();
  // }

  private _run() {
    // this._scriptingLoop.run().on(LoopEvents.OnLoopData, (data) => {
    //     console.log(`Received data: `, data);
    // }).on(LoopEvents.OnLoopEnd, () => {
    //     console.log(`Loop ended. Game End.`);
    // });
  }
}

export let game = new AVGGame();
