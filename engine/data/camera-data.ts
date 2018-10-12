export enum CameraDirectorLayers {
  All,
  Scenes,
  Characters
}

export class CameraData {
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number = 1;
  skewX?: number;
  skewY?: number;
}
