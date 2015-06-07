'use strict';

describe('Functions', function () {

  /*Functions*/
  /*Functions take some input, then execute a series of statements using the input, and outputs a result*/
  it('functions help write reusable code', function () {
    expect(addNumbers(1, 2)).toBe(3);
    expect(addNumbers(2, 3)).toBe(5);
    expect(addNumbers(1 + 1, 2 + 1)).toBe(5);//Parameters can also be expressions, which the function will resolve before starting
    var numberOne = 2;
    var numberTwo = 3;
    expect(addNumbers(numberOne, numberTwo)).toBe(5);//Parameters can also be variables
  });

  //'function' keyword tells the compiler that you are defining a function
  function addNumbers(numberOne, numberTwo) { //The function's name follows the 'function' keyword and should indicate the function's purpose
    //Parameters are passed in a set of parentheses before the first curly brace
    return numberOne + numberTwo;
    //The return keyword works as a terminating statement and exits the function returning the value in front of it
  } //The statements that will be executed should be enclosed in curly braces.

  /*Scopes*/
  it('Global and Local Variables', function () {
    /*Global Variables (on this scope)*/
    var globalVariable = 1;//global variables could be accessed from anywhere in the program

    function addUsingGlobalVariable(localNumberOne) {
      //localNumberOne is a Local Variable and could only be accessed from the function's scope
      return globalVariable + localNumberOne; //Local and global variables can interact with each other
    }

    expect(addUsingGlobalVariable(1)).toBe(2);

    //You can modify the global variables inside any method
    function addToGlobalVariable(localNumberOne) {
      globalVariable = globalVariable + localNumberOne;
    }
    addToGlobalVariable(1);
    expect(globalVariable).toBe(2);
  });
  it('A functions local variables are not available once the functions scope is closed', function () {

    var localVariable = 6;
    function localFunction() {
      var localVariable = 5;
      return localVariable;
    }
    localFunction();
    expect(localVariable).toBe(6);
  });
});
