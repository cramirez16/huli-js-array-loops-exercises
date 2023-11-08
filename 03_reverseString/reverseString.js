const reverseString = function (str) {
  //return str.length === 0 ? "" : str.split("").reverse().join("");
  if (str.length === 0) return "";
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
