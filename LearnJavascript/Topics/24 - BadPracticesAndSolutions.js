//Removing strict mode to allow the use of with for academic purposes
//'use strict';

describe('Bad Practices and Solutions', function () {

  /*with*/

  it('The with keyword takes the entire encapsulated environment of the parameter object and uses it to build a new local scope', function () {
    var outsideObject = {
      insideObject: {
        functionInside: function () {
          return 5;
        }
      }
    }
    //'with' attempts to help coders avoid typing deep access repeatedly
    //This statement is processing-expensive
    with (outsideObject.insideObject) {
      expect(functionInside()).toBe(5);
    }
  });

  /*Solution*/
  it('You can use variables to cache the objects and avoid typing deep access repeatedly', function () {
    var outsideObject = {
      insideObject: {
        functionInside: function () {
          return 5;
        }
      }
    }
    var cachedObject = outsideObject.insideObject;
    expect(cachedObject.functionInside()).toBe(5);
  });

  /* eval*/

  it('eval takes a string as a parameter, start the js compiler, and treat that string as a line of executable code', function () {
    //Using eval affects legibility, debugging and performance of the application
    var result;
    eval("result = 5;");
    expect(result).toBe(5);

    var jsonString = "var json = {value : 5}";
    eval(jsonString);
    expect(json.value).toBe(5);
  });

  /* In general, it is a good practice to avoid eval completely, if you are in a situation where you need to use it,
  * then try to minimize the number of operations*/
  it('try to minimize the operations that use eval', function () {
    var  objectOne = {
      value : undefined
    };
    var One = "One";
    eval("object"+One).value = 5;
    expect(objectOne.value).toBe(5);
  });

  /*Solution*/
  it('try to use data structures and libraries', function () {
    //In general, there is always a way to avoid eval by using data structures
    var  objectOne = {
      value : undefined
    }
    objectOne.value = 5;
    expect(objectOne.value).toBe(5);
    //Or well tested libraries
    var json = JSON.parse('{"value" : 5}');
    expect(json.value).toBe(5);
  });

});
