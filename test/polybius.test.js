// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
  describe("encoding a message", () => {

//When encoding, it translates the letters i and j to 42.
    it("should translate both 'i' and 'j' to 42", () => {
      const message = "jiggle";
      const actual = polybius(message);
      const expected = "424222221351";

      expect(actual).to.equal(expected);
    });

//It maintains spaces in the message, before and after encoding or decoding.
    it("should maintain spaces", () => {
      const message = "my message";
      const actual = polybius(message);
      const expected = "2345 23513434112251";

      expect(actual).to.equal(expected);
    });

//It ignores capital letters. (For example, the results of A Message and a message should be the same.)
    it("should ignore captial letters", () => {
        const upperMessage = "A Message";
        const lowerMessage = "a message"
        const upperCase = polybius(upperMessage, true);
        const lowerCase = polybius(lowerMessage, true);

        expect(upperCase).to.equal(lowerCase);
    });
  });

  describe("decoding a message", () => {

//When decoding, it translates 42 to (i/j).  kinda confused about this test
    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "424222221351";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

//It maintains spaces in the message, before and after encoding or decoding.
    it("should maintain spaces", () => {
      const message = "2345 23513434112251";
      const actual = polybius(message, false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });

//It ignores capital letters. (For example, the results of A Message and a message should be the same.)
    it("should ignore captial letters", () => {
        const upperMessage = "A Message";
        const lowerMessage = "a message"
        const upperCase = polybius(upperMessage, false);
        const lowerCase = polybius(lowerMessage, false);

        expect(upperCase).to.equal(lowerCase);
    });
  });
});

