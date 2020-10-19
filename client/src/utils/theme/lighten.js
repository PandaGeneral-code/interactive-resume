import * as colors from "./colors";

export const lighten = (colorName, opacity = 1) => {
  return `${colors[colorName]}${Math.floor(255 * opacity).toString(16)}`;
};
