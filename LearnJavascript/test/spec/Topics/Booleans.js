'use strict';

describe('Booleans', function () {

  /*Boolean : Represents one of two values: true or false.
  * We will demonstrate the use of this type with different operators and comparators.
  * */

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

  /*Comparators*/
  /*Common Number Comparators used in Javascript Syntax*/
  it('Greater than', function () {
    expect(6>4).toBe(true);
  });
  it('Less than', function () {
    expect(6<4).toBe(false);
  });
  it('Equals', function () {
    expect(4==4).toBe(true);
  });
  it('Not Equals', function () {
    expect(4!=5).toBe(true);
  });
});
