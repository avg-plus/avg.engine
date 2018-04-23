export declare enum ResourcePath {
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
export declare class Resource {
    private static _paths;
    private static _assetsRoot;
    static init(rootDir: string): void;
    static getRoot(): string;
    static getPath(dir: ResourcePath): string;
}
