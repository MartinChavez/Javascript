'use strict';

describe('Comparisons', function () {

  /*Comparisons*/

  it('The triple-equals comparator compares both type and contents', function () {
    //Double-equals tries to help with type coercion
    expect('4'== 4).toBe(true);
    expect(true == 1).toBe(true);
    expect(false == 0).toBe(true);
    expect("\n \n" == 0).toBe(true);//Strings with escaped characters are interpreted as 'no content'
    //Triple-equals makes sure data have both similar type and contents
    expect('4'=== 4).toBe(false);
    expect(true === 1).toBe(false);
    expect(false === 0).toBe(false)
    expect("\n \n" === 0).toBe(false);
  });
  it('You can use instanceOf operator to identify the type of Object that your code expects', function () {
    var array = [];
    var object = {};
    function CustomObject(){};
    var customObject = new CustomObject();

    expect(array instanceof Array).toBe(true);
    expect(object instanceof Object).toBe(true);
    expect(customObject instanceof CustomObject).toBe(true);
  });
  it('You can use instanceOf operator to check the entire inheritance chain', function () {
    //An object is an instance of all of the prototypes from which it inherits properties
    function CustomObject(){};
    CustomObject.prototype = {};
    var customObject = new CustomObject();

    expect(customObject instanceof CustomObject).toBe(true);
    expect(customObject instanceof Object).toBe(true);

    function CustomObjectTwo(){};
    CustomObjectTwo.prototype =  Object.create(CustomObject.prototype);
    var customObjectTwo = new CustomObjectTwo();

    expect(customObjectTwo instanceof CustomObjectTwo).toBe(true);
    expect(customObjectTwo instanceof CustomObject).toBe(true);
    expect(customObjectTwo instanceof Object).toBe(true);
  });
});
