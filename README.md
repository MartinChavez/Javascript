<a name="README">[<img src="https://camo.githubusercontent.com/eb464a60a4a47f8b600aa71bfbc6aff3fe5c5392/68747470733a2f2f7261772e6769746875622e636f6d2f766f6f646f6f74696b69676f642f6c6f676f2e6a732f6d61737465722f6a732e706e67" width="200px" height="200px" />](https://github.com/MartinChavez/Learn-Javascript)</a>

Javascript : Test-Driven Learning
================

A project aimed to help the user master Javascript with a test-driven approach. Each unit contains an annotated tutorial on the code itself and the ability to run Unit Tests to verify the expected behavior.

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
 - Logical Assignment
 - Loops
 - Namespaces
 - Numbers
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
<a name="README">[<img src="http://www.jetbus.io/images/logo-node.png" width="50px" height="50px" />](https://nodejs.org/)</a>
<a name="README">[<img src="https://camo.githubusercontent.com/39242419c60a53e1f3cecdeecb2460acce47366f/687474703a2f2f6772756e746a732e636f6d2f696d672f6772756e742d6c6f676f2d6e6f2d776f72646d61726b2e737667" width="50px" height="50px" />](https://github.com/gruntjs/grunt)</a>
<a name="README">[<img src="https://cldup.com/0286W-2y27.png" width="50px" height="50px" />](https://karma-runner.github.io/0.12/index.html)</a>
<a name="README">[<img src="http://eclipsesource.com/blogs/wp-content/uploads/2014/03/jasmine.png" width="50px" height="50px" />](https://github.com/jasmine/jasmine)</a>
<a name="README">[<img src="https://camo.githubusercontent.com/aad5f0385a2d8524cb366a1bad62bc74e797743a/687474703a2f2f692e696d6775722e636f6d2f516d47485067632e706e67" width="50px" height="50px" />](http://bower.io/)</a>
<a name="README">[<img src="https://www.npmjs.com/static/images/npm-logo.svg" width="50px" height="50px" />](https://www.npmjs.com/)</a>

Arrays
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
```
Functions
====================
```Javascript
/*Functions take some input, executes a series of statements using the input and outputs some result*/
it('functions help write reusable code', function () {
  expect(addNumbers(1, 2)).toBe(3);
  expect(addNumbers(2, 3)).toBe(5);
  expect(addNumbers(1 + 1, 2 + 1)).toBe(5);//Parameters can also be expressions, which the function will resolve before starting
  var numberOne = 2;
  var numberTwo = 3;
  expect(addNumbers(numberOne, numberTwo)).toBe(5);//Parameters can also be variables
});

// function keyword tells the compiler that you are defining a function
function addNumbers(numberOne, numberTwo) { //The function's name follows the 'function' keyword and should indicate the function's purpose
  //Parameters are passed in a set of parentheses before the first curly brace
  return numberOne + numberTwo;
  //The return keyword works as a terminating statement and exits the function returning the value in front of it
} //The statements that will be executed should be enclosed in curly braces.

```
Anonymous Closures
====================
```Javascript
//When you create NAMESPACES, the program may still execute its private methods and variables
//It is good practice to use private methods to safely modify private data
//Anonymous Closures allow you to define public and private variables
it('Closure will allow you to make private variables and properties', function () {
  //You can achieve this by surrounding the entire set of properties and values in an immediately
  //invoked function expression
  //The local values and methods will be "closed" into the namespace
  var NAMESPACE = (function () {
    var privateArray = [1, 2, 3];
    var privateVariable = 9;
    //In order to make public properties, you can return an object
    return {
      //Since the function expression is invoked, this returned object will be handled immediately
      // to the NAMESPACE variable and become a namespace
      publicArray: function () {
        return [4, 5, 6];
      },
      publicVariable: 10 + privateVariable
    };
  })();//These parentheses indicate that the function expression should be immediately executed
  //Since privateArray and privateVariable are private, we expect them to be undefined
  expect(NAMESPACE.privateArray).toBeUndefined();
  expect(NAMESPACE.privateVariable).toBeUndefined();
  expect(NAMESPACE.publicArray()).toEqual([4, 5, 6]);
  expect(NAMESPACE.publicVariable).toBe(19);
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
