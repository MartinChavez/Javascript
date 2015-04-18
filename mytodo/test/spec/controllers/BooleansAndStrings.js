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

  /*Operators*/
  /*Common Operators used in Javascript Language*/
  it('Addition', function () {
    expect(6+4).toBe(10);
  });
  it('Substraction', function () {
    expect(10-4).toBe(6);
  });
  it('Division', function () {
    expect(12/4).toBe(3);
  });
  /*Grouping Expressions*/
  /*PEMDAS: Parentheses, Exponents, Multiplication, Division, Addition, Subtraction. */
  it('Javascript follows PEMDAS: Order of Operations', function () {
    expect((-5 * 6) - 7 * -2).toBe(-16);
  });

  /*Comparators*/
  /*Common Number Comparators used in Javascript Syntax*/
  it('Greater than', function () {
    expect(6>4).toBe(true);
  });
  it('Less than', function () {
    expect(6<4).toBe(false);
  });
  it('Equals', function () {
    expect(4==4).toBe(true);
  });
  it('Not Equals', function () {
    expect(4!=5).toBe(true);
  });

  /*Strings*/
  /*In javascript we need to use "Quotes" in order to process and manipulate strings*/
  it('Creating a  String', function () {
    expect("String").toEqual(jasmine.any(String));
  });
  it('Javascript Strings supports concatenation', function () {
    expect("StringFirst" + "StringSecond").toEqual("StringFirstStringSecond");
  });
  it('Concatenation works with numbers', function () {
    expect("StringFirst" + 1).toEqual("StringFirst1");
  });
  it('Concatenation evaluates expressions', function () {
    expect("Multiply 4*2 =" + 4*2).toEqual("Multiply 4*2 =8");
  });
  it('You can escape quotation marks with backslash', function () {
    expect("Escape\"Quotes\"").toEqual("Escape"+'"'+"Quotes"+'"');
  });
  it('Double equals will compare exact contents', function () {
    expect("String" == "String").toBe(true);
  });
  it('Double equals on strings is case sensitive', function () {
    expect("String" == "string").toBe(false);
  });
  it('Length of strings can be accessed with the .length property', function () {
    expect("ThisStringIsVeryLong".length).toBe(20);
  });
});
