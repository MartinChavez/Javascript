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

  it('A Ternary operator can execute expressions', function () {
    var assignedVariable;
      //You can add several conditions before the ?
     (true && true ) ? assignedVariable = true : assignedVariable = false;
    expect(assignedVariable).toBe(true);
  });

  it('A Ternary operator can execute one or more functions', function () {
    var assignedVariable = false;
    (true) ? function (){ assignedVariable = true;}() : function (){ assignedVariable = false;}();
    expect(assignedVariable).toBe(true);
    /*Resetting to false in order to use ternary operator for more than one function*/
    assignedVariable = false;
     var  assignedVariableTwo = false;
    (true) ? function (){ assignedVariable = true, assignedVariableTwo = true}() : function (){ assignedVariable = false, assignedVariableTwo = false}();
    expect(assignedVariable).toBe(true);
    expect(assignedVariableTwo).toBe(true);
  });
});
