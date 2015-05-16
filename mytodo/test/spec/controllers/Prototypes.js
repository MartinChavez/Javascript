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

  /*Prototypes*/
  /* Objects have properties that belong to and come from the Object's (parent of all object's) prototype*/
  /* A Prototype is a blueprint Object for the Object we are trying to create*/
  /*
  * Inheritance: Allows code reuse by sharing properties and methods in similar objects
  *
  * Object Prototype => Array Prototype, String Prototype, Number Prototype, Function Prototype
  *
  * */
  it('Properties can be functions', function () {

    var string = "String Variable"; //This string variable inherits all the properties from the String Prototype and Object Prototype

    //hasOwnProperty and constructor are both properties of Object, not String, but we can still use the method, this is achieved due to the prototype chain
    expect(string.hasOwnProperty(constructor)).toBe(false);
    //'charAt' is a property of the String Prototype, therefore the prototype chain stops there and does not 'query' the Object prototype for such property
    expect(string.charAt(1)).toBe('t');

  });

  /*You can add base functionality to all objects of the same type*/
  it('Adding a nre function into the Strings Prototype', function () {
    //.prototype finds the prototype for all Strings values everywhere
    String.prototype.lengthPlusOne = function (){ // By adding a function to the String Prototype,it makes it inheritable by all the Strings
      return this.length+1;
    };
    //Now all strings can use this new property
    expect("String".lengthPlusOne()).toBe(7);

  });
});
