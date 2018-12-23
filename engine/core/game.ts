import { EngineAPI_Camera } from './../scripting/exports/camera';
import { EngineAPI_Flow } from './../scripting/exports/flow';
import * as fs from "fs";
import { EventEmitter } from 'events';

import { AVGStory } from "../scripting/story";
import { AVGScriptUnit } from "../scripting/script-unit";
import { GameRunningPlatform } from "../const/game-running-platform";

// import * as path from 'path';
import { AVGNativePath } from "../core/native-modules/avg-native-path";
import { Screen } from "../const/model";
import { Transition } from "./transition";
import { PluginManager, PlatformService, AVGNativeFS } from "../index";
import { Setting } from "./setting";
import { Resource, ResourcePath } from "./resource";
import { AVGArchives } from "./game-archives";

import { EngineAPI_Text } from './../scripting/exports/text';
import { EngineAPI_Scene } from './../scripting/exports/scene';
import { EngineAPI_Audio } from './../scripting/exports/audio';

export enum GameRunningType {
  Normal,
  Loading
}

export class AVGGame {
  private static DEFAULT_ENTRY_SCRIPT = "start.avs";
  private static _runningType: GameRunningType = GameRunningType.Normal;
  private static _instance: AVGGame;
  public static _entryStory: AVGStory = new AVGStory();

  // Game global message
  private _events = new EventEmitter();
  private _scriptDir: string;
  private _transition: Transition;
  private _runningPlatform: GameRunningPlatform;

  private _screen: Screen = {
    width: 1366,
    height: 768
  };

  constructor(platform?: GameRunningPlatform, name?: string, screen?: Screen) {
    console.log("Game instance initialized.");
  }

  public watch(event: string, cb: (data: any) => void) {
    this._events.on(event, cb);
  }

  public watchOnce(event: string, cb: (data: any) => void) {
    this._events.once(event, cb);
  }

  public emitMessage(event: string, data?: any) {
    this._events.emit(event, data);
  }

  public static getInstance() {
    if (!this._instance) {
      this._instance = new AVGGame();
    }

    return this._instance;
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

  public static isLoading(): boolean {
    return this._runningType == GameRunningType.Loading;
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

    // const scripts = await AVGNativeFS.readFileSync(
    //   AVGNativePath.join(Resource.getPath(ResourcePath.Plugins), "sample-plugin.js")
    // );
    // PluginManager.loadScripts(scripts);

    let scriptDir = this._scriptDir || "./";
    entryScript = entryScript || AVGNativePath.join(scriptDir, AVGGame.DEFAULT_ENTRY_SCRIPT);

    await AVGGame._entryStory.loadFromFile(entryScript);
    await AVGGame._entryStory.run();
  }

  public async resetGame() {
    await EngineAPI_Flow.clearAllIntervals();
    await EngineAPI_Flow.clearAllTimeouts();
    await EngineAPI_Text.hide();
    await await EngineAPI_Camera.transitionTo("black", 1, 0);

    for (let i = 0; i < 99; ++i) {
      await EngineAPI_Scene.remove(i);
    }

    await EngineAPI_Camera.to(0, { x: 0, y: 0, scale: 1 }, 0);

    (await EngineAPI_Audio.getTracks()).map(track => {
      EngineAPI_Audio.stop(track);
    })

    await await EngineAPI_Camera.transitionTo("black", 0, 0);
  }
}

// export let game = AVGGame.getInstance();
