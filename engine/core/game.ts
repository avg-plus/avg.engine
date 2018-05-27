import * as fs from "fs";

import { AVGStory } from "../scripting/story";
import { AVGScriptUnit } from "../scripting/script-unit";
import { GameRunningPlatform } from "../const/game-running-platform";

// import * as path from 'path';
import { AVGNativePath } from "../core/native-modules/avg-native-path";
import { Screen } from "../const/model";
import { Transition } from "./transition";
import { PluginManager, PlatformService } from "../index";
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
  private static _instance: AVGGame;

  private _entryStory: AVGStory = new AVGStory();
  private _scriptDir: string;
  private _transition: Transition;
  private _runningPlatform: GameRunningPlatform;

  private _screen: Screen = {
    width: 1366,
    height: 768
  };

  private constructor(
    platform?: GameRunningPlatform,
    name?: string,
    screen?: Screen
  ) {}

  public static getInstance() {
    if (!this._instance) {
      this._instance = new AVGGame();
    }

    return this._instance;
  }

  public setPlatformService(platformService: PlatformService) {


  }

  public setRunningPlatform(platform: GameRunningPlatform) {
    this._runningPlatform = platform;
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
  }
}

export let game = AVGGame.getInstance();
