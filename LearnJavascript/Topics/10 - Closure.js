'use strict';

describe('Closure', function () {

  /*Closure*/
  /*A closure wraps up an entire environment, binding necessary variables from other scopes*/
  it('Normal functions are built in memory when the program loads', function () {

    function outsideClosure() {
      var closureVariable = "Closure Variable"; //This values is saved in the insideClosure
      function insideClosure() {
        return closureVariable;//The context of this function is saved in the outsideClosure
      }
      return insideClosure;
    }

    var insideClosure = outsideClosure();
    expect(insideClosure()).toBe("Closure Variable");
  });
  it('Closures functions can modify bound variables in the background', function () {
    function outsideClosure() {
      var numberOfTimes = 0;
      function insideClosure() {
        numberOfTimes++;
        return numberOfTimes;
      }
      return insideClosure;
    }

    var insideClosureOne = outsideClosure();
    insideClosureOne(); //Calling it one time increments numberOfTimes to 1
    insideClosureOne(); //Calling it two times increments numberOfTimes to 2
    //Calling it the third times increments numberOfTimes to 3
    expect(insideClosureOne()).toBe(3);
  });
  it('Closures bind values at the very last opportunity ', function () {

    function outsideClosure() {
      var key = 3;
      var insideFunction;
      for (var currentNumber = 0; currentNumber < 6; currentNumber++) {
        if (currentNumber === key) {
          //Although we match the key 3, the loop continues and the function will always
          //set the value to the last iteration of the loop
          insideFunction = function insideClosure() {
            return currentNumber;
          }
        }
      }
      return insideFunction;
    }
    var insideClosure = outsideClosure();
    expect(insideClosure()).toBe(6);//The closure respects the final state of the variables
  });

});
