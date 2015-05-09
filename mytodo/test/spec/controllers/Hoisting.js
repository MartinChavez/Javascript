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

  /*Hoisting*/
  /* Program load order*/
  it('Javascript loads functions and variables that need space in memory first', function () {

    function Universe() {
      //This variable is loaded as var variableInMemory =  undefined;
      var variableInMemory = functionResult();
      return variableInMemory;

      function functionResult() { //This function gets loaded at the top
        return 5;
      }
    }

    expect(Universe()).toBe(5);
  });
  it('Hoisting functions with the same name get overridden', function () {

    function Universe() {

      function functionResult() { //This function gets loaded at the top at first
        return 3;
      }

      return functionResult();

      function functionResult() { //This function gets loaded at the after the first function, since it has the same name, the first function is destroyed
        return 5;
      }
    }

    expect(Universe()).toBe(5);
  });
  it('Function Expressions are never hoisted', function () {

    function Universe() {
      try {
        return functionVariable();
      } catch (e) {
        return "NotLoaded";
      }
      var functionVariable = function functionResult() { //This function is never reached since it exists after the return statement
        return 5;
      }
    }
    expect(Universe()).toBe("NotLoaded");
  });
});
