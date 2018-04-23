var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define("engine/const/game-events", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.E_GameEvents = {
        OnBeforeGameStart: 'OnBeforeGameStart',
    };
});
define("engine/const/model", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Dimension {
        constructor() {
            this.width = 0;
            this.height = 0;
        }
    }
    exports.Dimension = Dimension;
    class Position {
        constructor() {
            this.x = 0;
            this.y = 0;
        }
    }
    exports.Position = Position;
    class ImageTransform {
        constructor() {
            this._isStretch = true;
            this.width = "100%";
            this.height = "100%";
            this.x = "0px";
            this.y = "0px";
        }
        get stretch() {
            return this._isStretch;
        }
        set stretch(value) {
            if (value) {
                this.width = "100%";
                this.height = "100%";
            }
            this._isStretch = value;
        }
    }
    exports.ImageTransform = ImageTransform;
    class Screen extends Dimension {
    }
    exports.Screen = Screen;
    var SoundTrack;
    (function (SoundTrack) {
        SoundTrack[SoundTrack["BGM"] = 0] = "BGM";
        SoundTrack[SoundTrack["BGS"] = 1] = "BGS";
        SoundTrack[SoundTrack["SE"] = 2] = "SE";
        SoundTrack[SoundTrack["Voice"] = 3] = "Voice";
        SoundTrack[SoundTrack["MAX"] = 4] = "MAX";
    })(SoundTrack = exports.SoundTrack || (exports.SoundTrack = {}));
});
define("engine/const/op", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OP;
    (function (OP) {
        OP["ShowText"] = "ShowText";
        OP["HideText"] = "HideText";
        OP["ShowCharacter"] = "ShowCharacter";
        OP["HideCharacter"] = "HideCharacter";
        OP["ShowChioce"] = "ShowChoice";
        OP["HideChioce"] = "HideChoice";
        OP["PlayBGM"] = "PlayBGM";
        OP["StopBGM"] = "StopBGM";
        OP["PauseBGM"] = "PauseBGM";
        OP["ResumeBGM"] = "ResumeBGM";
        OP["PlayVoice"] = "PlayVoice";
        OP["PlayBGS"] = "PlayBGS";
        OP["PlaySE"] = "PlaySE";
        OP["LoadScene"] = "LoadScene";
        OP["AnimateScene"] = "AnimateScene";
        OP["Wait"] = "Wait";
        OP["PlayEffect"] = "PlayEffect";
        OP["StopEffect"] = "StopEffect";
        OP["GotoTitleView"] = "GotoTitleView";
        OP["ShowSubtitle"] = "ShowSubtitle";
        OP["UpdateSubtitle"] = "UpdateSubtitle";
        OP["HideSubtitle"] = "HideSubtitle";
        OP["AnimateSubtitle"] = "AnimateSubtitle";
    })(OP = exports.OP || (exports.OP = {}));
});
//@ Auto-Generated indexing files for avg.engine
define("engine/const/index", ["require", "exports", "engine/const/game-events", "engine/const/model", "engine/const/op"], function (require, exports, game_events_1, model_1, op_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(game_events_1);
    __export(model_1);
    __export(op_1);
});
define("engine/core/env", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Env {
    }
    Env.isRunStandalone = () => {
        // return window && window.process && window.process.type;
        return true;
    };
    exports.Env = Env;
});
define("engine/data/avg-data", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AVGData {
    }
    exports.AVGData = AVGData;
});
define("engine/scripting/script-unit", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AVGScriptUnit {
        constructor() {
            this._isAsync = true;
        }
        get isAsync() {
            return this._isAsync;
        }
        set isAsync(value) {
            this._isAsync = value;
        }
        get runner() {
            console.log("Execute API Runner:", this);
            return this._runner;
        }
        set runner(value) {
            this._runner = value;
        }
    }
    exports.AVGScriptUnit = AVGScriptUnit;
});
define("engine/data/resource-data", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ResourceData {
        constructor(filename) {
            this.filename = filename;
        }
        static from(filename) {
            return new ResourceData(filename);
        }
    }
    exports.ResourceData = ResourceData;
});
define("engine/data/avatar", ["require", "exports", "engine/data/avg-data"], function (require, exports, avg_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Avatar extends avg_data_1.AVGData {
    }
    exports.Avatar = Avatar;
});
define("engine/data/character", ["require", "exports", "engine/data/avg-data"], function (require, exports, avg_data_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Character extends avg_data_2.AVGData {
    }
    exports.Character = Character;
});
define("engine/data/dialogue", ["require", "exports", "engine/data/avg-data"], function (require, exports, avg_data_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Dialogue extends avg_data_3.AVGData {
    }
    exports.Dialogue = Dialogue;
});
define("engine/data/dialogue-choice", ["require", "exports", "engine/data/index"], function (require, exports, _1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DialogueChoice extends _1.AVGData {
        constructor(text) {
            super();
            this.title = text;
        }
    }
    exports.DialogueChoice = DialogueChoice;
});
define("engine/data/effect", ["require", "exports", "engine/data/avg-data"], function (require, exports, avg_data_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Effect extends avg_data_4.AVGData {
    }
    exports.Effect = Effect;
});
define("engine/data/screen-widget", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ScreenPosition;
    (function (ScreenPosition) {
        ScreenPosition["TopLeft"] = "TopLeft";
        ScreenPosition["TopRight"] = "TopRight";
        ScreenPosition["BottomLeft"] = "BottomLeft";
        ScreenPosition["BottomRight"] = "BottomRight";
        ScreenPosition["Top"] = "Top";
        ScreenPosition["Left"] = "Left";
        ScreenPosition["Right"] = "Right";
        ScreenPosition["Bottom"] = "Bottom";
        ScreenPosition["Center"] = "Center"; // 居中
    })(ScreenPosition = exports.ScreenPosition || (exports.ScreenPosition = {}));
    var ScreenWidgetType;
    (function (ScreenWidgetType) {
        ScreenWidgetType[ScreenWidgetType["Image"] = 0] = "Image";
        ScreenWidgetType[ScreenWidgetType["Text"] = 1] = "Text";
    })(ScreenWidgetType = exports.ScreenWidgetType || (exports.ScreenWidgetType = {}));
    var ScreenWidgetAnimation;
    (function (ScreenWidgetAnimation) {
        ScreenWidgetAnimation["Enter_Appear"] = "Appear";
        ScreenWidgetAnimation["Enter_FadeIn"] = "FadeIn";
        ScreenWidgetAnimation["Enter_FlyIn"] = "FlyIn";
        ScreenWidgetAnimation["Enter_ScaleIn"] = "ScaleIn";
        ScreenWidgetAnimation["Leave_Hide"] = "Hide";
        ScreenWidgetAnimation["Leave_FadeOut"] = "FadeOut";
        ScreenWidgetAnimation["Leave_FlyOut"] = "FlyOut";
        ScreenWidgetAnimation["Leave_ScaleOut"] = "ScaleOut";
    })(ScreenWidgetAnimation = exports.ScreenWidgetAnimation || (exports.ScreenWidgetAnimation = {}));
    var AnimationDirection;
    (function (AnimationDirection) {
        AnimationDirection["FromLeft"] = "Left";
        AnimationDirection["FromRight"] = "Right";
        AnimationDirection["FromUp"] = "Up";
        AnimationDirection["FromDown"] = "Down";
    })(AnimationDirection = exports.AnimationDirection || (exports.AnimationDirection = {}));
    /* Animations */
    class WidgetAnimationOptions {
        constructor() {
            this.duration = 5;
        }
    }
    exports.WidgetAnimationOptions = WidgetAnimationOptions;
    class WidgetAnimation_FadeInOptions extends WidgetAnimationOptions {
    }
    exports.WidgetAnimation_FadeInOptions = WidgetAnimation_FadeInOptions;
    class WidgetAnimation_FadeOutOptions extends WidgetAnimationOptions {
    }
    exports.WidgetAnimation_FadeOutOptions = WidgetAnimation_FadeOutOptions;
    class WidgetAnimation_FlyInOptions extends WidgetAnimationOptions {
        constructor() {
            super(...arguments);
            this.offset = 10;
            this.direction = AnimationDirection.FromLeft;
        }
    }
    exports.WidgetAnimation_FlyInOptions = WidgetAnimation_FlyInOptions;
    class WidgetAnimation_FlyOutOptions extends WidgetAnimation_FlyInOptions {
    }
    exports.WidgetAnimation_FlyOutOptions = WidgetAnimation_FlyOutOptions;
    class WidgetAnimation {
    }
    exports.WidgetAnimation = WidgetAnimation;
    class ScreenWidget {
        constructor(type) {
            this._position = ScreenPosition.Center;
            this._widgetType = type;
        }
        get position() {
            return this._position;
        }
        set position(value) {
            // Ignore spaces
            this._position = value.trim();
            // If custom position
            let regex = /\((\d+%?),(\d+%?)\)/;
            let matches = this._position.match(regex);
            if (matches) {
                this.x = matches[1];
                this.y = matches[2];
            }
        }
    }
    exports.ScreenWidget = ScreenWidget;
});
define("engine/data/image", ["require", "exports", "engine/data/screen-widget"], function (require, exports, screen_widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Image extends screen_widget_1.ScreenWidget {
    }
    exports.Image = Image;
});
define("engine/data/scene", ["require", "exports", "engine/data/screen-widget", "engine/const/model"], function (require, exports, screen_widget_2, model_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Scene {
        constructor() {
            this.transform = new model_2.ImageTransform();
            this.animation = new screen_widget_2.WidgetAnimation();
        }
    }
    exports.Scene = Scene;
});
define("engine/data/sound", ["require", "exports", "engine/data/avg-data"], function (require, exports, avg_data_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Sound extends avg_data_5.AVGData {
    }
    exports.Sound = Sound;
    class SoundBGM extends Sound {
        constructor() {
            super(...arguments);
            this.loop = true;
        }
    }
    exports.SoundBGM = SoundBGM;
});
define("engine/data/subtitle", ["require", "exports", "engine/data/screen-widget"], function (require, exports, screen_widget_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Subtitle extends screen_widget_3.ScreenWidget {
        constructor() {
            super(screen_widget_3.ScreenWidgetType.Text);
        }
    }
    exports.Subtitle = Subtitle;
});
define("engine/data/timer", ["require", "exports", "engine/data/avg-data"], function (require, exports, avg_data_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Timer extends avg_data_6.AVGData {
    }
    exports.Timer = Timer;
});
define("engine/data/variable", ["require", "exports", "engine/data/avg-data"], function (require, exports, avg_data_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Variable extends avg_data_7.AVGData {
    }
    exports.Variable = Variable;
});
//@ Auto-Generated indexing files for avg.engine
define("engine/data/index", ["require", "exports", "engine/data/avatar", "engine/data/avg-data", "engine/data/character", "engine/data/dialogue-choice", "engine/data/dialogue", "engine/data/effect", "engine/data/image", "engine/data/resource-data", "engine/data/scene", "engine/data/screen-widget", "engine/data/sound", "engine/data/subtitle", "engine/data/timer", "engine/data/variable"], function (require, exports, avatar_1, avg_data_8, character_1, dialogue_choice_1, dialogue_1, effect_1, image_1, resource_data_1, scene_1, screen_widget_4, sound_1, subtitle_1, timer_1, variable_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(avatar_1);
    __export(avg_data_8);
    __export(character_1);
    __export(dialogue_choice_1);
    __export(dialogue_1);
    __export(effect_1);
    __export(image_1);
    __export(resource_data_1);
    __export(scene_1);
    __export(screen_widget_4);
    __export(sound_1);
    __export(subtitle_1);
    __export(timer_1);
    __export(variable_1);
});
define("engine/scripting/api-manager", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class APIManager {
        static extendImpl(typename, op, implRunner) {
            if (!op) {
                throw new Error('Invalid OP or runmer');
            }
            if (!this._apis) {
                this._apis = new Map();
            }
            if (!implRunner) {
                implRunner = () => { return null; };
            }
            let opData = this.tryGetOP(typename, op);
            if (opData) {
                opData.runner = implRunner;
            }
            else {
                let container = this.tryCreateOPContainer(typename);
                container.push({ op: op, runner: implRunner });
                this._apis.set(typename, container);
            }
            console.log(`Registered API proxy: ${typename}::${op}`);
        }
        static getImpl(typename, op) {
            return this.tryGetOP(typename, op);
        }
        static tryCreateOPContainer(typename) {
            let container = this._apis.get(typename);
            if (!container) {
                container = new Array();
                this._apis.set(typename, container);
            }
            return container;
        }
        static tryGetOP(typename, op) {
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
    }
    APIManager._apis = new Map();
    exports.APIManager = APIManager;
});
define("engine/scripting/api/api-dialogue", ["require", "exports", "engine/scripting/script-unit", "engine/data/index"], function (require, exports, script_unit_1, data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class APIDialogue extends script_unit_1.AVGScriptUnit {
        constructor() {
            super(...arguments);
            this.data = new data_1.Dialogue();
        }
    }
    exports.APIDialogue = APIDialogue;
});
define("engine/scripting/api/api-animate-scene", ["require", "exports", "engine/scripting/script-unit"], function (require, exports, script_unit_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class APIAnimateScene extends script_unit_2.AVGScriptUnit {
        constructor() {
            super(...arguments);
            this.index = 0;
        }
    }
    exports.APIAnimateScene = APIAnimateScene;
});
define("engine/scripting/api/api-character", ["require", "exports", "engine/scripting/script-unit", "engine/index"], function (require, exports, script_unit_3, __1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class APICharacter extends script_unit_3.AVGScriptUnit {
        constructor() {
            super(...arguments);
            this.index = 0;
            this.data = new __1.Avatar();
        }
    }
    exports.APICharacter = APICharacter;
});
define("engine/scripting/transpiler", ["require", "exports", "fs", "esprima"], function (require, exports, fs, esprima) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TranspilerError;
    (function (TranspilerError) {
        TranspilerError[TranspilerError["None"] = 0] = "None";
    })(TranspilerError = exports.TranspilerError || (exports.TranspilerError = {}));
    class Transpiler {
        static transpile(file) {
            return __awaiter(this, void 0, void 0, function* () {
                const raw = yield this._read(file);
                if (raw) {
                    let compiled = this._preprocesser(raw);
                }
            });
        }
        static transpileFromCode(code) {
            return this._preprocesser(code);
        }
        static _preprocesser(code) {
            if (code.indexOf('await ') >= 0) {
                throw Transpiler.Error.UnexpectedReservedKeyword;
            }
            if (code.indexOf('async ') >= 0) {
                throw Transpiler.Error.UnexpectedReservedKeyword;
            }
            return this._transpile(code);
        }
        static _transpile(code) {
            let generated = code;
            let loc_pos = [];
            let program = esprima.parse(code, {
                range: true
            }, (node, meta) => {
                if (node.type === 'CallExpression' && node.callee) {
                    let callee = node.callee;
                    let calleeObj = callee.object;
                    if (calleeObj && calleeObj.name === 'api') {
                        loc_pos.push(node.callee.range[0]);
                    }
                }
            });
            const keyword = 'await ';
            for (let pos of loc_pos.reverse()) {
                if (pos > 0) {
                    generated = generated.slice(0, pos) + keyword + generated.slice(pos);
                }
                else {
                    generated = keyword + generated;
                }
            }
            // return `+(async() => {try {${generated} } catch (err) { console.error('Game runtime errors');}})();`;
            return `+(async() => { ${generated} })();`;
        }
        static _read(file) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield new Promise((resolve, reject) => {
                    fs.readFile(file, 'utf8', (err, data) => {
                        if (err)
                            reject(err);
                        resolve(data);
                    });
                });
            });
        }
        static _write(file, data) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield new Promise((resolve, reject) => {
                    fs.writeFile(file, data, (err) => {
                        if (err)
                            reject(err);
                        resolve();
                    });
                });
            });
        }
        static _compile_error() {
        }
    }
    Transpiler.Error = {
        UnexpectedReservedKeyword: 'UnexpectedReservedKeywordError: '
    };
    exports.Transpiler = Transpiler;
});
//@ Auto-Generated indexing files for avg.engine
define("engine/scripting/index", ["require", "exports", "engine/scripting/api-manager", "engine/scripting/script-unit", "engine/scripting/story", "engine/scripting/transpiler"], function (require, exports, api_manager_1, script_unit_4, story_1, transpiler_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_manager_1);
    __export(script_unit_4);
    __export(story_1);
    __export(transpiler_1);
});
define("engine/scripting/api/api-dialogue-choices", ["require", "exports", "engine/scripting/index"], function (require, exports, __2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SelectedDialogueChoice {
        constructor() {
            this.selectedIndex = -1;
            this.selectedTitle = "";
        }
    }
    exports.SelectedDialogueChoice = SelectedDialogueChoice;
    class APIDialogueChoice extends __2.AVGScriptUnit {
        constructor() {
            super(...arguments);
            this.choices = new Array();
        }
    }
    exports.APIDialogueChoice = APIDialogueChoice;
});
define("engine/scripting/api/api-effect", ["require", "exports", "engine/scripting/script-unit", "engine/data/index"], function (require, exports, script_unit_5, data_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class APIEffect extends script_unit_5.AVGScriptUnit {
        constructor() {
            super(...arguments);
            this.index = 0;
            this.data = new data_2.Effect();
        }
    }
    exports.APIEffect = APIEffect;
});
define("engine/scripting/api/api-scene", ["require", "exports", "engine/scripting/script-unit", "engine/data/index"], function (require, exports, script_unit_6, data_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SceneHandle {
        constructor() {
            this.index = 0;
        }
    }
    exports.SceneHandle = SceneHandle;
    class APIScene extends script_unit_6.AVGScriptUnit {
        constructor() {
            super(...arguments);
            this.index = 0;
            this.data = new data_3.Scene();
        }
    }
    exports.APIScene = APIScene;
});
define("engine/scripting/api/api-sound", ["require", "exports", "engine/scripting/script-unit", "engine/data/index"], function (require, exports, script_unit_7, data_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class APISound extends script_unit_7.AVGScriptUnit {
        constructor() {
            super(...arguments);
            this.data = new data_4.Sound();
        }
    }
    exports.APISound = APISound;
});
define("engine/scripting/api/api-subtitle", ["require", "exports", "engine/scripting/script-unit", "engine/data/index"], function (require, exports, script_unit_8, data_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class APISubtitle extends script_unit_8.AVGScriptUnit {
        constructor() {
            super(...arguments);
            this.data = new data_5.Subtitle();
        }
    }
    exports.APISubtitle = APISubtitle;
});
define("engine/scripting/api/api-timer", ["require", "exports", "engine/scripting/script-unit", "engine/data/index"], function (require, exports, script_unit_9, data_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class APITimer extends script_unit_9.AVGScriptUnit {
        constructor() {
            super(...arguments);
            this.data = new data_6.Timer();
        }
    }
    exports.APITimer = APITimer;
});
define("engine/scripting/api/api-title-view", ["require", "exports", "engine/scripting/script-unit"], function (require, exports, script_unit_10) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class APIGotoTitleView extends script_unit_10.AVGScriptUnit {
    }
    exports.APIGotoTitleView = APIGotoTitleView;
});
define("engine/scripting/api/api-variable", ["require", "exports", "engine/scripting/script-unit", "engine/core/sandbox"], function (require, exports, script_unit_11, sandbox_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class APIVariable extends script_unit_11.AVGScriptUnit {
        static set(name, value) {
            sandbox_1.Sandbox.Variables.set(name, value);
        }
        static get(name) {
            if (sandbox_1.Sandbox.Variables.has(name)) {
                return sandbox_1.Sandbox.Variables.get(name);
            }
            return undefined;
        }
    }
    exports.APIVariable = APIVariable;
});
define("engine/scripting/api/exports", ["require", "exports", "engine/scripting/api-manager", "engine/data/index", "engine/scripting/api/api-scene", "engine/scripting/api/api-dialogue", "engine/scripting/api/api-sound", "engine/scripting/api/api-timer", "engine/scripting/api/api-variable", "engine/const/index", "engine/scripting/api/api-effect", "engine/scripting/api/api-title-view", "engine/const/op", "engine/scripting/api/api-subtitle", "engine/data/screen-widget", "engine/scripting/api/api-dialogue-choices", "engine/data/dialogue-choice", "engine/scripting/api/api-character"], function (require, exports, api_manager_2, data_7, api_scene_1, api_dialogue_1, api_sound_1, api_timer_1, api_variable_1, const_1, api_effect_1, api_title_view_1, op_2, api_subtitle_1, screen_widget_5, api_dialogue_choices_1, dialogue_choice_2, api_character_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function paramCompatible(model, options, keyField) {
        let data = model.data;
        if (keyField) {
            data[keyField.field] = keyField.value;
        }
        if (options && typeof options === "object") {
            Object.assign(model.data, model.data, options);
        }
        return model;
    }
    var api;
    (function (api) {
        /**
         * Show dialogue box
         *
         * @export
         * @param {string} text
         * @param {Dialogue} [options]
         */
        function showText(text, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const show = (content) => __awaiter(this, void 0, void 0, function* () {
                    let model = new api_dialogue_1.APIDialogue();
                    paramCompatible(model, options, {
                        field: "text",
                        value: content
                    });
                    const proxy = api_manager_2.APIManager.getImpl(api_dialogue_1.APIDialogue.name, op_2.OP.ShowText);
                    proxy && (yield proxy.runner(model));
                });
                if (Array.isArray(text)) {
                    for (let content of text) {
                        yield show(content);
                    }
                }
                else {
                    yield show(text);
                }
            });
        }
        api.showText = showText;
        function hideText(options) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_dialogue_1.APIDialogue();
                paramCompatible(model, options);
                const proxy = api_manager_2.APIManager.getImpl(api_dialogue_1.APIDialogue.name, op_2.OP.HideText);
                proxy && (yield proxy.runner(model));
            });
        }
        api.hideText = hideText;
        function showCharacter(avatar, index = 0) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_character_1.APICharacter();
                model.data = avatar;
                model.index = index;
                paramCompatible(model, {});
                const proxy = api_manager_2.APIManager.getImpl(api_character_1.APICharacter.name, op_2.OP.ShowCharacter);
                proxy && (yield proxy.runner(model));
            });
        }
        api.showCharacter = showCharacter;
        function hideCharacter(index = -1) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_character_1.APICharacter();
                model.index = index;
                paramCompatible(model, {});
                const proxy = api_manager_2.APIManager.getImpl(api_character_1.APICharacter.name, op_2.OP.HideCharacter);
                proxy && (yield proxy.runner(model));
            });
        }
        api.hideCharacter = hideCharacter;
        function showChoices(choices) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_dialogue_choices_1.APIDialogueChoice();
                choices.forEach(s => {
                    model.choices.push(new dialogue_choice_2.DialogueChoice(s));
                });
                return yield api_manager_2.APIManager.getImpl(api_dialogue_choices_1.APIDialogueChoice.name, op_2.OP.ShowChioce).runner(model);
            });
        }
        api.showChoices = showChoices;
        /**
         * Load scene with image filename
         *
         * @export
         * @param {string} filename The background image file of scene
         * @param {Scene} [options]
         */
        function loadScene(index, filename, options) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_scene_1.APIScene();
                model.index = index;
                paramCompatible(model, options, {
                    field: "file",
                    value: data_7.ResourceData.from(filename)
                });
                return yield api_manager_2.APIManager.getImpl(api_scene_1.APIScene.name, op_2.OP.LoadScene).runner(model);
            });
        }
        api.loadScene = loadScene;
        function playBGM(filename, options) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_sound_1.APISound();
                model.data.track = const_1.SoundTrack.BGM;
                paramCompatible(model, options, {
                    field: "file",
                    value: data_7.ResourceData.from(filename)
                });
                const proxy = api_manager_2.APIManager.getImpl(api_sound_1.APISound.name, op_2.OP.PlayBGM);
                proxy && (yield proxy.runner(model));
            });
        }
        api.playBGM = playBGM;
        function stopBGM(options) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_sound_1.APISound();
                model.data.track = const_1.SoundTrack.BGM;
                paramCompatible(model, options);
                const proxy = api_manager_2.APIManager.getImpl(api_sound_1.APISound.name, op_2.OP.StopBGM);
                proxy && (yield proxy.runner(model));
            });
        }
        api.stopBGM = stopBGM;
        function pauseBGM(options) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_sound_1.APISound();
                model.data.track = const_1.SoundTrack.BGM;
                paramCompatible(model, options);
                const proxy = api_manager_2.APIManager.getImpl(api_sound_1.APISound.name, op_2.OP.PauseBGM);
                proxy && (yield proxy.runner(model));
            });
        }
        api.pauseBGM = pauseBGM;
        /**
         * Represents a book.
         * @constructor
         * @param {string} title - The title of the book.
         * @param {string} author - The author of the book.
         */
        function resumeBGM(options) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_sound_1.APISound();
                model.data.track = const_1.SoundTrack.BGM;
                paramCompatible(model, options);
                const proxy = api_manager_2.APIManager.getImpl(api_sound_1.APISound.name, op_2.OP.ResumeBGM);
                proxy && (yield proxy.runner(model));
            });
        }
        api.resumeBGM = resumeBGM;
        function playVoice(filename, options) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_sound_1.APISound();
                model.data.track = const_1.SoundTrack.Voice;
                paramCompatible(model, options, {
                    field: "file",
                    value: data_7.ResourceData.from(filename)
                });
                const proxy = api_manager_2.APIManager.getImpl(api_sound_1.APISound.name, op_2.OP.PlayVoice);
                proxy && (yield proxy.runner(model));
            });
        }
        api.playVoice = playVoice;
        function playSE(filename, options) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_sound_1.APISound();
                model.data.track = const_1.SoundTrack.Voice;
                paramCompatible(model, options, {
                    field: "file",
                    value: data_7.ResourceData.from(filename)
                });
                const proxy = api_manager_2.APIManager.getImpl(api_sound_1.APISound.name, op_2.OP.PlaySE);
                proxy && (yield proxy.runner(model));
            });
        }
        api.playSE = playSE;
        function playBGS(filename, options) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_sound_1.APISound();
                model.data.track = const_1.SoundTrack.Voice;
                paramCompatible(model, options, {
                    field: "file",
                    value: data_7.ResourceData.from(filename)
                });
                const proxy = api_manager_2.APIManager.getImpl(api_sound_1.APISound.name, op_2.OP.PlayBGS);
                proxy && (yield proxy.runner(model));
            });
        }
        api.playBGS = playBGS;
        function wait(time, options) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_timer_1.APITimer();
                paramCompatible(model, options, {
                    field: "time",
                    value: time
                });
                const proxy = api_manager_2.APIManager.getImpl(api_timer_1.APITimer.name, op_2.OP.Wait);
                proxy && (yield proxy.runner(model));
            });
        }
        api.wait = wait;
        /**
         * Navigate to game title view
         *
         * @export
         */
        function callTitleView() {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_title_view_1.APIGotoTitleView();
                const proxy = api_manager_2.APIManager.getImpl(api_title_view_1.APIGotoTitleView.name, op_2.OP.GotoTitleView);
                proxy && (yield proxy.runner(model));
            });
        }
        api.callTitleView = callTitleView;
        function sceneEffect(index, effectName, options) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_effect_1.APIEffect();
                model.index = index;
                model.data.effectName = effectName;
                paramCompatible(model, options);
                const proxy = api_manager_2.APIManager.getImpl(api_effect_1.APIEffect.name, op_2.OP.PlayEffect);
                proxy && (yield proxy.runner(model));
            });
        }
        api.sceneEffect = sceneEffect;
        function animateScene(index, animateName, options) {
            return __awaiter(this, void 0, void 0, function* () { });
        }
        api.animateScene = animateScene;
        function getVariable(name) {
            return __awaiter(this, void 0, void 0, function* () {
                return Promise.resolve(api_variable_1.APIVariable.get(name));
            });
        }
        api.getVariable = getVariable;
        function setVariable(name, value) {
            return __awaiter(this, void 0, void 0, function* () {
                return Promise.resolve(api_variable_1.APIVariable.set(name, value));
            });
        }
        api.setVariable = setVariable;
        function showSubtitle(id, text, options) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_subtitle_1.APISubtitle();
                model.data.id = id;
                model.data.text = text;
                model.data.animation = new data_7.WidgetAnimation();
                model.data.animation.name = screen_widget_5.ScreenWidgetAnimation.Enter_Appear;
                paramCompatible(model, options);
                const proxy = api_manager_2.APIManager.getImpl(api_subtitle_1.APISubtitle.name, op_2.OP.ShowSubtitle);
                proxy && (yield proxy.runner(model));
            });
        }
        api.showSubtitle = showSubtitle;
        function animateSubtitle(id, animation) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_subtitle_1.APISubtitle();
                model.data.id = id;
                const proxy = api_manager_2.APIManager.getImpl(api_subtitle_1.APISubtitle.name, op_2.OP.AnimateSubtitle);
                proxy && (yield proxy.runner(model));
            });
        }
        api.animateSubtitle = animateSubtitle;
        function updateSubtitle(id, text) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_subtitle_1.APISubtitle();
                model.data.id = id;
                model.data.text = text;
                const proxy = api_manager_2.APIManager.getImpl(api_subtitle_1.APISubtitle.name, op_2.OP.UpdateSubtitle);
                proxy && (yield proxy.runner(model));
            });
        }
        api.updateSubtitle = updateSubtitle;
        function hideSubtitle(id, options) {
            return __awaiter(this, void 0, void 0, function* () {
                let model = new api_subtitle_1.APISubtitle();
                model.data.id = id;
                paramCompatible(model, options);
                // model.data.animation = options.animation;
                const proxy = api_manager_2.APIManager.getImpl(api_subtitle_1.APISubtitle.name, op_2.OP.HideSubtitle);
                proxy && (yield proxy.runner(model));
            });
        }
        api.hideSubtitle = hideSubtitle;
    })(api = exports.api || (exports.api = {}));
});
//@ Auto-Generated indexing files for avg.engine
define("engine/scripting/api/index", ["require", "exports", "engine/scripting/api/api-animate-scene", "engine/scripting/api/api-character", "engine/scripting/api/api-dialogue-choices", "engine/scripting/api/api-dialogue", "engine/scripting/api/api-effect", "engine/scripting/api/api-scene", "engine/scripting/api/api-sound", "engine/scripting/api/api-subtitle", "engine/scripting/api/api-timer", "engine/scripting/api/api-title-view", "engine/scripting/api/api-variable", "engine/scripting/api/exports"], function (require, exports, api_animate_scene_1, api_character_2, api_dialogue_choices_2, api_dialogue_2, api_effect_2, api_scene_2, api_sound_2, api_subtitle_2, api_timer_2, api_title_view_2, api_variable_2, exports_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(api_animate_scene_1);
    __export(api_character_2);
    __export(api_dialogue_choices_2);
    __export(api_dialogue_2);
    __export(api_effect_2);
    __export(api_scene_2);
    __export(api_sound_2);
    __export(api_subtitle_2);
    __export(api_timer_2);
    __export(api_title_view_2);
    __export(api_variable_2);
    __export(exports_1);
});
define("engine/core/sandbox", ["require", "exports", "engine/scripting/api/index"], function (require, exports, api_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Sandbox {
        constructor() {
            this.console = console;
            this.api = api_1.api;
        }
    }
    // Game Variables
    Sandbox.Variables = new Map();
    exports.Sandbox = Sandbox;
});
define("engine/scripting/story", ["require", "exports", "vm", "fs", "engine/core/sandbox", "engine/scripting/transpiler"], function (require, exports, vm, fs, sandbox_2, transpiler_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AVGStory {
        constructor() {
            this._scriptUnits = [];
            this._cursor = 0;
            this._sanbox = new sandbox_2.Sandbox();
        }
        loadFromScripts(units) {
            this._scriptUnits = units;
        }
        loadFromFile(filename) {
            fs.readFile(filename, "utf8", (err, data) => {
                if (err) {
                    throw err;
                }
                this.loadFromString(data);
            });
        }
        getScripts() {
            return this._scriptUnits;
        }
        loadFromString(code) {
            this._code = code;
            this.compile();
        }
        compile() {
            return new Promise((resolve, reject) => {
                let compiled = transpiler_2.Transpiler.transpileFromCode(this._code);
                console.log("Compiled Code:" + compiled);
                try {
                    let script = new vm.Script(compiled);
                    script.runInContext(vm.createContext(this._sanbox));
                    resolve();
                }
                catch (err) {
                    reject("AVG Script errror : " + err);
                }
            });
        }
        addScriptUnit(unit) {
            this._scriptUnits.push(unit);
        }
        next() {
            this._cursor++;
            if (this._cursor >= this._scriptUnits.length) {
                return null;
            }
            return this._scriptUnits[this._cursor];
        }
    }
    exports.AVGStory = AVGStory;
});
define("engine/core/transition", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("engine/core/setting", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Setting {
        static get TextSpeed() { return this.settings.game.text_speed; }
        static set TextSpeed(value) { this.NumericRange(this.settings.game.text_speed, 0, 100); }
        static get AutoPlay() { return this.settings.game.auto_play; }
        static set AutoPlay(value) { this.settings.game.auto_play = value; }
        static get AutoPlaySpeed() { return this.settings.game.auto_play_speed; }
        static set AutoPlaySpeed(value) { this.NumericRange(this.settings.game.auto_play_speed, 0, 100); }
        static get BGMVolume() { return this.settings.game.sound.bgm; }
        static set BGMVolume(value) { this.NumericRange(this.settings.game.sound.bgm, 0, 100); }
        static get BGSVolume() { return this.settings.game.sound.bgs; }
        static set BGSVolume(value) { this.NumericRange(this.settings.game.sound.bgs, 0, 100); }
        static get SEVolume() { return this.settings.game.sound.se; }
        static set SEVolume(value) { this.NumericRange(this.settings.game.sound.se, 0, 100); }
        static get VoiceVolume() { return this.settings.game.sound.voice; }
        static set VoiceVolume(value) { this.NumericRange(this.settings.game.sound.voice, 0, 100); }
        static get WindowWidth() { return this.settings.screen.width; }
        static set WindowWidth(value) { this.settings.screen.width = value; }
        static get WindowHeight() { return this.settings.screen.height; }
        static set WindowHeight(value) { this.settings.screen.height = value; }
        static get FullScreen() { return this.settings.screen.fullscreen; }
        static set FullScreen(value) { this.settings.screen.fullscreen = value; }
        static parseFromSettings(settings) {
            try {
                this.settings = JSON.parse(settings);
                console.log(`Loaded settings: `, this.settings);
            }
            catch (err) {
                console.error(`Load settings failed:`, err);
            }
        }
        static NumericRange(value, min, max) {
            if (value < min) {
                value = 0;
            }
            if (value > max) {
                value = 100;
            }
        }
    }
    Setting.settings = {
        screen: {
            width: 1366,
            height: 768,
            fullscreen: false,
        },
        game: {
            text_speed: 80,
            auto_play: false,
            auto_play_speed: 1,
            sound: {
                bgm: 40,
                bgs: 100,
                se: 100,
                voice: 100
            }
        }
    };
    exports.Setting = Setting;
});
define("engine/core/resource", ["require", "exports", "engine/core/env", "path"], function (require, exports, env_1, path) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResourcePath;
    (function (ResourcePath) {
        // Audio
        ResourcePath[ResourcePath["BGM"] = 0] = "BGM";
        ResourcePath[ResourcePath["BGS"] = 1] = "BGS";
        ResourcePath[ResourcePath["SE"] = 2] = "SE";
        ResourcePath[ResourcePath["Voice"] = 3] = "Voice";
        // Graphics
        ResourcePath[ResourcePath["Backgrounds"] = 4] = "Backgrounds";
        ResourcePath[ResourcePath["Characters"] = 5] = "Characters";
        ResourcePath[ResourcePath["Masks"] = 6] = "Masks";
        ResourcePath[ResourcePath["UI"] = 7] = "UI";
        ResourcePath[ResourcePath["Icons"] = 8] = "Icons";
        ResourcePath[ResourcePath["Effects"] = 9] = "Effects";
        // Plugins
        ResourcePath[ResourcePath["Plugins"] = 10] = "Plugins";
        // Data
        ResourcePath[ResourcePath["Data"] = 11] = "Data";
        // Script
        ResourcePath[ResourcePath["Scripts"] = 12] = "Scripts";
    })(ResourcePath = exports.ResourcePath || (exports.ResourcePath = {}));
    class Resource {
        static init(rootDir) {
            this._assetsRoot = rootDir;
            /*
                To use initialize paths, you should create the following directory structure:
                
                Root
                ├── audio
                │   ├── bgm
                │   ├── bgs
                │   ├── voice
                │   └── se
                ├── data
                ├── graphics
                │   ├── backgrounds
                │   ├── characters
                │   ├── effects
                │   ├── masks
                │   ├── icons
                │   └── ui
                ├── plugins
                └── scripts
            */
            this._paths = new Map([
                [ResourcePath.BGM, 'audio/bgm'],
                [ResourcePath.BGS, 'audio/bgs'],
                [ResourcePath.SE, 'audio/se'],
                [ResourcePath.Voice, 'audio/voice'],
                [ResourcePath.Backgrounds, 'graphics/backgrounds'],
                [ResourcePath.Characters, 'graphics/characters'],
                [ResourcePath.Masks, 'graphics/masks'],
                [ResourcePath.UI, 'graphics/ui'],
                [ResourcePath.Icons, 'graphics/icons'],
                [ResourcePath.Effects, 'graphics/effects'],
                [ResourcePath.Plugins, 'plugins'],
                [ResourcePath.Data, 'data'],
                [ResourcePath.Scripts, 'scripts'],
            ]);
            console.log(`Initialize resource root folder: ${this._assetsRoot}`);
        }
        static getRoot() {
            return this._assetsRoot;
        }
        static getPath(dir) {
            let dirPath = this._paths.get(dir);
            if (!dirPath) {
                return undefined;
            }
            if (env_1.Env.isRunStandalone()) {
                dirPath = path.join(this._assetsRoot, dirPath);
            }
            return dirPath;
        }
    }
    exports.Resource = Resource;
});
define("engine/core/game", ["require", "exports", "engine/scripting/story", "path", "engine/index"], function (require, exports, story_2, path, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AVGGame {
        constructor(name, screen) {
            this._screen = {
                width: 1366,
                height: 768
            };
            this._entryStory = new story_2.AVGStory();
            // this._scriptingLoop = new AVGScriptingLoop();
        }
        setResolution(screen) {
            this._screen = screen;
        }
        getResolution() {
            return this._screen;
        }
        setScriptDir(dir) {
            this._scriptDir = dir;
        }
        start(entryScript) {
            // Init plugins
            index_1.PluginManager.init();
            let scriptDir = this._scriptDir || './';
            entryScript = entryScript || path.join(scriptDir, AVGGame.DEFAULT_ENTRY_SCRIPT);
            this._entryStory.loadFromFile(entryScript);
            // this._scriptingLoop.addStory(this._entryStory);
            this._run();
        }
        startFromAPIs(scripts) {
            this._entryStory.loadFromScripts(scripts);
            // this._scriptingLoop.addStory(this._entryStory);
            this._run();
        }
        _run() {
            // this._scriptingLoop.run().on(LoopEvents.OnLoopData, (data) => {
            //     console.log(`Received data: `, data);
            // }).on(LoopEvents.OnLoopEnd, () => {
            //     console.log(`Loop ended. Game End.`);
            // });
        }
    }
    AVGGame.DEFAULT_ENTRY_SCRIPT = 'start.avs';
    exports.AVGGame = AVGGame;
    exports.game = new AVGGame();
});
define("engine/core/input", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core;
    (function (core) {
        let InputKeys;
        (function (InputKeys) {
            InputKeys[InputKeys["ArrowUp"] = 0] = "ArrowUp";
            InputKeys[InputKeys["ArrowDown"] = 1] = "ArrowDown";
            InputKeys[InputKeys["ArrowLeft"] = 2] = "ArrowLeft";
            InputKeys[InputKeys["ArrowRight"] = 3] = "ArrowRight";
            InputKeys[InputKeys["Ok"] = 4] = "Ok";
            InputKeys[InputKeys["Cancel"] = 5] = "Cancel";
        })(InputKeys = core.InputKeys || (core.InputKeys = {}));
        class Input {
            constructor() {
                this.KeyMap = new Map([
                    [InputKeys.ArrowUp, ['ArrowUp', 'KeyW']],
                    [InputKeys.ArrowDown, ['ArrowDown', 'KeyS']],
                    [InputKeys.Ok, ['Space', 'Enter', 'KeyZ']],
                    [InputKeys.Cancel, ['Escape', 'KeyX']],
                ]);
            }
            addBinding(binding, key) {
                let keys = this.KeyMap.get(binding);
                if (keys.indexOf(key) < 0) {
                    keys.push(key);
                }
                this.KeyMap.set(binding, keys);
            }
            removeBinding(binding, key) {
                // let keys: string[] = this.KeyMap.get(binding);
                // const index = keys.indexOf(key);
                // if (index >= 0) {
                // }
                // this.KeyMap.set(binding, keys);
            }
            isGamepadConnected() {
                return false;
            }
            is(input, key) {
                const values = this.KeyMap.get(input);
                for (const k of values) {
                    if (k === key) {
                        return true;
                    }
                }
                return false;
            }
        }
        Input._instance = new Input();
        core.Input = Input;
    })(core = exports.core || (exports.core = {}));
    exports.input = new core.Input();
});
define("engine/core/utils", ["require", "exports", "image-size"], function (require, exports, sizeOf) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Utils {
        static getImageSize(file) {
            return sizeOf(file);
        }
    }
    exports.Utils = Utils;
});
//@ Auto-Generated indexing files for avg.engine
define("engine/core/index", ["require", "exports", "engine/core/env", "engine/core/game", "engine/core/input", "engine/core/resource", "engine/core/sandbox", "engine/core/setting", "engine/core/utils"], function (require, exports, env_2, game_1, input_1, resource_1, sandbox_3, setting_1, utils_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(env_2);
    __export(game_1);
    __export(input_1);
    __export(resource_1);
    __export(sandbox_3);
    __export(setting_1);
    __export(utils_1);
});
define("engine/plugin/plugin-info", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PluginInfo {
    }
    exports.PluginInfo = PluginInfo;
});
define("engine/plugin/plugin-base", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("engine/plugin/avg-plugin", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PluginEvents;
    (function (PluginEvents) {
        PluginEvents[PluginEvents["OnBeforeStartGame"] = 0] = "OnBeforeStartGame";
        PluginEvents[PluginEvents["OnAfterStartGame"] = 1] = "OnAfterStartGame";
        PluginEvents[PluginEvents["OnBeforeLoadScene"] = 2] = "OnBeforeLoadScene";
        PluginEvents[PluginEvents["OnAfterLoadScene"] = 3] = "OnAfterLoadScene";
        PluginEvents[PluginEvents["OnBeforeDialogue"] = 4] = "OnBeforeDialogue";
        PluginEvents[PluginEvents["OnAfterDialogue"] = 5] = "OnAfterDialogue";
    })(PluginEvents = exports.PluginEvents || (exports.PluginEvents = {}));
    class AVGPlugin {
        onLoad() {
            return {
                pluginName: null,
                author: null,
                comment: null
            };
        }
        onUnload() {
            throw new Error('Method not implemented.');
        }
        OnBeforeDialogue(dialogue) { }
    }
    exports.AVGPlugin = AVGPlugin;
});
define("engine/plugin/avg-internal-plugin", ["require", "exports", "engine/plugin/avg-plugin"], function (require, exports, avg_plugin_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AVGInternalPlugin extends avg_plugin_1.AVGPlugin {
    }
    exports.AVGInternalPlugin = AVGInternalPlugin;
});
define("engine/plugin/plugin-manager", ["require", "exports", "engine/index", "engine/plugin/avg-plugin"], function (require, exports, index_2, avg_plugin_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PluginManager {
        static init() {
            this._registeredPlugins = new Map();
            // Register internal plugins
            this.register(new index_2.DialogueParserPlugin());
        }
        static register(plugin) {
            let pluginInfo = plugin.onLoad();
            console.log('Plugin registered: ', pluginInfo);
            if (!this._registeredPlugins.has(plugin.constructor.name)) {
                this._registeredPlugins.set(plugin.constructor.name, plugin);
            }
        }
        static on(event, ...args) {
            this._registeredPlugins.forEach((value, key) => {
                let eventName = avg_plugin_2.PluginEvents[event];
                let method = value[eventName];
                method && method(...args);
            });
        }
    }
    exports.PluginManager = PluginManager;
});
//@ Auto-Generated indexing files for avg.engine
define("engine/plugin/index", ["require", "exports", "engine/plugin/avg-internal-plugin", "engine/plugin/avg-plugin", "engine/plugin/plugin-info", "engine/plugin/plugin-manager"], function (require, exports, avg_internal_plugin_1, avg_plugin_3, plugin_info_1, plugin_manager_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(avg_internal_plugin_1);
    __export(avg_plugin_3);
    __export(plugin_info_1);
    __export(plugin_manager_1);
});
define("engine/plugin/internal/dialogue-parser-plugin", ["require", "exports", "engine/plugin/avg-internal-plugin", "engine/index"], function (require, exports, avg_internal_plugin_2, index_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DialogueParserPlugin extends avg_internal_plugin_2.AVGInternalPlugin {
        onLoad() {
            return {
                author: "AngryPowman",
                pluginName: "TextParser",
                comment: "Text plugin with text highlighting supported."
            };
        }
        onUnload() { }
        static parseContent(text) {
            // [b][/b] Bold
            // [color=red][/color] Change text color
            // [sN][/size] Change text size
            if (!text) {
                return "";
            }
            // Grammar: [color=N][/color]
            text = text.replace(/\[color=([a-zA-Z0-9#]+)\]/g, `<font color=$1>`);
            text = text.replace(/\[\/color\]/g, `</font>`);
            // Grammar: [c=N][/c]
            text = text.replace(/\[c=([a-zA-Z0-9#]+)\]|\[color=([a-zA-Z0-9#]+)\]/g, `<font color=$1>`);
            text = text.replace(/\[\/c\]/g, `</font>`);
            // Grammar: [bold][/bold]
            text = text.replace(/\[bold\]/g, `<bold>`);
            text = text.replace(/\[\/bold\]/g, `</bold>`);
            // Grammar: [b][/b]
            text = text.replace(/\[b\]/g, `<b>`);
            text = text.replace(/\[\/b\]/g, `</b>`);
            // Grammar: [italic][/italic]
            text = text.replace(/\[italic\]/g, `<i>`);
            text = text.replace(/\[\/italic\]/g, `</i>`);
            // Grammar: [i][/i]
            text = text.replace(/\[i\]/g, `<i>`);
            text = text.replace(/\[\/i\]/g, `</i>`);
            // Grammar: [del][/del]
            text = text.replace(/\[del\]/g, `<del>`);
            text = text.replace(/\[\/del\]/g, `</del>`);
            // Grammar: [size=N][/size]
            text = text.replace(/\[size=(\d+)\]/g, `<font size=$1>`);
            text = text.replace(/\[\/size\]/g, `</font>`);
            // Grammar: [s=N][/s]
            text = text.replace(/\[s=(\d+)\]/g, `<font size=$1>`);
            text = text.replace(/\[\/s\]/g, `</font>`);
            // Grammar: [emoji=file]
            text = text.replace(/\[emoji=([\w\-\. ]+)]/g, `<img src='assets/graphics/emoji/$1' />`);
            // Grammar: [br]
            text = text.replace(/\[br]/g, `<br>`);
            // Grammar: ${variable}
            let variableRegex = /\${(.*)}/;
            let vMatch = null;
            while ((vMatch = variableRegex.exec(text)) !== null) {
                let value = index_3.APIVariable.get(vMatch[1]);
                text = text.replace(variableRegex, value === undefined ? "" : value);
            }
            return text;
        }
        OnBeforeDialogue(dialogue) {
            dialogue.text = DialogueParserPlugin.parseContent(dialogue.text);
        }
    }
    exports.DialogueParserPlugin = DialogueParserPlugin;
});
//@ Auto-Generated indexing files for avg.engine
define("engine/plugin/internal/index", ["require", "exports", "engine/plugin/internal/dialogue-parser-plugin"], function (require, exports, dialogue_parser_plugin_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(dialogue_parser_plugin_1);
});
//@ Auto-Generated indexing files for avg.engine
define("engine/index", ["require", "exports", "engine/const/index", "engine/core/index", "engine/data/index", "engine/plugin/index", "engine/plugin/internal/index", "engine/scripting/index", "engine/scripting/api/index"], function (require, exports, const_2, core_1, data_8, plugin_1, internal_1, scripting_1, api_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(const_2);
    __export(core_1);
    __export(data_8);
    __export(plugin_1);
    __export(internal_1);
    __export(scripting_1);
    __export(api_2);
});
define("engine/data/input-data", ["require", "exports", "engine/data/avg-data"], function (require, exports, avg_data_9) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InputType;
    (function (InputType) {
        InputType[InputType["String"] = 0] = "String";
        InputType[InputType["Number"] = 1] = "Number";
    })(InputType = exports.InputType || (exports.InputType = {}));
    class InputData extends avg_data_9.AVGData {
        constructor() {
            super(...arguments);
            this.data = "";
            this.inputType = InputType.String;
            this.minLength = 0;
            this.maxLength = 255;
        }
    }
    exports.InputData = InputData;
});
define("engine/scripting/api/api-input-box", ["require", "exports", "engine/scripting/script-unit", "engine/data/input-data"], function (require, exports, script_unit_12, input_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class APIInputBox extends script_unit_12.AVGScriptUnit {
        constructor() {
            super(...arguments);
            this.data = new input_data_1.InputData;
        }
    }
    exports.APIInputBox = APIInputBox;
});
//# sourceMappingURL=avg-engine.js.map