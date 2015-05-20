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
  it('The for-loop runs has three sections and is adifferent way of producing looping behavior', function () {
    //   Initialization        Conditions        Statements that control the loop
    for (var currentNumber = 0;currentNumber <5 ;currentNumber++) {
      //All statements inside the body will be executed during each loop
    }
    expect(currentNumber).toBe(5);
  });
});
