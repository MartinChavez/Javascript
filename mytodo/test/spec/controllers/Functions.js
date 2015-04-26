'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  /*Functions*/
  /*Functions take some input, executes a series of statements using the input and outputs some result*/
  it('functions help write reusable code', function () {
    expect(addNumbers(1,2)).toBe(3);
    expect(addNumbers(2,3)).toBe(5);
    expect(addNumbers(1+1,2+1)).toBe(5);//Parameters can also be expressions, which the function will resolve before starting
    var numberOne = 2;
    var numberTwo = 3;
    expect(addNumbers(numberOne,numberTwo)).toBe(5);//Parameters can also be variables
  });

  //'function' keyword tells the compiler that you are defining a function
  function addNumbers (numberOne, numberTwo){ //The function's name follows the 'function' keyword and should indicate the function's purpose
                      //Parameters are passed in a set of parentheses before the first curly brace
    return numberOne+numberTwo;
    //The return keyword works as a terminating statement and exits the function returning the value in front of it
  } //The statements that will be executed should be enclosed in curly braces.


  it('Scopes : Global and Local Variables', function () {
    /*Global Variables (on this scope)*/
    var globalNumberOne = 1;//global variables could be accessed from anywhere

    function addToGlobalNumberOne(localNumberOne ){
      //localNumberOne is a Local Variable and could only be accessed from the function's scope
      return globalNumberOne + localNumberOne; //Local and global variables can interact with each other
    }

    expect(addToGlobalNumberOne(1)).toBe(2);
  });


});
