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

  /*Variables*/
  /*Javascript uses variables to store and manage data*/
  /*'var' is the keyword to reserve memory*/
  it('you can assign strings to var', function () {
    var variableName = "ValueToBeAssigned";
    expect(variableName).toBe("ValueToBeAssigned");
  });
  it('you can assign numerical values to var', function () {
    var variableName = 5;
    expect(variableName).toBe(5);
  });
  it('you can change the value of  var', function () {
    var variable = 5; //This allocates memory for var 'variable'
    variable = 6; //Once the variable was defined, you don't need to create a new one
    expect(variable).toBe(6);
  });
  it('you can change the value of the variable by using the value of the same variable', function () {
    var variable = 5;
    variable = variable + variable; //By using the value of variable, which is 5, we can re-write the value of variable
    expect(variable).toBe(10);
  });
  it('Variable names also act as substitutes for the data they point to', function () {
    var five = 5;
    var fiveString = "Five is " + five;
    expect(fiveString).toBe("Five is 5");
  });
  it('Simple syntax to increase the numeric values', function () {
    var fivePlusOne = 5;
    fivePlusOne++; //This is the same as :  var five = five + 1;
    expect(fivePlusOne).toBe(6);
  });
  it('Variables can hold strings', function () {
    var stringVariable = "This is a string variable";
    expect(stringVariable).toEqual(jasmine.any(String));
  });
  it('You can compare string lengths using the length property', function () {
    var stringVariable = "This is a string variable";
    var stringSecondVariable = "This is a second string variable";
    expect(stringSecondVariable.length > stringVariable.length).toBe(true);
  });
  it('Length property of string is zero-based', function () {
    var stringVariable = "01234"; // char '4' is at position 4, but we start counting at 0
    expect(stringVariable.length).toBe(5);
  });
  it('You can use charAt property to retrieve the char at a given position', function () {
    var stringVariable = "01234";
    expect(stringVariable.charAt(4)).toBe("4");
  });

});
