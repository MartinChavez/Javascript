'use strict';

describe('Arrays', function () {

  /*Arrays*/
  /* An array is a data structure with automatically indexed positions*/
  it('Arrays can be accessed by indices', function () {
    //The brackets indicate to the compiler to make an array and to fill it with the comma-separated values between the brackets
    var arrayOfStrings = [ "StringZero" , "StringOne" , "StringTwo"];
    expect(arrayOfStrings[1]).toBe("StringOne");//We can access any location of the zero-based array
  });
  it('You can reference and change specific cells with indices', function () {
    var arrayOfStrings = [ "StringOne" , "StringOne" , "StringTwo"];
    arrayOfStrings[0] = "StringZero"; //You can change the value contained at any index
    expect(arrayOfStrings[0]).toBe("StringZero");
  });
  it('You can access the length of Arrays with the .length property', function () {
    var arrayOfStrings = [ "StringZero" , "StringOne" , "StringTwo"];
    expect(arrayOfStrings.length).toBe(3);
  });
  it('Pop() function removes a cell from the back of the array', function () {
    var arrayOfStrings = [ "StringZero" , "StringOne" , "StringTwo"];
    expect(arrayOfStrings.pop()).toBe("StringTwo");//Pop() function deletes the last position and retrieves its value
    expect(arrayOfStrings.length).toBe(2);//The array length automatically adjusts
  });
  it('shift() function removes a cell from the beginning of the array', function () {
    var arrayOfStrings = [ "StringZero" , "StringOne" , "StringTwo"];
    expect(arrayOfStrings.shift()).toBe("StringZero");//shift() function deletes the first position and retrieves its value
    expect(arrayOfStrings.length).toBe(2);//The array length automatically adjusts
  });
  it('Push() function adds a cell and its contents to the back of the array', function () {
    var arrayOfStrings = [ "StringZero" , "StringOne" ];
    arrayOfStrings.push('StringTwo');
    expect(arrayOfStrings[2]).toBe("StringTwo");//Push() will add a cell onto the back of the arrays
    expect(arrayOfStrings.length).toBe(3);//The array length automatically adjusts
  });

  it('splice() function removes elements from anywhere in the array', function () {
    var arrayOfStrings = [ "StringZero" , "StringOne" , "StringTwo"];
    //The first argument is the index where you want to start
    //The second argument is the number of elements you want to remove
    arrayOfStrings.splice(1,1);
    expect(arrayOfStrings[1]).toBe("StringTwo");
    expect(arrayOfStrings.length).toBe(2);//The array length automatically adjusts
  });

  it('Arrays can hold different types of variables ', function () {
    var StringTwoVariable = "StringTwo";
    var arrayOfStrings = [ "StringZero" , 1 , StringTwoVariable];
    //When assigning variables to an entry of an array, the variable name is not used,
    //Instead, the internal value is retrieved
    expect(arrayOfStrings[2]).toBe("StringTwo");
  });
  it('Arrays can hold Arrays ', function () {
    var firstArrayOfStrings = [ "StringZero" , "StringOne" , "StringTwo"];
    var secondArrayOfStrings = [ "StringThree" , "StringFour" , "StringFive"];
    var firstAndSecondArrays = [firstArrayOfStrings , secondArrayOfStrings];
    expect(Array.isArray(firstAndSecondArrays)).toBe(true);// By combining Arrays, you create a new Array
    expect(firstAndSecondArrays[1][0]).toBe("StringThree");//You can access any index of the composed array
  });
  it('Arrays can hold undefined values ', function () {
    var arrayOfStrings = ["StringZero" , "StringOne" , "StringTwo"];
    arrayOfStrings[1] = undefined; //to make a cell empty. we can use the keyword 'undefined', which means 'NO CONTENTS'
    expect(arrayOfStrings[1]).toBeUndefined();
    expect(arrayOfStrings.length).toBe(3);//The array length does not change when some of the values are undefined
  });
  it('Arrays can be created with no values ', function () {
    var arrayOfStrings = [];
    expect(Array.isArray(arrayOfStrings)).toBe(true);
    //When you access an index of the array, but you haven't assigned a value, the array returns 'undefined'
    expect(arrayOfStrings[1]).toBeUndefined();
    expect(arrayOfStrings.length).toBe(0);
  });
});
