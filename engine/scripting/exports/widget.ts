import { APIExport, AVGExportedAPI } from "./avg-exported-api";
import { Subtitle } from "../../data/screen-subtitle";
import { APIScreenSubtitle, ScreenSubtitleResult } from "../api/api-screen-subtitle";
import { IDGenerator } from "../../core/id-generator";
import {
  ScreenPosition,
  WidgetAnimation,
  ScreenWidgetAnimation,
  WidgetAnimation_FadeInOptions,
  WidgetAnimation_HideOptions
} from "../../data/screen-widget";
import { APIManager } from "../api-manager";
import { OP } from "../../const/op";
import { ScreenImage } from "../../data/screen-image";
import { APIScreenImage, ScreenImageResult } from "../api/api-screen-image";
import { ResourceData } from "../../data/resource-data";
import { ResourcePath } from "../../core/resource";
import { paramCompatible } from "../../core/utils";
import { APIHtmlWidget, HtmlWidgetResult } from "../api/api-html-widget-params";

@APIExport("widget", EngineAPI_Widget)
export class EngineAPI_Widget extends AVGExportedAPI {
  public static async text(text: string, options?: Subtitle, isAsync: boolean = false) {
    let model = new APIScreenSubtitle();
    model.isAsync = isAsync;
    model.data = new Subtitle();
    Object.assign(model.data, options);

    model.data.id = "Text_" + IDGenerator.generate();
    model.data.text = text;
    model.data.position = options.position || ScreenPosition.Center;
    model.data.animation = options.animation || new WidgetAnimation();
    model.data.animation.name = model.data.animation.name || ScreenWidgetAnimation.Enter_Appear;
    model.data.animation.options = model.data.animation.options || new WidgetAnimation_FadeInOptions();

    // if (!model.data) {
    //     model.data.animation.name = ScreenWidgetAnimation.Enter_Appear;
    // }

    // paramCompatible<APIScreenSubtitle, Subtitle>(model, options);

    return <ScreenSubtitleResult>(
      await APIManager.getImpl(APIScreenSubtitle.name, OP.ShowTextWidget).runner(<APIScreenSubtitle>model)
    );
  }

  public static async animateText(id: string, animation: WidgetAnimation) {
    let model = new APIScreenSubtitle();
    model.data.id = id;

    const proxy = APIManager.getImpl(APIScreenSubtitle.name, OP.AnimateTextWidget);
    proxy && (await proxy.runner(<APIScreenSubtitle>model));
  }

  public static async updateText(id: string, text: string) {
    let model = new APIScreenSubtitle();
    model.data.id = id;
    model.data.text = text;

    const proxy = APIManager.getImpl(APIScreenSubtitle.name, OP.UpdateTextWidget);

    proxy && (await proxy.runner(<APIScreenSubtitle>model));
  }

  public static async removeText(id: string, options?: { animation?: WidgetAnimation }, isAsync: boolean = false) {
    let model = new APIScreenSubtitle();
    model.isAsync = isAsync;
    model.data.id = id || undefined;
    model.data.animation = options ? options.animation || undefined : undefined;

    const proxy = APIManager.getImpl(APIScreenSubtitle.name, OP.RemoveTextWidget);

    proxy && (await proxy.runner(<APIScreenSubtitle>model));
  }

  public static async image(file: string, options: ScreenImage, isAsync: boolean = false) {
    let model = new APIScreenImage();
    model.isAsync = isAsync;
    model.data = new ScreenImage();
    Object.assign(model.data, options);

    model.data.id = "Image_" + IDGenerator.generate();
    model.data.file = ResourceData.from(file, ResourcePath.Images);
    model.data.position = options.position || ScreenPosition.Center;
    model.data.size = options.size || "100%";
    model.data.animation = model.data.animation || new WidgetAnimation();
    model.data.animation.name = model.data.animation.name || ScreenWidgetAnimation.Enter_Appear;
    model.data.animation.options = model.data.animation.options || new WidgetAnimation_FadeInOptions();

    // paramCompatible<APIScreenImage, ScreenImage>(model, options);

    return <ScreenImageResult>(
      await APIManager.getImpl(APIScreenImage.name, OP.ShowImageWidget).runner(<APIScreenImage>model)
    );
  }

  public static async removeImage(id: string, options: ScreenImage, isAsync: boolean = false) {
    let model = new APIScreenImage();

    model.isAsync = isAsync;
    model.data.id = id;

    model.data.animation = new WidgetAnimation();
    model.data.animation.name = ScreenWidgetAnimation.Leave_Hide;

    if (!model.data.animation.options) {
      model.data.animation.options = new WidgetAnimation_HideOptions();
    }

    paramCompatible<APIScreenImage, ScreenImage>(model, options);

    const proxy = APIManager.getImpl(APIScreenImage.name, OP.RemoveImageWidget);
    proxy && (await proxy.runner(<APIScreenImage>model));
  }

  public static async html(html: string) {
    let model = new APIHtmlWidget();
    model.data.html = html;

    return <HtmlWidgetResult>(
      await APIManager.getImpl(APIScreenImage.name, OP.ShowHtmlWidget).runner(<APIHtmlWidget>model)
    );
  }
}
