export class Filter {
  public name: string = "";
  public value: number = 0;
}

export class Renderer {
  public width;
  public height;
  public x: string = "0%";
  public y: string = "0%";
  public scale: number = 1;
  public filters: Filter[] = [];
}
