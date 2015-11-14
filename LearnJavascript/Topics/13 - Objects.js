'use strict';

describe('Objects', function () {

  /*Objects*/
  /* Containers of related information */
  it('You can build objects using different types', function () {

    var person = { // to allocate memory for an Object, you need the '{}'
      firstName : "Martin", //You can assign strings to properties
      age : 27// You can assign numbers to properties
    };

    expect(person.firstName).toBe("Martin");//We can access an object's property with a dot
    expect(person.age).toBe(27);//We can access all the object's properties
  });

  it('You can build objects with the Object construct', function () {

    // Use the 'new' keyword followed by a call for the Object construct
    var person = new Object();
    person.firstName = "Martin";
    person.age = 27;

    expect(person.firstName).toBe("Martin");
    expect(person.age).toBe(27);
  });

  it('You can change the property values of an object', function () {

    var person = {
      firstName : "Corrie",
      age : 27
    };
    person.firstName = "Martin"; //The dot operator allows modification of properties
    expect(person.firstName).toBe("Martin");
  });

  it('You can assign Arrays as properties values', function () {

    var programmingLanguages = ['C#','Javascript'];

    var person = {
      firstName : "Martin",
      programmingLanguages : programmingLanguages // You are assigning a reference to the array
    };
    person.programmingLanguages.push('Java');
    expect(person.programmingLanguages[2]).toBe('Java');
    expect(person.programmingLanguages.length).toBe(programmingLanguages.length); //the property and the array have the same length since we pushed the item to the same array
  });

  it('You can add new properties to objects after they have been created', function () {

    var person = {
      firstName : "Martin"
    };

    person.lastName = "Chavez"; //If the property does not exists on the object, it gets created at runtime
    expect(person.lastName).toBe("Chavez");
  });

  it('You can use brackets on Objects to access properties', function () {

    var person = {
      firstName : "Martin"
    };

    expect(person["firstName"]).toBe("Martin");
  });

  it('You can place string-based expressions in the brackets to construct specific property names', function () {

    var person = {
      name1 : "Martin",
      name2 : "Chavez",
      name3 : "Aguilar"
    };

    expect(person["name" + 1]).toBe("Martin");
    expect(person["name" + 2]).toBe("Chavez");
    expect(person["name" + 3]).toBe("Aguilar");

  });

  it('You can delete properties with the delete keyword', function () {

    var person = {
      firstName : "Martin",
      age : 27
    };

    delete person.age; //delete keyword deletes the property value and the property itself

    expect(person["age"]).toBeUndefined();
  });

});
