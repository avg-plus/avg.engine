export class Filter {
  public name: string = "";
  public value: number = 0;
}

export class Renderer {
  public width: string = "100%";
  public height: string = "100%";
  public x: string = "0%";
  public y: string = "0%";
  // public offset_x: string = "0%"; // Only in percent
  // public offset_y: string = "0%"; // Only in percent
  public scale: number = 1;
  public filter: Filter[] = [];
}
