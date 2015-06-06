'use strict';

describe('Namespaces', function () {

  /*Namespaces*/
  //The namespace concept can limit global impact and provide data protection (not native to Javascript)

  it('You can create a namespace by creating a single global Object', function () {
    //By convention, this namespace variable is capitalized
    var NAMESPACE = {
      namespaceArray: [1, 2, 3],
      namespaceVariable: 9
    };
    //The methods and properties are encapsulated on the NAMESPACE namespace
    expect(NAMESPACE.namespaceVariable).toBe(9);
    //You can now use this global object and protect yourself from overwriting your data
    var namespaceVariable = 8;
    expect(NAMESPACE.namespaceVariable).toBe(9);
    //Namespaces reduce global memory consumption and help write modularized code
  });

  it('You can nest namespaces to provide further organization and protection', function () {
    //Nesting namespaces allows clarity of code by keeping variable names intuitive
    var NAMESPACE = {
      namespaceArray: [1, 2, 3],
      namespaceVariable: 9,
      INTERNAL: {
        namespaceArray: [4, 5, 6],
        namespaceVariable: 10,
      }
    };
    expect(NAMESPACE.namespaceVariable).toBe(9);
    expect(NAMESPACE.INTERNAL.namespaceVariable).toBe(10);
  });

  /*Anonymous Closures*/

  //When you create NAMESPACES, the program may still execute its private methods and variables
  //It is good practice to use private methods to safely modify private data
  //Anonymous Closures allow you to define public and private variables
  it('Closure will allow you to make private variables and properties', function () {
    //You can achieve this by surrounding the entire set of properties and values in an immediately
    //invoked function expression
    //The local values and methods will be "closed" into the armory's namespace
    var NAMESPACE = (function () {
      var privateArray = [1, 2, 3];
      var privateVariable = 9;
      //In order to make public properties, you can return an object
      return {
        //Since the function expression is invoked, this returned object will be handled immediately
        // to the NAMESPACE variable and become a namespace
        publicArray: function () {
          return [4, 5, 6];
        },
        publicVariable: 10 + privateVariable
      };
    })();//This parentheses indicate that the function expression should be immediately executed
    //Since privateArray and privateVariable, we expect them to be undefined
    expect(NAMESPACE.privateArray).toBeUndefined();
    expect(NAMESPACE.privateVariable).toBeUndefined();
    expect(NAMESPACE.publicArray()).toEqual([4, 5, 6]);
    expect(NAMESPACE.publicVariable).toBe(19);
  });

  it('When non-local variables are references in a module, the entire length of the scope chain is checked', function () {
    var globalVariable = 7;
    var NAMESPACE = (function () {
      return {
        //It is very expensive to search for the variables inside nested namespaces
        globalVariable: globalVariable
      };
    })();
    expect(NAMESPACE.globalVariable).toBe(7);
  });

  it('You can use imports for retrieving global variables', function () {
    var globalVariable = 7;
    //An imported global variable becomes another pieces of data, boxed up in the module's closure
    var NAMESPACE = (function (globalVariable) {
      //The function's parameter creates a modifiable value for use in the module
      //The global values stays protected
      return {
        globalVariable: globalVariable
      };
    })(globalVariable);
    expect(NAMESPACE.globalVariable).toBe(7);
  });

});
