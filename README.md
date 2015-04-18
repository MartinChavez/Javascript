Learn Javascript : Test-Driven Learning
================

A project aimed to help the user master Javascipt with a test-driven approach. Each unit contains an annotated tutorial on the code itself and the ability to run Unit Tests to verify the expected behavior.

Example: Javascript Basics - Operators
====================
In this example we explain the use of Operators and Grouping Expressions

/*Operators*/
  /*Common Operators used in Javascript Language*/
  it('Addition', function () {
    expect(6+4).toBe(10);
  });
  it('Substraction', function () {
    expect(10-4).toBe(6);
  });
  it('Division', function () {
    expect(12/4).toBe(3);
  });
  /*Grouping Expressions*/
  /*PEMDAS: Parentheses, Exponents, Multiplication, Division, Addition, Subtraction. */
  it('Javascript follows PEMDAS: Order of Operations', function () {
    expect((-5 * 6) - 7 * -2).toBe(-16);
  });
