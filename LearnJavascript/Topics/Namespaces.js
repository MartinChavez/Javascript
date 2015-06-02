'use strict';

describe('Namespaces', function () {

  /*Namespaces*/
  //The namespace concept can limit global impact and provide data protection (not native to Javascript)

  it('You can create a namespace by creating a single global Object', function () {
    //By convention, this namespace variable is capitalized
    var NAMESPACE = {
      namespaceArray : [1,2,3],
      namespaceVariable : 9
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
      namespaceArray : [1,2,3],
      namespaceVariable : 9,
      INTERNAL : {
        namespaceArray : [4,5,6],
        namespaceVariable : 10,
      }
    };
    expect(NAMESPACE.namespaceVariable).toBe(9);
    expect(NAMESPACE.INTERNAL.namespaceVariable).toBe(10);
  });

});
