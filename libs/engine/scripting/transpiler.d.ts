export declare enum TranspilerError {
    None = 0,
}
export declare class Transpiler {
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
