Learn Javascript : Test-Driven Learning
================

A project aimed to help the user master Javascipt with a test-driven approach. Each unit contains an annotated tutorial on the code itself and the ability to run Unit Tests to verify the expected behavior.

Example: Javascript Basics - Strings
====================
In this example we explain the use and properties of Strings 
<!--  -->
    /*Strings*/
    /*In javascript we need to use "Quotes" in order to process and manipulate strings*/
  it('Creating a  String', function () {
    expect("String").toEqual(jasmine.any(String));
  });
  it('Javascript Strings supports concatenation', function () {
    expect("StringFirst" + "StringSecond").toEqual("StringFirstStringSecond");
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
  it('Length of stings can be accessed with the .length property', function () {
    expect("ThisStringIsVeryLong".length).toBe(20);
  });
