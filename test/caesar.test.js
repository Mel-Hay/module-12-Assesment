// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
 
  describe("error handling", () => {
//It returns false if the shift value is equal to 0.   
    it("should return false if the shift amount is 0", () => {
      const message = "zebra magazine";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
//It returns false if the shift value is greater than 25.   
    it("should return false if the shift amount is above 25", () => {
      const message = "zebra magazine";
      const shift = 26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
//It returns false if the shift value is less than -25.   
    it("should return false if the shift amount is less than -25", () => {
      const message = "zebra magazine";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
//It returns false if the shift value is not present.   
    it("should return false if the shift is not present", () => {
        const message = "zebra magazine";
        const shift=undefined;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      });
  });

  describe("encoding a message", () => {

//It ignores capital letters. (For example, the results of A Message and a message should be the same.)
    it("should ignore capital letters", () => {
      const message = "A Message";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "d phvvdjh";

      expect(actual).to.equal(expected);
    });

//When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)
    it("should handle letters at the end of the alphabet", () => {
      const message = "zebra magazine";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "cheud pdjdclqh";

      expect(actual).to.equal(expected);
    });

//It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
    it("should maintain spaces and other symbols in the message", () => {
      const message = "a message.";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "d phvvdjh.";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {

//It ignores capital letters. (For example, the results of A Message and a message should be the same.)
    it("should ignore capital letters", () => {
        const message = "D pHvvdjh";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "a message";
  
        expect(actual).to.equal(expected);
      });

//When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)
    it("should handle letters at the end of the alphabet", () => {
        const message = "cheud pdjdclqh";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "zebra magazine";
  
        expect(actual).to.equal(expected);
      });
      
//It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
    it("should maintain spaces and other symbols in the message", () => {
      const message = "d phvvdjh.";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a message.";

      expect(actual).to.equal(expected);
    });
  });
});
