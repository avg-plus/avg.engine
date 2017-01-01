export class i18n {
    public static lang: {} = {
        INPUT_OK_BUTTON_TEXT: "确认",
        INPUT_CANCEL_BUTTON_TEXT: "取消",
        ERR_MSG_SCRIPTING_EXCEPTION: "脚本运行错误"
    };

    public static load(lang: {}) {
        this.lang = lang;
    }

    public static get(key: string) {
        return this.lang[key];
    }
}
