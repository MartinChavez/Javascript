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
    expect("Multiply 4*2 =" + 4 * 2).toEqual("Multiply 4*2 =8");
  });
  it('You can escape quotation marks with backslash', function () {
    expect("Escape\"Quotes\"").toEqual("Escape" + '"' + "Quotes" + '"');
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

  /*Common and Useful String Methods*/

  it('You can convert a number, Boolean or an object to string using the String() constructor', function () {

    var boolean = false;
    expect(String(boolean)).toBe("false");

    var number = 6;
    expect(String(number)).toBe("6");

    var object = {};
    expect(String(object)).toBe("[object Object]");

  });

  it('You can split a String into multiple sub-strings (inside an Array) using the split() method', function () {

    var numbers = "0,1,2";
    //split() method takes as an argument the separator
    var numbersArray = numbers.split(',');

    expect(numbersArray[0]).toBe("0");
    expect(numbersArray[1]).toBe("1");
    expect(numbersArray[2]).toBe("2");
  });

  it('You can locate a Substring within a String using the indexOf() method', function () {
   //The indexOf() method starts searching for the substring (the first argument passed in) from the beginning of the string
   // The method returns the position of the start of the first occurrence of the substring.
    var fullName = "Martin Chavez Aguilar";
    expect(fullName.indexOf("Chavez")).toBe(7);
  });

  it('You can replace a Substring using the replace() method', function () {
    var fullName = "Marvin Chavez Aguilar";
    //The first argument is the substring you want to replace, the second argument is the new substring.
    fullName = fullName.replace("Marvin","Martin");
    // This will only replace the first instance of the matched substring.
    expect(fullName).toBe("Martin Chavez Aguilar");
  });

  it('You can delete a Substring from a string using the slice() method', function () {
    //The first argument is the character at which to begin the substring (using zero-based numbering)
    //the second argument (which is optional) is the character in the string after you want the substring to end
    var fullName = "Martin Chavez Aguilar";
    fullName = fullName.slice(7);
    expect(fullName).toBe("Chavez Aguilar");
  });

  it('You can convert a string to Uppercase or Lowercase using the toUpperCase() and toLowerCase() methods', function () {
    var word = "ABC";
    expect(word.toLowerCase()).toBe("abc");
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

  it('You can also use concat() method for string concatenations', function () {
    //Standard concatenation operator has been optimized in most modern browser versions
    var stringOne = "One";
    var stringTwo = "Two";
    var stringThree = "Three";

    var finalString = stringOne.concat(stringTwo,stringThree);

    expect(finalString).toBe("OneTwoThree");
  });

  it('When strings are present in an array, use the join() method to concatenate', function () {
    //The join() method is inherited from the Array Prototype
    var stringArrays = ["StringOne", "StringTwo", "StringThree"];
    //Apart for performing better than string concatenation, the code becomes more readable
    expect(stringArrays.join("")).toBe("StringOneStringTwoStringThree");
  });


});
