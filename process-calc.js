import { Dimensions } from "react-native";
import { transform } from "./css-calc-transform";
const win = Dimensions.get("window");
const CALC_REG = /\bcalc\(([\s\S]+)\)/;

const measurements = {};
let _refs;

export const setRefs = refs => {
  _refs = refs;
};

export const measure = (ref, _this) => {
  return function(event) {
    if (measurements[ref]) {
      return;
    }
    var { width, height } = event.nativeEvent.layout;
    measurements[ref] = { width, height };
    if (_refs && Object.keys(measurements).length === _refs.length) {
      _this.forceUpdate();
    }
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

  const newStyles = {};

  for (const key in styles) {
    const value = styles[key];
    if (CALC_REG.test(value)) {
      newStyles[key] = transform({
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
    } else {
      newStyles[key] = styles[key];
    }
  }

  return newStyles;
};
