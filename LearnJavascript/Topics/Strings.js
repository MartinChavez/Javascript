'use strict';

describe('Strings', function () {

  /*Strings*/
  /*In javascript we need to use "Quotes" in order to process and manipulate strings*/
  it('You can create a String by surrounding text with quotes', function () {
    expect(typeof "String").toEqual("string");
  });
  it('Javascript Strings support concatenation', function () {
    expect("First" + "Second").toEqual("FirstSecond");
  });
  it('Concatenation works with numbers', function () {
    expect("StringFirst" + 1).toEqual("StringFirst1");
  });
  it('Concatenation evaluates expressions', function () {
    expect("Multiply 4*2 =" + 4*2).toEqual("Multiply 4*2 =8");
  });
  it('You can escape quotation marks with backslash', function () {
    expect("Escape\"Quotes\"").toEqual("Escape"+'"'+"Quotes"+'"');
  });
  it('Double equals will compare exact contents', function () {
    expect("String" == "String").toBe(true);
  });
  it('Double equals on strings is case sensitive', function () {
    expect("String" == "string").toBe(false);
  });
  it('Length of strings can be accessed with the .length property', function () {
    expect("ThisStringIsVeryLong".length).toBe(20);
  });

  /*Performance*/

  it('Use standard concatenation for small string concatenations', function () {
    //Standard concatenation operator has been optimized in most modern browser versions
    var stringOne = "One";
    var stringTwo = "Two";
    var stringThree = "Three";

    var finalString = "";
    finalString += stringOne;
    finalString += stringTwo;
    finalString += stringThree;

    expect(finalString).toBe("OneTwoThree");
  });

  it('When strings are present in an array, use the join() method to concatenate', function () {
    //The join() method is inherited from the Array Prototype
    var stringArrays = ["StringOne","StringTwo","StringThree"];
    //Apart for performing better than string concatenation, the code becomes more readable
    expect(stringArrays.join("")).toBe("StringOneStringTwoStringThree");
  });


});
