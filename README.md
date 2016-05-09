<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/martinbucket/JS.png" width="200px" height="200px" />](https://github.com/MartinChavez/Learn-Javascript)</a>

Javascript : Test-Driven Learning
================

This project is aimed to help the user further study Javascript with a test-driven approach. Each unit contains an annotated tutorial and a platform where you can test your understanding of the topic.

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
 - Functional Javascript (new)
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
  /* An array is a data structure with automatically indexed positions*/
  it('Arrays can be accessed by indices', function () {
    //The brackets indicate to the compiler to make an array and to fill it with
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
/*Functions take some input, then execute a series of statements using the input, and outputs a result*/
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
Numbers
====================
```Javascript
it('JavaScript uses binary floating point values to handle all of its decimal based operations', function () {
  expect(0.1 + 0.2).toBe(0.30000000000000004);
});
it('You can use the toFixed() method to select the amount of decimal places to display', function () {
  expect((0.1 + 0.2).toFixed(1)).toBe('0.3');
});
it('toFixed() method will round to the last indicated position', function () {
  //0.18 + 0.28 = 0.46
  expect((0.18 + 0.28).toFixed(1)).toBe('0.5');
});
it('parseFloat() turns strings with decimals into numbers', function () {
  expect(parseFloat((0.18 + 0.28).toFixed(1))).toBe(0.5);
});
it('parseInt() looks for the first available integer at the front of a string', function () {
  expect(parseInt("55")).toBe(55);
  expect(parseInt("55 is a great number")).toBe(55);
});
it('if parseInt() does not find an acceptable value at the beginning of a string, it will return a NaN', function () {
  expect(parseInt("A great number, 55")).toBeNaN();
});
it('parseInt() will trim off any decimals that may exist, without rounding', function () {
  expect(parseInt("5.78")).toBe(5);
});
it('parseInt() will accept octal,hexadecimal and decimal values potentially creating undesired results', function () {
  //"021" is read as an octal value(base 8) and converts it to decimal
  expect(parseInt("021")).toBe(17);//This is fixed on ECMAScript5
});
it('you can use a radix value to ensure correct parsing', function () {
  //parseInt will accept any radix value from 2-36 for selecting the Base for the result
  expect(parseInt("021", 10)).toBe(21);
});
```


Anonymous Closures
====================
```Javascript
//When you create NAMESPACES, the program may still execute its private methods and variables
//It is good practice to use private methods to safely modify private data
//Anonymous Closures allow you to define public and private variables
it('Closures will allow you to make private variables and properties', function () {
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
Prototypes
====================
```Javascript
/*Class :  Set of Objects that inherit properties from the same prototype*/

  it('You can create Constructors that allow to set up inheritance while also assigning specific property values', function () {
    //Capitalizing this function's name distinguishes it as a maker of an entire "Class" of objects
    function Person (firstName, lastName ,age){
      //'this' keyword inside a constructor will automatically refer to the new instance of the class that is being made
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    //'new' keyword produces a new Object of the specified class
    var martinPerson = new Person("Martin", "Chavez", 27);

    expect(martinPerson.firstName).toBe("Martin");
    expect(martinPerson.lastName).toBe("Chavez");
    expect(martinPerson.age).toBe(27);
  });

  it('You can assign a prototype to a constructor', function () {
    function Person (firstName, lastName ,age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    //Setting a constructor prototype property allows the instances to access these properties
    Person.prototype = {
      address: "House 123"
    };
    var martinPerson = new Person("Martin", "Chavez", 27); //There is no need to define the address for each person
    expect(martinPerson.address).toBe("House 123");

  });
  it('You can modify the message functions in a prototype to use the data values in the calling instance', function () {
    function Person (firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
    }

    Person.prototype = {
      //'this' keyword searches for the particular Object(Person) that called the inherited function and retrieves the data from it
      fullName: function() { return(this.firstName + " " + this.lastName); }
    };
    var martinPerson = new Person("Martin", "Chavez");

    expect(martinPerson.fullName()).toBe("Martin Chavez");
  });

  it('You can use prototype chaining to reuse functionality', function () {
    function Person (firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
      this.blackHair = true;
    }

    function Baby(firstName, lastName){
      //You can call the Person constructor within the Baby constructor
      Person.call(this,firstName, lastName);
      // We need to add a reference to this Object constructor, otherwise it will use the Person constructor
      this.constructor = Baby;
    }

    // By setting a parent object as a constructors prototype, objects build with that construct gain access to
    // all the methods on that object, including the methods on its constructor prototype.
    Baby.prototype = new Person();

    // You can also add specific methods to this prototype
    Baby.prototype.cry = function(){
      this.isCrying = true;
    };

    var baby = new Baby("Martin", "Chavez");
    baby.cry();

    // Property from the Baby object
    expect(baby.isCrying).toBeTruthy();
    expect(baby.firstName).toBe("Martin");
    expect(baby.lastName).toBe("Chavez");
    expect(baby.constructor).toBe(Baby);
    // Property from the Person object
    expect(baby.blackHair).toBe(true);
  });
```

Install (Works on any platform)
====================
```Terminal
npm install --global npm@latest (if you don't have it already)
npm install --global yo bower grunt-cli
cd LearnJavascript
npm install
bower install
```

Run the Tests
====================
```Javascript
grunt test
```
[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/Run+Tests.png"  />](https://github.com/MartinChavez/Learn-Javascript)

Contact
====================
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/MARTIN2.png" />](http://martinchavezaguilar.com/)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/github.png" />](https://github.com/martinchavez)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/mail.png" />](mailto:info@martinchavezaguilar.com)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/linkedin.png" />](https://www.linkedin.com/in/martinchavezaguilar)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/twitter.png" />](https://twitter.com/martinchavezag)

Continue Learning
====================
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/martinbucket/JS.png" width="50px" height="50px" />](https://github.com/MartinChavez/Learn-Javascript)</a>
<a name="README">[<img src="http://nodejs-cloud.com/img/128px/nodejs.png" width="50px" height="50px" />](https://github.com/MartinChavez/Node.js-Tutorial)</a>
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/square.png" width="50px" height="50px" />](https://github.com/MartinChavez/AngularJs-Basics)</a>
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/angularadvanced.png" width="50px" height="50px" />](https://github.com/MartinChavez/AngularJS-Advanced-Topics)</a>
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/CSHARP.png" width="50px" height="50px" />](https://github.com/MartinChavez/CSharp)</a>
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/linqblack.png" width="50px" height="50px" />](https://github.com/MartinChavez/LINQ)</a>
<a name="README">[<img src="http://precision-software.com/wp-content/uploads/2014/04/jQurery.gif" width="50px" height="50px" />](https://github.com/MartinChavez/jQueryBasics)</a>
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/htmlcss.jpg" width="65px" height="50px" />](https://github.com/MartinChavez/HTML-CSS)</a>
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/htmlcssblack.jpg" width="65px" height="50px" />](https://github.com/MartinChavez/HTML-CSS-Advanced-Topics)</a>
