'use strict';

describe('Built-In Functions', function () {

  /*Built-In Functions*/
  /*Helper functions that are available at any execution level*/
  it('typeof is used to identify the type of value inside a variable or expression', function () {
    expect(typeof true).toBe("boolean");
    expect(typeof "String").toBe("string");
    expect(typeof 100).toBe("number");
    expect(typeof undefined).toBe("undefined");
    expect(typeof null).toBe("object");
  });

  it('toString() function returns the string representation of the variable', function () {
    expect(true.toString()).toBe("true");
    expect("String".toString()).toBe("String");
    var number = 100;
    expect(number.toString()).toBe("100");
  });

});
