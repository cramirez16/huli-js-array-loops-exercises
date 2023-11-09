"use strict";
export const sumAll = function (a, b) {
  // the function returns number || string.
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b))
    return "ERROR";
  let [ini, end] = a < b ? [a, b] : [b, a];
  let total = 0;
  for (let i = ini; i <= end; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
// export default sumAll;
// import sumAll from "./sumAll";
// ------------------------------
// export const sumAll = function (a, b)....
// import { sumAll } from "./sumAll";
