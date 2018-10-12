import { EngineUtils } from "./engine-utils";

export enum UnitType {
  Percent = "%",
  Pixel = "px"
}

const VectorRegex = /(\((\d+(?:%|px)),(\d+(?:%|px))\))/;
const ScalarRegex = /^(?:(\d+)(%|px)$)/;

export class MeasurementNumeric {
  constructor(value: string) {
    if (!value) {
      return null;
    }
    const matches = value.match(ScalarRegex);
    if (!EngineUtils.isNullOrUndefined(matches)) {
      this.value = Number.parseInt(matches[1]);
      this.unit = matches[2] === "%" ? UnitType.Percent : UnitType.Pixel;
    }
  }

  public getValue() {
    return this.value;
  }

  public getStringValue() {
    return this.value + this.unit;
  }

  public isPercent() {
    return this.unit === UnitType.Percent;
  }

  public isPixel() {
    return this.unit === UnitType.Pixel;
  }

  public value: number = 0;
  public unit: UnitType = UnitType.Percent;
}

export class AVGMeasurementUnit {
  private left: MeasurementNumeric;
  private right: MeasurementNumeric;

  constructor(left: string, right?: string) {
    if (left) {
      left = left || left.trim();
      this.left = new MeasurementNumeric(left);
    }

    if (right) {
      right = right.trim();
      this.right = new MeasurementNumeric(right);
    }
  }

  public static fromString(value: string) {
    if (!value) {
      return null;
    }

    value = value.replace(" ", "");

    let matches = value.match(VectorRegex);
    if (!EngineUtils.isNullOrUndefined(matches)) {
      return new AVGMeasurementUnit(matches[2], matches[3]);
    } else {
      if (ScalarRegex.test(value)) {
        return new AVGMeasurementUnit(value);
      }
    }

    return null;
  }

  public isPairUnit() {
    return !this.left && !this.right;
  }

  public getLeft() {
    return this.left;
  }

  public getRight() {
    return this.right;
  }
}
