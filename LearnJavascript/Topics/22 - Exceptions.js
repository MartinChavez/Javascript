'use strict';

describe('Exceptions', function () {

  /*Exceptions : Run-time errors*/

  it('Run-timer errors happen after JS is interpreted', function () {
    //A syntax error will not make it past the interpreter. It will be marked as invalid Javascript
    //It will be reported on the JS console
    expect( function(){ return brokenVar; } ).toThrow();
  });
  it('A try block is a statement that allows the run-time to continue even when there are exceptions', function () {
    var reachedCatch = false;
    try{
      brokenVar;
    }catch(error){ //If the Try block throws an error, the information is passed to the catch block
      expect(error.toString()).toBe("ReferenceError: Can't find variable: brokenVar");
      reachedCatch = true;
    }
    expect(reachedCatch).toBe(true);
  });
  it('Error types allow us to take more informed actions', function () {
    //Javascript can throw multiple useful error types that allow a catch block to handle errors more gracefully
    try{
      brokenVar;
    }catch(error){
      /*Reference Error is thrown when the variable has not been defined*/
      expect(error instanceof ReferenceError).toBe(true)
    }
    try{
      var brokenVar = 3;
      brokenVar.concat("Three");
    }catch(error){
      /*TypeError is thrown when the variable is a different Type from what was expected
      and does not have the desired method*/
      expect(error instanceof TypeError).toBe(true)
    }
  });
  it('You can use conditionals and throw keyword to control the exception flow', function () {
    var reachedCatch = false;
    try{
      if(brokenVar === undefined){
        throw new ReferenceError();
      }
    }catch(error){
      expect(error instanceof ReferenceError).toBe(true);
      reachedCatch = true;
      //You can now add a more specific message to console about the reason the runtime threw
    }
    expect(reachedCatch).toBe(true);
  });

  it('You can use the finally block after a catch block to execute code that should run even if there are errors on the try block', function () {
    var reachedFinally = false;
    try{
      brokenVar;
    }catch(error){
    //The finally block will execute whether try met with success or failure
    }finally{
      reachedFinally = true;
    }
    expect(reachedFinally).toBe(true);
  });
  it('You can nest try-blocks within catch-blocks to organize the option sequence', function () {
   var reachedLastCatchBlock = false;
    try{
      throw new Error();
    }catch(error){
      try{
        throw new Error();
      }catch(error2){
        reachedLastCatchBlock = true;
      }
    }
    expect(reachedLastCatchBlock).toBe(true);
  });
});
