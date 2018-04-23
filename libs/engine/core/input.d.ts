export declare module core {
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
export declare let input: core.Input;
