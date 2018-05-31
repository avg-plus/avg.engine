import { Dimension } from "../const/model";

export class EngineUtils {

  public static async wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public static NumericRange(value: number, min: number, max: number): number {
    if (value < min) {
      value = 0;
    }

    if (value > max) {
      value = 100;
    }

    return value;
  }

  public static parseCSSFilters(filters: string): Map<string, string> {
    const container = new Map<string, string>();
    if (filters === "none") {
      console.log("No filters found.");
    } else {
      const filterArr = filters.split(" ");
      if (filterArr && filterArr.length > 0) {
        const regex = /([a-z-]+)\((.*)\)/;

        for (const filter of filterArr) {
          const matches = filter.match(regex);
          if (matches && matches.length >= 3) {
            container.set(matches[1], matches[2]);
          }
        }
      }
    }

    return container;
  }

  public static toCSSFilter(container: Map<string, string>): string {
    let filters = "";
    container.forEach((v, k) => {
      filters += k + "(" + v + ") ";
    });

    return filters;
  }

  public static countTo(
    from: number,
    to: number,
    duration: number,
    update: (value: number) => void,
    done?: () => void
  ) {
    const range = to - from;
    if (range === 0) {
      return;
    }

    const increment = to > from ? 0.1 : -0.1;
    const stepTime = Math.abs(Math.floor(duration / range / 10));

    let current = from;

    const timer = setInterval(() => {
      current += increment;

      if (update) {
        update(current);
      }

      if ((from < to && current >= to) || (from > to && current <= to)) {
        clearInterval(timer);
        update(to);
        if (done) {
          done();
        }
      }
    }, stepTime);
  }
}
