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

  /*Closure*/
  /*A closure wraps up an entire environment, binding necessary variables from other scopes*/
  it('Normal functions are built in memory when the program loads', function () {

    function outsideClosure() {

      var closureVariable = "Closure Variable"; //This values is saved in the insideClosure

      function insideClosure() {
        return closureVariable;//The context of this function is saved in the outsideClosure
      }

      return closureVariable;
    }

    var closure = outsideClosure();

    expect(closure).toBe("Closure Variable");
  });

});
