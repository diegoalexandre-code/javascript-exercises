const palindromes = function (string) {
  const punctuation = [",", ".", " ", ":", ";", "!"];
  const word = string
    .toLowerCase()
    .split("")
    .filter((item) => !punctuation.includes(item));
  const wordReversed = word.slice().reverse();
  return word.every((value, index) => value === wordReversed[index]);
};

// Do not edit below this line
module.exports = palindromes;
