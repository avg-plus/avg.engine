/// <reference types="node" />
declare module "engine/const/game-events" {
    export const E_GameEvents: {
        OnBeforeGameStart: string;
    };
}
declare module "engine/const/model" {
    export class Dimension {
        width: number;
        height: number;
    }
    export class Position {
        x: number;
        y: number;
    }
    export class ImageTransform {
        private _isStretch;
        stretch: boolean;
        width: string;
        height: string;
        x: string;
        y: string;
    }
    export class Screen extends Dimension {
    }
    export enum SoundTrack {
        BGM = 0,
        BGS = 1,
        SE = 2,
        Voice = 3,
        MAX = 4,
    }
}
declare module "engine/const/op" {
    export enum OP {
        ShowText = "ShowText",
        HideText = "HideText",
        ShowCharacter = "ShowCharacter",
        HideCharacter = "HideCharacter",
        ShowChioce = "ShowChoice",
        HideChioce = "HideChoice",
        PlayBGM = "PlayBGM",
        StopBGM = "StopBGM",
        PauseBGM = "PauseBGM",
        ResumeBGM = "ResumeBGM",
        PlayVoice = "PlayVoice",
        PlayBGS = "PlayBGS",
        PlaySE = "PlaySE",
        LoadScene = "LoadScene",
        AnimateScene = "AnimateScene",
        Wait = "Wait",
        PlayEffect = "PlayEffect",
        StopEffect = "StopEffect",
        GotoTitleView = "GotoTitleView",
        ShowSubtitle = "ShowSubtitle",
        UpdateSubtitle = "UpdateSubtitle",
        HideSubtitle = "HideSubtitle",
        AnimateSubtitle = "AnimateSubtitle",
    }
}
declare module "engine/const/index" {
    export * from "engine/const/game-events";
    export * from "engine/const/model";
    export * from "engine/const/op";
}
declare module "engine/core/env" {
    export class Env {
        static isRunStandalone: () => boolean;
    }
}
declare module "engine/data/avg-data" {
    export class AVGData {
    }
}
declare module "engine/scripting/script-unit" {
    import { AVGData } from "engine/data/avg-data";
    export type RunnerFunction = (scriptUnit: AVGScriptUnit) => void;
    export class AVGScriptUnit {
        data: AVGData;
        private _runner;
        private _isAsync;
        isAsync: boolean;
        runner: RunnerFunction;
    }
}
declare module "engine/data/resource-data" {
    export class ResourceData {
        filename: string;
        constructor(filename?: string);
        static from(filename: string): ResourceData;
    }
}
declare module "engine/data/avatar" {
    import { AVGData } from "engine/data/avg-data";
    export class Avatar extends AVGData {
        file: string;
        width?: number;
        height?: number;
        scale?: number;
    }
}
declare module "engine/data/character" {
    import { AVGData } from "engine/data/avg-data";
    import { Avatar } from "engine/data/avatar";
    export class Character extends AVGData {
        name: string;
        avatar?: Avatar;
    }
}
declare module "engine/data/dialogue" {
    import { Character } from "engine/data/character";
    import { AVGData } from "engine/data/avg-data";
    export class Dialogue extends AVGData {
        text: string;
        voice?: string;
        name?: string;
        character?: Character;
    }
}
declare module "engine/data/dialogue-choice" {
    import { AVGData } from "engine/data/index";
    export class DialogueChoice extends AVGData {
        title: string;
        constructor(text: string);
    }
}
declare module "engine/data/effect" {
    import { AVGData } from "engine/data/avg-data";
    export class Effect extends AVGData {
        effectName: string;
        duration?: number;
        strength?: number;
    }
}
declare module "engine/data/screen-widget" {
    export enum ScreenPosition {
        TopLeft = "TopLeft",
        TopRight = "TopRight",
        BottomLeft = "BottomLeft",
        BottomRight = "BottomRight",
        Top = "Top",
        Left = "Left",
        Right = "Right",
        Bottom = "Bottom",
        Center = "Center",
    }
    export enum ScreenWidgetType {
        Image = 0,
        Text = 1,
    }
    export enum ScreenWidgetAnimation {
        Enter_Appear = "Appear",
        Enter_FadeIn = "FadeIn",
        Enter_FlyIn = "FlyIn",
        Enter_ScaleIn = "ScaleIn",
        Leave_Hide = "Hide",
        Leave_FadeOut = "FadeOut",
        Leave_FlyOut = "FlyOut",
        Leave_ScaleOut = "ScaleOut",
    }
    export enum AnimationDirection {
        FromLeft = "Left",
        FromRight = "Right",
        FromUp = "Up",
        FromDown = "Down",
    }
    export class WidgetAnimationOptions {
        duration: number;
    }
    export class WidgetAnimation_FadeInOptions extends WidgetAnimationOptions {
    }
    export class WidgetAnimation_FadeOutOptions extends WidgetAnimationOptions {
    }
    export class WidgetAnimation_FlyInOptions extends WidgetAnimationOptions {
        offset: number;
        direction: string;
    }
    export class WidgetAnimation_FlyOutOptions extends WidgetAnimation_FlyInOptions {
    }
    export class WidgetAnimation {
        name: ScreenWidgetAnimation;
        options: WidgetAnimation_FadeInOptions | WidgetAnimation_FadeOutOptions | WidgetAnimation_FlyInOptions;
    }
    export class ScreenWidget {
        private _widgetType;
        private _position;
        x: string;
        y: string;
        position: string;
        animation: WidgetAnimation;
        constructor(type: ScreenWidgetType);
    }
}
declare module "engine/data/image" {
    import { ScreenWidget } from "engine/data/screen-widget";
    export class Image extends ScreenWidget {
        file: string;
    }
}
declare module "engine/data/scene" {
    import { ResourceData } from "engine/data/resource-data";
    import { WidgetAnimation } from "engine/data/screen-widget";
    import { ImageTransform } from "engine/const/model";
    export class Scene {
        file: ResourceData;
        block?: boolean;
        duration?: number;
        transform?: ImageTransform;
        animation?: WidgetAnimation;
    }
}
declare module "engine/data/sound" {
    import { AVGData } from "engine/data/avg-data";
    import { SoundTrack } from "engine/const/index";
    import { ResourceData } from "engine/data/resource-data";
    export class Sound extends AVGData {
        file: ResourceData;
        track: SoundTrack;
    }
    export class SoundBGM extends Sound {
        loop: boolean;
    }
}
declare module "engine/data/subtitle" {
    import { ScreenWidget } from "engine/data/screen-widget";
    export class Subtitle extends ScreenWidget {
        id: string;
        text: string;
        constructor();
    }
}
declare module "engine/data/timer" {
    import { AVGData } from "engine/data/avg-data";
    export class Timer extends AVGData {
        time: number;
    }
}
declare module "engine/data/variable" {
    import { AVGData } from "engine/data/avg-data";
    export class Variable extends AVGData {
        name: string;
        value: any;
    }
}
declare module "engine/data/index" {
    export * from "engine/data/avatar";
    export * from "engine/data/avg-data";
    export * from "engine/data/character";
    export * from "engine/data/dialogue-choice";
    export * from "engine/data/dialogue";
    export * from "engine/data/effect";
    export * from "engine/data/image";
    export * from "engine/data/resource-data";
    export * from "engine/data/scene";
    export * from "engine/data/screen-widget";
    export * from "engine/data/sound";
    export * from "engine/data/subtitle";
    export * from "engine/data/timer";
    export * from "engine/data/variable";
}
declare module "engine/scripting/api-manager" {
    import { AVGScriptUnit, RunnerFunction } from "engine/scripting/script-unit";
    export type OP_Runner = {
        op: string;
        runner: RunnerFunction;
    };
    export type OP_RunnerContainer = Array<OP_Runner>;
    export type APITable = Map<string, OP_RunnerContainer>;
    export class APIManager {
        private static _apis;
        static extendImpl<T extends AVGScriptUnit>(typename: string, op: string, implRunner: RunnerFunction): void;
        static getImpl(typename: string, op: string): OP_Runner;
        private static tryCreateOPContainer(typename);
        private static tryGetOP(typename, op);
    }
}
declare module "engine/scripting/api/api-dialogue" {
    import { AVGScriptUnit } from "engine/scripting/script-unit";
    import { Dialogue } from "engine/data/index";
    export class APIDialogue extends AVGScriptUnit {
        data: Dialogue;
    }
}
declare module "engine/scripting/api/api-animate-scene" {
    import { AVGScriptUnit } from "engine/scripting/script-unit";
    export class APIAnimateScene extends AVGScriptUnit {
        index: number;
        animateName: string;
    }
}
declare module "engine/scripting/api/api-character" {
    import { AVGScriptUnit } from "engine/scripting/script-unit";
    import { Avatar } from "engine/index";
    export class APICharacter extends AVGScriptUnit {
        index: number;
        data: Avatar;
    }
}
declare module "engine/scripting/transpiler" {
    export enum TranspilerError {
        None = 0,
    }
    export class Transpiler {
        static Error: {
            UnexpectedReservedKeyword: string;
        };
        static transpile(file: string): Promise<void>;
        static transpileFromCode(code: string): string;
        private static _preprocesser(code);
        private static _transpile(code);
        private static _read(file);
        private static _write(file, data);
        private static _compile_error();
    }
}
declare module "engine/scripting/index" {
    export * from "engine/scripting/api-manager";
    export * from "engine/scripting/script-unit";
    export * from "engine/scripting/story";
    export * from "engine/scripting/transpiler";
}
declare module "engine/scripting/api/api-dialogue-choices" {
    import { AVGScriptUnit } from "engine/scripting/index";
    import { DialogueChoice } from "engine/data/dialogue-choice";
    export class SelectedDialogueChoice {
        selectedIndex: number;
        selectedTitle: string;
    }
    export class APIDialogueChoice extends AVGScriptUnit {
        choices: Array<DialogueChoice>;
    }
}
declare module "engine/scripting/api/api-effect" {
    import { AVGScriptUnit } from "engine/scripting/script-unit";
    import { Effect } from "engine/data/index";
    export class APIEffect extends AVGScriptUnit {
        index: number;
        data: Effect;
    }
}
declare module "engine/scripting/api/api-scene" {
    import { AVGScriptUnit } from "engine/scripting/script-unit";
    import { Scene } from "engine/data/index";
    export class SceneHandle {
        index: number;
    }
    export class APIScene extends AVGScriptUnit {
        index: number;
        data: Scene;
    }
}
declare module "engine/scripting/api/api-sound" {
    import { AVGScriptUnit } from "engine/scripting/script-unit";
    import { Sound } from "engine/data/index";
    export class APISound extends AVGScriptUnit {
        data: Sound;
    }
}
declare module "engine/scripting/api/api-subtitle" {
    import { AVGScriptUnit } from "engine/scripting/script-unit";
    import { Subtitle } from "engine/data/index";
    export class APISubtitle extends AVGScriptUnit {
        data: Subtitle;
    }
}
declare module "engine/scripting/api/api-timer" {
    import { AVGScriptUnit } from "engine/scripting/script-unit";
    import { Timer } from "engine/data/index";
    export class APITimer extends AVGScriptUnit {
        data: Timer;
    }
}
declare module "engine/scripting/api/api-title-view" {
    import { AVGScriptUnit } from "engine/scripting/script-unit";
    export class APIGotoTitleView extends AVGScriptUnit {
    }
}
declare module "engine/scripting/api/api-variable" {
    import { AVGScriptUnit } from "engine/scripting/script-unit";
    export class APIVariable extends AVGScriptUnit {
        static set(name: string, value: any): void;
        static get(name: string): any;
    }
}
declare module "engine/scripting/api/exports" {
    import { Dialogue, Sound, Scene, Timer, WidgetAnimation, Avatar } from "engine/data/index";
    import { Subtitle } from "engine/data/subtitle";
    export namespace api {
        /**
         * Show dialogue box
         *
         * @export
         * @param {string} text
         * @param {Dialogue} [options]
         */
        function showText(text: string | Array<string>, options?: Dialogue): Promise<void>;
        function hideText(options?: Dialogue): Promise<void>;
        function showCharacter(avatar: Avatar, index?: number): Promise<void>;
        function hideCharacter(index?: number): Promise<void>;
        function showChoices(choices: Array<string>): Promise<void>;
        /**
         * Load scene with image filename
         *
         * @export
         * @param {string} filename The background image file of scene
         * @param {Scene} [options]
         */
        function loadScene(index: number, filename: string, options?: Scene): Promise<void>;
        function playBGM(filename: string, options: Sound): Promise<void>;
        function stopBGM(options: Sound): Promise<void>;
        function pauseBGM(options: Sound): Promise<void>;
        /**
         * Represents a book.
         * @constructor
         * @param {string} title - The title of the book.
         * @param {string} author - The author of the book.
         */
        function resumeBGM(options: Sound): Promise<void>;
        function playVoice(filename: string, options: Sound): Promise<void>;
        function playSE(filename: string, options: Sound): Promise<void>;
        function playBGS(filename: string, options: Sound): Promise<void>;
        function wait(time: number, options: Timer): Promise<void>;
        /**
         * Navigate to game title view
         *
         * @export
         */
        function callTitleView(): Promise<void>;
        function sceneEffect(index: number, effectName: string, options: any): Promise<void>;
        function animateScene(index: number, animateName: string, options: any): Promise<void>;
        function getVariable(name: string): Promise<any>;
        function setVariable(name: string, value: any): Promise<any>;
        function showSubtitle(id: string, text: string, options: Subtitle): Promise<void>;
        function animateSubtitle(id: string, animation: WidgetAnimation): Promise<void>;
        function updateSubtitle(id: string, text: string): Promise<void>;
        function hideSubtitle(id: string, options: {
            animation: WidgetAnimation;
        }): Promise<void>;
    }
}
declare module "engine/scripting/api/index" {
    export * from "engine/scripting/api/api-animate-scene";
    export * from "engine/scripting/api/api-character";
    export * from "engine/scripting/api/api-dialogue-choices";
    export * from "engine/scripting/api/api-dialogue";
    export * from "engine/scripting/api/api-effect";
    export * from "engine/scripting/api/api-scene";
    export * from "engine/scripting/api/api-sound";
    export * from "engine/scripting/api/api-subtitle";
    export * from "engine/scripting/api/api-timer";
    export * from "engine/scripting/api/api-title-view";
    export * from "engine/scripting/api/api-variable";
    export * from "engine/scripting/api/exports";
}
declare module "engine/core/sandbox" {
    import { api } from "engine/scripting/api/index";
    export class Sandbox {
        console: Console;
        api: typeof api;
        static Variables: Map<string, any>;
    }
}
declare module "engine/scripting/story" {
    import { AVGScriptUnit } from "engine/scripting/script-unit";
    export class AVGStory {
        private _scriptUnits;
        private _cursor;
        private _sanbox;
        private _code;
        constructor();
        loadFromScripts(units: Array<AVGScriptUnit>): void;
        loadFromFile(filename: string): void;
        getScripts(): Array<AVGScriptUnit>;
        loadFromString(code: string): void;
        private compile();
        addScriptUnit(unit: AVGScriptUnit): void;
        next(): AVGScriptUnit;
    }
}
declare module "engine/core/transition" {
    export interface Transition {
        init(element: any): any;
        fadeEnter(color: number): any;
        fadeLeave(color: number): any;
    }
}
declare module "engine/core/setting" {
    export class Setting {
        private static settings;
        static TextSpeed: number;
        static AutoPlay: boolean;
        static AutoPlaySpeed: number;
        static BGMVolume: number;
        static BGSVolume: number;
        static SEVolume: number;
        static VoiceVolume: number;
        static WindowWidth: number;
        static WindowHeight: number;
        static FullScreen: boolean;
        static parseFromSettings(settings: string): void;
        private static NumericRange(value, min, max);
    }
}
declare module "engine/core/resource" {
    export enum ResourcePath {
        BGM = 0,
        BGS = 1,
        SE = 2,
        Voice = 3,
        Backgrounds = 4,
        Characters = 5,
        Masks = 6,
        UI = 7,
        Icons = 8,
        Effects = 9,
        Plugins = 10,
        Data = 11,
        Scripts = 12,
    }
    export class Resource {
        private static _paths;
        private static _assetsRoot;
        static init(rootDir: string): void;
        static getRoot(): string;
        static getPath(dir: ResourcePath): string;
    }
}
declare module "engine/core/game" {
    import { AVGScriptUnit } from "engine/scripting/script-unit";
    import { Screen } from "engine/const/model";
    export class AVGGame {
        private static DEFAULT_ENTRY_SCRIPT;
        private _entryStory;
        private _scriptDir;
        private _transition;
        private _screen;
        constructor(name?: string, screen?: Screen);
        setResolution(screen: Screen): void;
        getResolution(): Screen;
        setScriptDir(dir: string): void;
        start(entryScript?: string): void;
        startFromAPIs(scripts: Array<AVGScriptUnit>): void;
        private _run();
    }
    export let game: AVGGame;
}
declare module "engine/core/input" {
    export module core {
        enum InputKeys {
            ArrowUp = 0,
            ArrowDown = 1,
            ArrowLeft = 2,
            ArrowRight = 3,
            Ok = 4,
            Cancel = 5,
        }
        class Input {
            static _instance: Input;
            private KeyMap;
            addBinding(binding: InputKeys, key: string): void;
            removeBinding(binding: InputKeys, key: string): void;
            isGamepadConnected(): boolean;
            is(input: InputKeys, key: string): boolean;
        }
    }
    export let input: core.Input;
}
declare module "engine/core/utils" {
    import { Dimension } from "engine/const/model";
    export class Utils {
        static getImageSize(file: string): Dimension;
    }
}
declare module "engine/core/index" {
    export * from "engine/core/env";
    export * from "engine/core/game";
    export * from "engine/core/input";
    export * from "engine/core/resource";
    export * from "engine/core/sandbox";
    export * from "engine/core/setting";
    export * from "engine/core/transition";
    export * from "engine/core/utils";
}
declare module "engine/plugin/plugin-info" {
    export class PluginInfo {
        pluginName: string;
        author: string;
        comment?: string;
    }
}
declare module "engine/plugin/plugin-base" {
    import { PluginInfo } from "engine/plugin/plugin-info";
    export interface PluginBase {
        onLoad(): PluginInfo;
        onUnload(): any;
    }
}
declare module "engine/plugin/avg-plugin" {
    import { Dialogue } from "engine/index";
    import { PluginBase } from "engine/plugin/plugin-base";
    import { PluginInfo } from "engine/plugin/plugin-info";
    export enum PluginEvents {
        OnBeforeStartGame = 0,
        OnAfterStartGame = 1,
        OnBeforeLoadScene = 2,
        OnAfterLoadScene = 3,
        OnBeforeDialogue = 4,
        OnAfterDialogue = 5,
    }
    export class AVGPlugin implements PluginBase {
        onLoad(): PluginInfo;
        onUnload(): void;
        protected OnBeforeDialogue(dialogue: Dialogue): void;
    }
}
declare module "engine/plugin/avg-internal-plugin" {
    import { AVGPlugin } from "engine/plugin/avg-plugin";
    export class AVGInternalPlugin extends AVGPlugin {
    }
}
declare module "engine/plugin/plugin-manager" {
    import { PluginBase } from "engine/plugin/plugin-base";
    import { PluginEvents } from "engine/plugin/avg-plugin";
    export class PluginManager {
        private static _registeredPlugins;
        static init(): void;
        static register(plugin: PluginBase): void;
        static on(event: PluginEvents, ...args: any[]): void;
    }
}
declare module "engine/plugin/index" {
    export * from "engine/plugin/avg-internal-plugin";
    export * from "engine/plugin/avg-plugin";
    export * from "engine/plugin/plugin-base";
    export * from "engine/plugin/plugin-info";
    export * from "engine/plugin/plugin-manager";
}
declare module "engine/plugin/internal/dialogue-parser-plugin" {
    import { Dialogue } from "engine/data/index";
    import { PluginInfo } from "engine/plugin/plugin-info";
    import { AVGInternalPlugin } from "engine/plugin/avg-internal-plugin";
    export class DialogueParserPlugin extends AVGInternalPlugin {
        onLoad(): PluginInfo;
        onUnload(): void;
        static parseContent(text: string): string;
        OnBeforeDialogue(dialogue: Dialogue): void;
    }
}
declare module "engine/plugin/internal/index" {
    export * from "engine/plugin/internal/dialogue-parser-plugin";
}
declare module "engine/index" {
    export * from "engine/const/index";
    export * from "engine/core/index";
    export * from "engine/data/index";
    export * from "engine/plugin/index";
    export * from "engine/plugin/internal/index";
    export * from "engine/scripting/index";
    export * from "engine/scripting/api/index";
}
declare module "engine/data/input-data" {
    import { AVGData } from "engine/data/avg-data";
    export enum InputType {
        String = 0,
        Number = 1,
    }
    export class InputData extends AVGData {
        data: string | number;
        inputType: InputType;
        minLength: number;
        maxLength: number;
    }
}
declare module "engine/scripting/api/api-input-box" {
    import { AVGScriptUnit } from "engine/scripting/script-unit";
    import { InputData } from "engine/data/input-data";
    export class APIInputBox extends AVGScriptUnit {
        data: InputData;
    }
}
