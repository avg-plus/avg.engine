export module core {
    export enum InputKeys {
        ArrowUp,
        ArrowDown,
        ArrowLeft,
        ArrowRight,
        Ok,
        Cancel
    }

    export class Input {
        public static _instance = new Input();
        private KeyMap: Map<InputKeys, Array<string>> = new Map<InputKeys, Array<string>>(
            [
                [InputKeys.ArrowUp, ['ArrowUp', 'KeyW']],
                [InputKeys.ArrowDown, ['ArrowDown', 'KeyS']],
                [InputKeys.Ok, ['Space', 'Enter', 'KeyZ']],
                [InputKeys.Cancel, ['Escape', 'KeyX']],
            ]
        );


        public addBinding(binding: InputKeys, key: string) {

            let keys: string[] = this.KeyMap.get(binding);
            if (keys.indexOf(key) < 0) {
                keys.push(key);
            }

            this.KeyMap.set(binding, keys);
        }

        public removeBinding(binding: InputKeys, key: string) {

            // let keys: string[] = this.KeyMap.get(binding);
            // const index = keys.indexOf(key);

            // if (index >= 0) {
            // }

            // this.KeyMap.set(binding, keys);
        }

        public isGamepadConnected(): boolean {
            return false;
        }

        public is(input: InputKeys, key: string): boolean {
            const values = this.KeyMap.get(input);
            for (const k of values) {
                if (k === key) {
                    return true;
                }
            }

            return false;
        }
    }

}

export let input = new core.Input();
