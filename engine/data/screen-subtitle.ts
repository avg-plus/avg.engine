import { ScreenWidget, ScreenWidgetType } from './screen-widget';

export class Subtitle extends ScreenWidget {
  public id: string;
  public text: string;

  constructor() {
    super(ScreenWidgetType.Text);
  }
}
