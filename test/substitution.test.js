// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  describe("error handling", () => {

// It returns false if the given alphabet isn't exactly 26 characters long.    
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const message = "message";
      const alphabet = "not 26 long";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

//It returns false if there are any duplicate characters in the given alphabet.
    it("should return false if there are any duplicate characters in the given alphabet", () => {
      const message = "message";
      const alphabet = "abcabcabcabcabcabcabcabcab";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {

//It correctly translates the given phrase, based on the alphabet given to the function.
    it("should encode by correctly translating the given phrase, based on the alphabet given to the function.", () => {
      const message = "message";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet);
      const expected = "ykrrpik";

      expect(actual).to.equal(expected);
    });

//It maintains spaces in the message, before and after encoding or decoding.
    it("should maintain spaces", () => {
      const message = "my message";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "yp ysii.rs";

      expect(actual).to.equal(expected);
    });

//It ignores capital letters. (For example, the results of A Message and a message should be the same.)
    it("should ignore captial letters", () => {
        const upperMessage = "A Message";
        const lowerMessage = "a message"
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const upperCase = substitution(upperMessage, alphabet, true);
        const lowerCase = substitution(lowerMessage, alphabet, true);

        expect(upperCase).to.equal(lowerCase);
    });
  });

  describe("decoding a message", () => {

//It correctly translates the given phrase, based on the alphabet given to the function.
    it("should decode by translating the given phrase, based on the alphabet given to the function.", () => {
      const message = "ykrrpik";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

//It maintains spaces in the message, before and after encoding or decoding.
    it("should maintain spaces", () => {
      const message = "yp ysii.rs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });
//It ignores capital letters. (For example, the results of A Message and a message should be the same.)
    it("should ignore captial letters", () => {
        const upperMessage = "A Message";
        const lowerMessage = "a message"
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const upperCase = substitution(upperMessage, alphabet, false);
        const lowerCase = substitution(lowerMessage, alphabet, false);

        expect(upperCase).to.equal(lowerCase);
     });
  });
});
