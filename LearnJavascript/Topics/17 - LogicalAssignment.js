'use strict';

describe('Logical Assignment', function () {

  /*Logical Operators can make conditional assignments.*/

  it('You can make assignments with ternary conditions', function () {
    var object = {
      addValueToArray : function(value){
        //We can verify that this.objectArray previously exists (it is looking for a truthy value), if that is the case, return the same value
        //Otherwise, return a new array
        this.objectArray = this.objectArray ? this.objectArray : [];
        this.objectArray.push(value);
      }
    };
    expect(object.objectArray).toBeUndefined();
    object.addValueToArray(5);
    expect(object.objectArray[0]).toBe(5);
  });
  it('You can make assignments with logical operators making the code less verbose', function () {
    var object = {
      addValueToArray : function(value){
        //Using the || during assignment, it will return the first Truthy value
        this.objectArray =  this.objectArray || [];
        this.objectArray.push(value);
      }
    };
    expect(object.objectArray).toBeUndefined();
    object.addValueToArray(5);
    expect(object.objectArray[0]).toBe(5);
  });
  it('Logical Operators results for ||', function () {
    //The || assignment returns the first truthy value
    expect(4||5).toBe(4);
    //If some values are truthy and others are falsy, the || assignment returns the first truthy value
    expect(4||0).toBe(4);
    expect(0||4).toBe(4);
    //If all  values  are falsy, the || assignment returns the last element
    expect(0||""||undefined).toBeUndefined();
  });

  it('Logical Operators results for &&', function () {
    //The && assignment returns the right-most truthy value
    expect(4&&5).toBe(5);
    expect(5&&4).toBe(4);
    //The && assignment returns the first falsy value
    expect(4&&5&&0).toBe(0);
    expect(5&&4&&undefined).toBeUndefined();
    expect(""&&null&&0).toBe("");

    //If all  values  are truthy, the && assignment returns the last element
    expect(1&&2&&3).toBe(3);
  });

});
