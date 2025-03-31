const capitalize = (word) => word.charAt(0).toUpperCase() + word.substring(1);

const reverse = (word) => {
  const length = word.length;
  let reversedString = "";
  for (let i = length - 1; i >= 0; i--) {
    reversedString += word.charAt(i);
  }
  return reversedString;
};

const calculator = (function () {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => {
    if (b == 0) return null;
    return Number((a / b).toFixed(2));
  };

  return { add, subtract, multiply, divide };
})();

const calcAsciCode = (code, key) => {
  let cipheredcode = code + key;
  if (code >= 65 && code <= 90) {
    if (cipheredcode > 90) {
      let dif = Math.abs(89 - key);
      cipheredcode = 65 + dif;
      return cipheredcode;
    } else return cipheredcode;
  } else if (code >= 97 && code <= 122) {
    if (cipheredcode > 122) {
      let dif = Math.abs(121 - key);
      cipheredcode = 97 + dif;
      return cipheredcode;
    } else return cipheredcode;
  } else return code;
};

const caesarCipher = (word, key) => {
  let cipheredString = "";
  for (let i = 0; i < word.length; i++) {
    cipheredString += String.fromCharCode(
      calcAsciCode(word.charCodeAt(i), key),
    );
  }
  return cipheredString;
};

const analyzeArray = (array) => {
  return {
    min: Math.min(...array),
    max: Math.max(...array),
    average: Math.trunc(
      Number(array.reduce((acc, prev) => acc + prev, 0) / array.length),
    ),
    length: array.length,
  };
};

export { capitalize, reverse, calculator, caesarCipher, analyzeArray };
