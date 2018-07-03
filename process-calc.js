import { Dimensions } from "react-native";
import { doCalc } from "./doCalc";
const win = Dimensions.get("window");
const CALC_REG = /\bcalc\(([\s\S]+)\)/;

const measurements = {};

export const measure = (ref, _this) => {
  return function(event) {
    if (measurements[ref] && measurements[ref].width && [ref].height) {
      return;
    }
    var { width, height } = event.nativeEvent.layout;
    measurements[ref] = { width, height };
    _this.forceUpdate();
  };
};

export const process = (styles, ref) => {
  if (
    measurements[ref] === undefined ||
    measurements[ref].width === null ||
    measurements[ref].height === null
  ) {
    return {
      width: "100%",
      height: "100%",
      opacity: 0
    };
  }

  for (const key in styles) {
    const value = styles[key];
    if (CALC_REG.test(value)) {
      styles[key] = doCalc({
        prop: key,
        value,
        win: {
          width: win.width,
          height: win.height
        },
        parent: {
          width: measurements[ref].width,
          height: measurements[ref].height
        }
      });
    }
  }

  return styles;
};
