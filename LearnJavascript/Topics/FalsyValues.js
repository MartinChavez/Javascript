'use strict';

describe('Falsy Values', function () {

  /*Falsy Values*/
  //In Javascript, any value that is: 'false',0,'undefined','NaN',"" or null is considered Falsy
  it('You can evaluate to false any Falsy value', function () {
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

});
