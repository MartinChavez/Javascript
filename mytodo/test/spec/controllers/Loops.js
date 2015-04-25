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

  /*Loops*/
  /*While Loop*/
  it('The while-loop runs its code as long as its boolean expression is true', function () {
    var currentNumber = 0;
    //loop runs as long as (currentNumber < 5) is true
    while(currentNumber < 5){
      currentNumber++; //All statements inside the body will be executed during each loop
    }//The body of the loop is enclosed in curly braces
    expect(currentNumber).toBe(5);
  });

});
