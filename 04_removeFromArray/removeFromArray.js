const removeFromArray = function (...theArgs) {
  let index;
  for (let i = theArgs.length - 1; i > 0; i--) {
    index = theArgs[0].findLastIndex((element) => element === theArgs[i]);
    if (index < 0) continue;
    theArgs[0].splice(index, 1);
  }
  return theArgs[0];
};

const removeFromArray2 = function (...theArgs) {
  theArgs.slice(1).foreach((num) =>
    theArgs[0].splice(
      theArgs[0].findLastIndex((element) => element === num),
      1
    )
  );
  return theArgs[0];
};

const removeFromArray3 = function (...theArgs) {
  theArgs.slice(1).map((num) =>
    theArgs[0].splice(
      theArgs[0].findLastIndex((element) => element === num),
      1
    )
  );
  return theArgs[0];
};
const removeFromArray4 = function (...theArgs) {
  for (const num in theArgs.slice(1)) {
    theArgs[0].splice(
      theArgs[0].findLastIndex((element) => element === num),
      1
    );
  }
  return theArgs[0];
};

// Do not edit below this line
module.exports = removeFromArray;
