<a name="README">[<img src="https://camo.githubusercontent.com/eb464a60a4a47f8b600aa71bfbc6aff3fe5c5392/68747470733a2f2f7261772e6769746875622e636f6d2f766f6f646f6f74696b69676f642f6c6f676f2e6a732f6d61737465722f6a732e706e67" width="200px" height="200px" />](https://github.com/MartinChavez/Learn-Javascript)</a>

Javascript : Test-Driven Learning
================

A project aimed to help the user master Javascipt with a test-driven approach. Each unit contains an annotated tutorial on the code itself and the ability to run Unit Tests to verify the expected behavior.

Topics
================
 - Arrays
 - Bad Practices and Solutions
 - Booleans
 - Built-in Functions
 - Closure
 - Comparisons
 - Conditionals
 - Exceptions
 - Falsey Values
 - Function Expressions
 - Function Expressions as Parameters
 - Functions
 - General Performance
 - Hoisting
 - Locial Assignment
 - Loops
 - Object Prototype
 - Objects
 - Objects Functionality
 - Prototypes
 - Strings
 - Switch Block
 - Ternary Conditionals
 - Truthy Values
 - Variables

Tools
====================
<a name="README">[<img src="https://camo.githubusercontent.com/39242419c60a53e1f3cecdeecb2460acce47366f/687474703a2f2f6772756e746a732e636f6d2f696d672f6772756e742d6c6f676f2d6e6f2d776f72646d61726b2e737667" width="50px" height="50px" />](https://github.com/gruntjs/grunt)</a>
<a name="README">[<img src="https://cldup.com/0286W-2y27.png" width="50px" height="50px" />](https://karma-runner.github.io/0.12/index.html)</a>
<a name="README">[<img src="http://eclipsesource.com/blogs/wp-content/uploads/2014/03/jasmine.png" width="50px" height="50px" />](https://github.com/jasmine/jasmine)</a>
<a name="README">[<img src="https://camo.githubusercontent.com/aad5f0385a2d8524cb366a1bad62bc74e797743a/687474703a2f2f692e696d6775722e636f6d2f516d47485067632e706e67" width="50px" height="50px" />](http://bower.io/)</a>
<a name="README">[<img src="https://www.npmjs.com/static/images/npm-logo.svg" width="50px" height="50px" />](https://www.npmjs.com/)</a>

Example: Arrays
====================
```Javascript
  /*Arrays*/
  /* An array is a data structure with automatically indexed positions*/
  it('Arrays can be accessed by indices', function () {
    //The brackets indicate to the compiler to make an array and fill it with
    //the comma-separated values between the brackets
    var arrayOfStrings = [ "StringZero" , "StringOne" , "StringTwo"];
    //We can access any location of the zero-based array
    expect(arrayOfStrings[1]).toBe("StringOne");
  });
  it('You can reference and change specific cells with indices', function () {
    var arrayOfStrings = [ "StringOne" , "StringOne" , "StringTwo"];
    arrayOfStrings[0] = "StringZero"; //You can change the value contained at any index
    expect(arrayOfStrings[0]).toBe("StringZero");
  });
  it('You can access the length of Arrays', function () {
    var arrayOfStrings = [ "StringZero" , "StringOne" , "StringTwo"];
    expect(arrayOfStrings.length).toBe(3);
  });
  it('Pop() function removes a cell from the back of the array', function () {
    var arrayOfStrings = [ "StringZero" , "StringOne" , "StringTwo"];
    //Pop() function deletes the last position and retrieves its value
    expect(arrayOfStrings.pop()).toBe("StringTwo");
    expect(arrayOfStrings.length).toBe(2);//The array length automatically adjusts
  });
  it('shift() function removes a cell from the beginning of the array', function () {
    var arrayOfStrings = [ "StringZero" , "StringOne" , "StringTwo"];
    //shift() function deletes the first position and retrieves its value
    expect(arrayOfStrings.shift()).toBe("StringZero");
    expect(arrayOfStrings.length).toBe(2);//The array length automatically adjusts
  });
  it('Push() function adds a cell and its contents to the back of the array', function () {
    var arrayOfStrings = [ "StringZero" , "StringOne" ];
    arrayOfStrings.push('StringTwo');
    //Push() will add a cell onto the back of the arrays
    expect(arrayOfStrings[2]).toBe("StringTwo");
    expect(arrayOfStrings.length).toBe(3);//The array length automatically adjusts
  });
  it('Arrays can hold different types of variables ', function () {
    var StringTwoVariable = "StringTwo";
    var arrayOfStrings = [ "StringZero" , 1 , StringTwoVariable];
    //When assigning variables to an entry of an array, the variable name is not
    //used, instead the array uses the internal value
    expect(arrayOfStrings[2]).toBe("StringTwo");
  });
  it('Arrays can hold Arrays ', function () {
    var firstArrayOfStrings = [ "StringZero" , "StringOne" , "StringTwo"];
    var secondArrayOfStrings = [ "StringThree" , "StringFour" , "StringFive"];
    var firstAndSecondArrays = [firstArrayOfStrings , secondArrayOfStrings];
    expect(typeof firstAndSecondArrays).toBe("object");//Arrays are treated as objects
    //You can access any index of the composed array
    expect(firstAndSecondArrays[1][0]).toBe("StringThree");
  });
  it('Arrays can hold undefined values ', function () {
    var arrayOfStrings = [ "StringZero" , "StringOne" , "StringTwo"];
    //to make a cell empty. we can use the keyword 'undefined', which means 'NO CONTENTS'
    arrayOfStrings[1] = undefined; 
    expect(typeof arrayOfStrings[1]).toBe("undefined");
    expect(arrayOfStrings[1]).toBe(undefined);
    //The array length does not change when some of the values are undefined
    expect(arrayOfStrings.length).toBe(3);
  });
  it('Arrays can be created with no values', function () {
    var arrayOfStrings = [];
    expect(typeof arrayOfStrings).toBe("object");
    //When you access an index of the array with no value, the array returns 'undefined'
    expect(arrayOfStrings[1]).toBe(undefined); 
    expect(arrayOfStrings.length).toBe(0);
  });
```
Install
====================
```Terminal
npm install
bower install
```

Run the Tests
====================
```Javascript
grunt test
```
[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/Run+Tests.png"  />](https://github.com/MartinChavez/Learn-Javascript)

Questions ?
====================
If you have any questions, please feel free to ask me:
[Martin Chavez Aguilar](mailto:martin.chavez@live.com)

Contributors
====================
* [Martin Chavez Aguilar](https://www.linkedin.com/in/martinchavezaguilar) - Wrote the project

References
====================
* [Code School](https://www.codeschool.com/)
