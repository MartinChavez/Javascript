'use strict';

describe('Prototypes', function () {

  /*Prototypes*/
  /* Objects have properties that belong to and come from the Object's (parent of all object's) prototype*/
  /* A Prototype is a blueprint Object for the Object we are trying to create*/
  /*
  * Inheritance: Allows code reuse by sharing properties and methods in similar objects
  *
  * Object Prototype => Array Prototype, String Prototype, Number Prototype, Function Prototype
  *
  * */
  it('Properties can be functions', function () {

    var string = "String Variable"; //This string variable inherits all the properties from the String Prototype and Object Prototype

    //hasOwnProperty and constructor are both properties of Object, not String, but we can still use hasOwnProperty, this is achieved due to the prototype chain
    expect(string.hasOwnProperty('constructor')).toBe(false);
    expect(Object.constructor.prototype.hasOwnProperty('constructor')).toBe(true);
    //'charAt' is a property of the String Prototype, therefore the prototype chain stops there and does not 'query' the Object prototype for such property
    expect(string.charAt(1)).toBe('t');

  });

  /*You can add base functionality to all objects of the same type*/
  it('Adding a new function into the Strings Prototype', function () {
    //.prototype finds the prototype for all Strings values
    String.prototype.lengthPlusOne = function (){ // By adding a function to the String Prototype,it makes it inheritable by all the Strings
      return this.length+1;
    };
    //Now all strings can use this new property
    expect("String".lengthPlusOne()).toBe(7);

  });

  /*Constructors*/
  it('Using Inheritance, we can create new Objects with our existing Objects as Prototypes', function () {
    var person = { firstName: "Martin" , age: 27};

    var newPerson = Object.create(person); //The first argument of the Object.create method will be used as the prototype of the newly created Object
    //The newPerson Object inherited all of the properties from person
    expect(newPerson.firstName).toBe("Martin");
    expect(newPerson.age).toBe(27);

  });

  it('You can add new properties to an object without modifying the parent prototype', function () {
    var person = { firstName: "Martin" , age: 27};
    var newPerson = Object.create(person);
    newPerson.lastName = "Chavez";

    expect(newPerson.lastName).toBe("Chavez");
    expect(person.lastName).toBeUndefined(); //property 'lastName' does not exists on person object
  });

  it('You can verify that an object is a prototype of another object', function () {
    var person = { firstName: "Martin" , age: 27};
    var newPerson = Object.create(person);

    expect(Object.prototype.isPrototypeOf(newPerson)).toBe(true);
    expect(person.isPrototypeOf(newPerson)).toBe(true);
    //The isPrototypeOf method will look upward through the entire hierarchy (prototype chain)
    //to see whether the Object.prototype Object is a prototypical ancestor of newPerson
    expect(newPerson.isPrototypeOf(person)).toBe(false);
  });

  it('You can create generic objects and build all the inherited objects with such properties', function () {
    var person = { firstName: undefined ,  lastName: undefined , age: undefined};
    var newPerson = Object.create(person);

    newPerson.firstName = "Martin";
    newPerson.lastName = "Chavez";
    newPerson.age = 27;

    expect(newPerson.firstName).toBe("Martin");
  });

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
    // all the methods on that object, including the methods on its contractor prototype and so on
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

  /*Performance Optimizations*/

  it('You can improve the memory efficiency of the program by adding common functionality on the objects prototype', function () {
    function Person (firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
    }

    Person.prototype = {
      //By adding this array to the prototype, we don't have to create an array every time we create a Person's object
      longArray : [0,1,2,3,4,5,6,7,8,9]
    };
    var martinPerson = new Person("Martin", "Chavez");
    var corriePerson = new Person("Corrie", "McQueen");

    expect(martinPerson.longArray[8]).toBe(8);
    expect(corriePerson.longArray[8]).toBe(8);
  });

});
