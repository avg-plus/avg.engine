import * as fs from 'fs';
import * as esprima from 'esprima';
import * as estree from 'estree';

export enum TranspilerError {
    None,
}

export class Transpiler {

    static Error = {
        UnexpectedReservedKeyword: 'UnexpectedReservedKeywordError: '
    };

    public static async transpile(file: string) {
        const raw = await this._read(file);
        if (raw) {
            let compiled = this._preprocesser(raw);
            console.log(compiled);
        }
    }

    public static transpileFromCode(code: string): string {
        return this._preprocesser(code);
    }

    private static _preprocesser(code: string) {

        if (code.indexOf('await ') >= 0) {
            throw Transpiler.Error.UnexpectedReservedKeyword;
        }

        if (code.indexOf('async ') >= 0) {
            throw Transpiler.Error.UnexpectedReservedKeyword;
        }

        return this._transpile(code);
    }

    private static _transpile(code: string) {
        let generated = code;
        let loc_pos: number[] = []

        let program = esprima.parse(code, {
            range: true
        }, (node, meta) => {
            console.log(meta);
            if (node.type === "CallExpression") {
                loc_pos.push(node.callee.range[0]);
            }
        });

        const keyword = 'await ';
        for (let pos of loc_pos.reverse()) {
            if (pos > 0) {
                generated = generated.slice(0, pos) + keyword + generated.slice(pos);
            } else {
                generated = keyword + generated;
            }
        }

        return `+(async() => {try {${generated} } catch (err) { console.error('Game runtime errors');}})();`;
    }

    private static async _read(file: string): Promise<string> {
        return await new Promise<string>((resolve, reject) => {
            fs.readFile(file, "utf8", (err, data) => {
                if (err) reject(err);

                resolve(data);
            });
        });
    }

    private static async _write(file: string, data: string) {
        return await new Promise((resolve, reject) => {
            fs.writeFile(file, data, (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    }

    private static _compile_error() {

    }

}