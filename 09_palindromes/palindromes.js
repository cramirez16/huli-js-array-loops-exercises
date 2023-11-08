const palindromes = function (phrase) {
  const newPhrase = phrase
    .toLowerCase()
    .split("")
    .filter((char) => char >= "a" && char <= "z");
  let indexRight = newPhrase.length - 1;
  let indexLeft = 0;
  while (indexRight > indexLeft) {
    if (newPhrase[indexLeft] !== newPhrase[indexRight]) return false;
    indexRight--;
    indexLeft++;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
