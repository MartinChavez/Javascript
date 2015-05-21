'use strict';

describe('Ternary Conditionals', function () {

  /*The Ternary Conditional is the only JavaScript operator that takes three operands.
  This operator is frequently used as a shortcut for the if statement.*/

  it('You can simplify a simple conditional using a ternary conditional', function () {

    var value;
    //All these statements are required for the assignment of a simple value
    if(true){
      value = true;
    }else{
      value = false;
    }
    expect(value).toBe(true);
   // First, you evaluate the condition behind the '?'
   // Second, the runtime selects the expressions to run based on left':' => condition is true
   //                                                                 ':'right => condition is false
    value = (true) ? true : false;
    expect(value).toBe(true);
  });

  /*Falsy Values*/
  //In Javascript,any value that is  'false',0,'undefined','NaN',"" or null is considered Falsy
  it('you can evaluate to false any Falsy value', function () {
    var value;
    value = (false) ? true : false;
    expect(value).toBe(false);
    value = (0) ? true : false;
    expect(value).toEqual(false);
    value = (undefined) ? true : false;
    expect(value).toEqual(false);
    value = (NaN) ? true : false;
    expect(value).toBe(false);
    value = ("") ? true : false;
    expect(value).toEqual(false);
    value = (null) ? true : false;
    expect(value).toEqual(false);
  });

  /*Truthy  Values*/
  //In Javascript,any value that is NOT 'false',0,'undefined','NaN',"" or null is considered Truthy
  it('you can evaluate to false any Falsy value', function () {
    var value;
    value = ("String") ? true : false;
    expect(value).toBe(true);
    value = (1) ? true : false;
    expect(value).toEqual(true);
    var definedVar = value ;
    value = (definedVar) ? true : false;
    expect(value).toEqual(true);
    value = (-2) ? true : false;
    expect(value).toEqual(true);
    value = ([]) ? true : false;
    expect(value).toEqual(true);
    value = ({}) ? true : false;
    expect(value).toEqual(true);
    value = (Object.prototype) ? true : false;
    expect(value).toEqual(true);
  });

  it('A Ternary operator can execute expressions', function () {
    var assignedVariable;
      //You can add several conditions before the ?
     (true && true ) ? assignedVariable = true : assignedVariable = false;
    expect(assignedVariable).toBe(true);
  });

  it('A Ternary operator can one or more functions', function () {
    var assignedVariable = false;
    (true) ? function (){ assignedVariable = true;}() : function (){ assignedVariable = false;}();
    expect(assignedVariable).toBe(true);
    /*Resetting to false in order to use ternary operator for more than one function*/
    assignedVariable = false;
     var  assignedVariableTwo = false;
    (true) ? function (){ assignedVariable = true, assignedVariableTwo = true}() : function (){ assignedVariable = true, assignedVariableTwo = false}();
    expect(assignedVariable).toBe(true);
    expect(assignedVariableTwo).toBe(true);
  });


});
