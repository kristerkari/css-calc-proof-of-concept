const CALC_REG = /\bcalc\(([\s\S]+)\)/;
const PERCENT = /[\d.]+%/;
const VIEWPORT_WIDTH = /[\d.]+vw/;
const VIEWPORT_HEIGHT = /[\d.]+vh/;
const PIXEL = /(\d+)px/g;
const REM = /[\d.]+rem/;
const MATH_EXP = /[+\-/*]?[\d.]+(px|%|rem|vw|vh)?/g;
const PLACEHOLDER = "$1";
const ONLYNUMBERS = /[\s\-0-9]/g;

export const doCalc = function({ prop, value, win, parent }) {
  const calcMatches = value.match(CALC_REG);
  if (!calcMatches) return;

  const calcPart = calcMatches[0];
  const formula = calcMatches[1];
  const matches = formula.match(MATH_EXP);

  let currentFormula = formula.replace(PIXEL, PLACEHOLDER);

  matches.forEach(match => {
    let refValue;
    let modifier;

    if (match.match(PERCENT)) {
      refValue = prop === "height" ? parent.height : parent.width;
      modifier = parseFloat(match, 10) / 100;
    } else if (match.match(VIEWPORT_WIDTH)) {
      refValue = win.width;
      modifier = parseFloat(match) / 100;
    } else if (match.match(VIEWPORT_HEIGHT)) {
      refValue = win.height;
      modifier = parseFloat(match) / 100;
    } else if (match.match(REM)) {
      refValue = 16;
      modifier = parseFloat(match);
    }

    if (modifier) {
      currentFormula = currentFormula.replace(match, refValue * modifier);
    }
  });

  if (currentFormula.match(ONLYNUMBERS)) {
    const result = eval("(" + currentFormula + ")");
    return parseFloat(value.replace(calcPart, result));
  }
};
