'use strict';

describe('Function Expressions as Parameters', function () {

  /*Function Expressions as Parameters*/
  it('Map function takes in a function as a parameter and returns a new array with the results', function () {
    var numbers = [1, 2, 3, 4, 5];
    var results = numbers.map(
      //We build an anonymous functions for map's parameter, it takes in the contents of each cell of numbers and returns an operation using the cell's value
      function (arrayCell) {
        return arrayCell * 2;
      }
    );// results = [2, 4, 6, 8, 10];
    for (var currentNumberIndex = 0; currentNumberIndex < numbers.length; currentNumberIndex++) {
      expect(results[currentNumberIndex]).toBe(numbers[currentNumberIndex] * 2); //The map function allows us to perform a condensed loop in one statement
    }
  });
  it('Functions can return Function expressions', function () {
    var concatenatingStringToRightFunction = concatenateString("rightSide");
    expect(concatenatingStringToRightFunction("First")).toBe("FirstString");
    var concatenatingStringToLeftFunction = concatenateString("leftSide");
    expect(concatenatingStringToLeftFunction("Second")).toBe("StringSecond");
  });
  it('Functions can return Function expressions without using an intermediate variable', function () {
    //By using parenthesis we invoke the returning function
    expect(concatenateString("rightSide")("First")).toBe("FirstString");
  });

  function concatenateString(side) {

    if (side === "rightSide") {
      return function (stringValue) {
        return stringValue + "String";
      };
    }
    if (side === "leftSide") {

      return function (stringValue) {
        return "String"+stringValue;
      };
    }
  }
});
