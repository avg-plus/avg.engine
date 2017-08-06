import { Env } from "./env";
import * as path from 'path';

export enum ResourcePath {
    // Audio
    BGM,
    SE,
    CV,

    // Graphics
    Backgrounds,
    Characters,
    UI,
    Icons,
    Effects,

    // Plugins
    Plugins,

    // Data
    Data,

    // Script
    Scripts,
}


export class Resource {
    private _paths: Map<ResourcePath, string>;
    private _assetsRoot: string;

    constructor(rootDir: string) {

        this._assetsRoot = rootDir;

        /* 
            To use initialize paths, you should create the following directory structure:
            
            Root
            ├── audio
            │   ├── bgm
            │   ├── cv
            │   └── se
            ├── data
            ├── graphics
            │   ├── backgrounds
            │   ├── characters
            │   ├── effects
            │   ├── icons
            │   └── ui
            ├── plugins
            └── scripts
        */

        this._paths = new Map<ResourcePath, string>([
            [ResourcePath.BGM, 'audio/bgm'],
            [ResourcePath.SE, 'audio/se'],
            [ResourcePath.CV, 'audio/cv'],
            [ResourcePath.Backgrounds, 'graphics/backgrounds'],
            [ResourcePath.Characters, 'graphics/characters'],
            [ResourcePath.UI, 'graphics/ui'],
            [ResourcePath.Icons, 'graphics/icons'],
            [ResourcePath.Effects, 'graphics/effects'],
            [ResourcePath.Plugins, 'plugins'],
            [ResourcePath.Data, 'data'],
            [ResourcePath.Scripts, 'scripts'],
        ]);

        console.log(`Initialize resource root folder: ${this._assetsRoot}`);
    }

    public getRoot(): string {
        return this._assetsRoot;
    }

    public getPath(dir: ResourcePath): string {
        let dirPath = this._paths.get(dir);
        if (!dirPath) {
            return undefined;
        }

        if (Env.isRunStandalone()) {    // Run in node.js
            dirPath = path.join(this._assetsRoot, dirPath);
        }

        return dirPath;
    }

}
