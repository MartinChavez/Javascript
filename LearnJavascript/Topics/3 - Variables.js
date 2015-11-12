'use strict';

describe('Variables', function () {

  /*Variables*/
  /*Javascript uses variables to store and manage data*/
  /*'var' is the keyword it is used to reserve memory and create variables*/
  it('you can assign strings to var', function () {
    var variable = "ValueToBeAssigned";
    expect(variable).toBe("ValueToBeAssigned");
  });
  it('you can assign numerical values to a variable', function () {
    var variable = 5;
    expect(variable).toBe(5);
  });
  it('you can change the value of a variable', function () {
    var variable = 5; //This allocates memory for var 'variable'
    variable = 6; //Once the variable is defined, you don't need to reserve more memory
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
  it('You can use a simpler syntax to increase the numeric values of variables', function () {
    var fivePlusOne = 5;
    fivePlusOne++; //This is the same as :  var five = five + 1;
    expect(fivePlusOne).toBe(6);
  });
  it('Variables can hold strings', function () {
    var stringVariable = "This is a string variable";
    expect(typeof stringVariable).toEqual('string');
  });
  it('You can compare string lengths using the length property', function () {
    var stringVariable = "This is a string variable";
    var stringVariableTwo = "This is a second string variable";
    expect(stringVariableTwo.length > stringVariable.length).toBe(true);
  });
  it('Length property of string is zero-based', function () {
    // char '4' is at position 4, because we start counting at zero
    var stringVariable = "01234";
    //but the length is still five
    expect(stringVariable.length).toBe(5);
  });
  it('You can use charAt property to retrieve the char at a given position', function () {
    var stringVariable = "01234";
    expect(stringVariable.charAt(4)).toBe("4");
  });

});
