'use strict';

describe('Function Expressions', function () {

  /*Function Expressions*/
  /*We can build functions within code execution rather than at program load time*/
  it('Normal functions are built in memory when the program loads', function () {
    expect(typeof addTwoNumbers).toBe("function");
  });
  function addTwoNumbers(numberOne,numberTwo){
      return numberOne+numberTwo;
  }
  it('Assigning functions to variables allows them to only load them when the runtime executes that line', function () {
    var subtract = function subtractTwoNumbers(numberOne,numberTwo){ //In Js we can assign a function to a variable
      return numberOne-numberTwo;
    };
    expect(typeof subtract).toBe("function"); //The variable is still considered a function
    expect(subtract(3,2)).toBe(1);// Then we can call the function variable by name
  });
  it('We can create Anonymous Functions without a name', function () {
    var multiply = function (numberOne,numberTwo){ //The function is being assigned to variable, therefore, we don't need a name
      return numberOne*numberTwo;
    };
    expect(multiply(3,2)).toBe(6);
  });
  it('A variable that holds a function can be passed into other functions', function () {
    var divideTenByTwo = function (){
      return 10/2;
    };
    var divideTenByFive = function (){
      return 10/5;
    };
    expect(executeOperation(divideTenByTwo)).toBe(5);
    expect(executeOperation(divideTenByFive)).toBe(2);
  });
  function executeOperation(operation){//You can encapsulate common functionality in a function
    return operation();
  }
});
