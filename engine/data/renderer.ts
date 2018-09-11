export class Filter {
  public name: string = "";
  public strength: number = 0;
}

export class Renderer {
  public width: number = 100;
  public height: number = 100;
  public x: number = 0;
  public y: number = 0;  
  public offset_x: number = 0; // Only in percent
  public offset_y: number = 0; // Only in percent
  public scale: number = 1;
  public filter: Filter[] = [];
}
