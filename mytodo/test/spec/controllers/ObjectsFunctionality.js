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

  /*Object Functionality*/
  it('Properties can be functions', function () {

    var person = {
      firstName : "Martin",
      age : 27,
      //Properties that hold a function are often called methods
      updateAge : function(newAge){
        //'this' keyword always refers to the owner Object of the function
        this.age = newAge;
      }
    };
    person.updateAge(28);
    expect(person.age).toBe(28);

  });
  it('Methods can be created after the Objects creation', function () {

    var person = {
      firstName : "Martin",
      age : 27
    };
    person.updateAge = function(newAge){
      //'this' keyword still works and references the person's object
      this.age = newAge;
    }
    person.updateAge(28);
    expect(person.age).toBe(28);
  });

});
