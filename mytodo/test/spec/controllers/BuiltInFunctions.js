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

  /*Built-In Functions*/
  /*Helper functions that are available at any execution level*/
  it('typeof is used to identify the type of value inside a variable or expression', function () {
    expect(typeof true).toBe("boolean");
    expect(typeof "String").toBe("string");
    expect(typeof 100).toBe("number");
    expect(typeof undefined).toBe("undefined");
    expect(typeof null).toBe("object");
  });

});
