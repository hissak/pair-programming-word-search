const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')
const puzzle = [
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
]

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch(puzzle, 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch(puzzle, 'SEINFELD')

    assert.isTrue(result);
  });

  it('should handle backwards words', function() {
    const result = wordSearch(puzzle, 'DLEFNIES')
    assert.isTrue(result);

  });
  it('should handle diagonals')

  it('should throw an error if no puzzle is passed as an argument', () => {
    const errorMessage = 'No args!'
    const arguments = undefined
    assert.throw(() => wordSearch(arguments), errorMessage)
  });
  it('should throw an error if the puzzle is not an array', () => {
    const errorMessage = 'Wrong args!'
    const puzzleArgument = "Not an array"
    assert.throw(() => wordSearch(puzzleArgument, "Valid String"), errorMessage)
  });
  it('should throw an error if the word is not a string', () => {
    const errorMessage = 'Wrong args!';
    const wordArgument = 9001;
    assert.throw(() => wordSearch(puzzle, wordArgument)), errorMessage;
  })
  it('should ignore case', () => {
    const word = "sEinFeLd";
    const result = wordSearch(puzzle, word);
    assert.equal(result, true)
  })
});
