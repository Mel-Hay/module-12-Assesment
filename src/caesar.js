// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function caesar(input, shift, encode = true) {
    // your solution code here
    let lettersIndex = [];
    let shiftedIndex = [];
    let result = [];
    let finalResult = [];

    let lcInput = input.toLowerCase();

    if (!shift || shift < -25 || shift > 25) {
      return false;
    }

    for (let i = 0; i < input.length; i++) {
      if (alphabet.includes(lcInput[i])) {
        lettersIndex.push(alphabet.indexOf(lcInput[i]));
      } else {
        lettersIndex.push(lcInput[i]);
      }
    }
  
    lettersIndex.forEach((number) => {
      if ("number" !== typeof number) {
        shiftedIndex.push(number);
      } else {
        if (encode === true) {
          let shiftedNum = number + shift;
          shiftedIndex.push(shiftedNum);
        } else {
          let shiftedNum = number - shift;
          shiftedIndex.push(shiftedNum);
        }
      }
    });

    shiftedIndex.forEach((num) => {
      if (num > 25) {
        num -= 26;
      } else if (num < 0) {
        num += 26;
      }
      result.push(num);
    });

    finalResult = result.map((eachCharacter) => {
      if (alphabet.includes(alphabet[eachCharacter])) {
        return alphabet[eachCharacter];
      } else {
        return eachCharacter;
      }
    });
    return finalResult.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
