'use strict';

describe('Loops', function () {

  /*Loops*/
  /*While Loop*/
  it('The while-loop runs its code as long as its boolean expression is true', function () {
    var currentNumber = 0;
    //loop runs as long as (currentNumber < 5) is true
    while (currentNumber < 5) {
      currentNumber++; //All statements inside the body will be executed during each loop
    }//The body of the loop is enclosed in curly braces
    expect(currentNumber).toBe(5);
  });
  /*For-Loop*/
  it('The for-loop runs has three sections and it is a different way of producing looping behavior', function () {
    //   Initialization        Conditions        Statements that control the loop
    for (var currentNumber = 0;currentNumber <5 ;currentNumber++) {
      //All statements inside the body will be executed during each loop
    }
    expect(currentNumber).toBe(5);
  });

  /*Performance Optimizations*/
  it('You can minimize memory access inside for loops', function () {
    var numbers = [0,1,2,3,4,5,6,7,8,9];
    //At the start of every cycle, the program needs to access the numbers array and access it's length property
    for (var index = 0;index < numbers.length ;index++) {
      expect(numbers[index]).toBe(index);
    }
    //You can use cached values to improve the loop performance by reducing memory access.
    //By creating both variables in the loop parameters,
    //we signal to the compiler that they are only intended for use inside the loop
    for (var index = 0,numbersLength = numbers.length;index < numbersLength ;index++) {
      expect(numbers[index]).toBe(index);
    }
  });
  it('You should use for-loops(vs in-loops) for array iteration', function () {
    Array.prototype.extraMethod = function (){};

    var numbers = [0,1,2];
    //Using a property approach to access indices will also add in all the methods that have been added to the prototype
    for (var property in numbers) {
      if(isNaN(property)){
        expect(property).toBe('extraMethod');
      }
    }
  });
});
