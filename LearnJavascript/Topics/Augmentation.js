'use strict';

describe('Augmentation', function () {

  /*Augmentation*/
  //Provides extra properties for existing modules

  it('You can add functionality to an existing namespace by Augmentation', function () {

    var NAMESPACE = (function () {
      var privateVariable = 5;
      return {
        publicVariable: 7
      };
    })();
    //To create augmentation, we create another closure
    NAMESPACE = (function(OLDNAMESPACE){
     //It is very important to understand that only methods on this namespace can access the private values of this closure
      var privateVariableTwo = 10;
      OLDNAMESPACE.getPrivateVariableTwo = function (){
        return privateVariableTwo;
      };
      return OLDNAMESPACE;
    })(NAMESPACE);

    expect(NAMESPACE.publicVariable).toBe(7);
    expect(NAMESPACE.getPrivateVariableTwo()).toBe(10);

  });

});
