import * as fs from "fs";
import * as esprima from "esprima";
import * as escodegen from "escodegen";
import * as estree from "estree";

export enum TranspilerError {
    None
}

export class Transpiler {
    static Error = {
        UnexpectedReservedKeyword: "UnexpectedReservedKeywordError: "
    };

    public static async transpile(file: string) {
        const raw = await this._read(file);
        if (raw) {
            let compiled = this._preprocesser(raw);
        }
    }

    public static transpileFromCode(code: string): string {
        return this._preprocesser(code);
    }

    private static _preprocesser(code: string) {
        // if (code.indexOf("await ") >= 0) {
        //     throw Transpiler.Error.UnexpectedReservedKeyword;
        // }

        // if (code.indexOf("async ") >= 0) {
        //     throw Transpiler.Error.UnexpectedReservedKeyword;
        // }

        return this._transpile(code);
    }

    private static _transpile(code: string) {
        let generated = code;
        let loc_pos: number[] = [];

        const isAPICall = node => {
            const callee = node.callee;
            const calleeObj = (<any>callee).object;

            return node.type === "CallExpression" && calleeObj.name === "api";
        };

        // 'async' keyword transform
        console.log("Starting async keyword transform AST generate ...");
        let asyncTransformAST = esprima.parse(
            code,
            { range: false, attachComment: false },
            (node, meta) => {
                if (node.type === "ArrowFunctionExpression") {
                    node.async = true;
                }
            }
        );

        console.log("Regenerating async keyword transform code ...");
        let asyncTransformCode = escodegen.generate(asyncTransformAST);

        // Add 'await' keyword before every api calls
        let program = esprima.parse(
            asyncTransformCode,
            {
                range: true,
                attachComment: false
            },
            (node, meta) => {
                if (node.type === "CallExpression" && node.callee) {
                    if (isAPICall(node)) {
                        loc_pos.push(node.callee.range[0]);
                    }
                }
            }
        );

        const keyword = "await ";
        for (let pos of loc_pos.reverse()) {
            if (pos > 0) {
                asyncTransformCode =
                    asyncTransformCode.slice(0, pos) +
                    keyword +
                    asyncTransformCode.slice(pos);
            } else {
                asyncTransformCode = keyword + asyncTransformCode;
            }
        }

        console.log("Regenerate code:", asyncTransformCode);

        return `+(async() => {try { ${asyncTransformCode} \n done(); } catch (err) { console.error('Game runtime errors', err);}})();`;
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
            fs.writeFile(file, data, err => {
                if (err) reject(err);
                resolve();
            });
        });
    }

    private static _compile_error() {}
}
