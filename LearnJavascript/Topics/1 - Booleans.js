'use strict';

describe('Booleans', function () {

  /*Boolean : Represents one of two values: true or false.
  * We will demonstrate the use of this Type with different operators and comparators.
  * */

  /*Operators*/
  /*Common Operators used in Javascript Language*/
  it('Addition', function () {
    expect(6+4 === 10).toBe(true);
    expect(6+4 === 11).toBe(false);
  });
  it('Subtraction', function () {
    expect(10-4 === 6).toBe(true);
    expect(10-4 === -6).toBe(false);
  });
  it('Division', function () {
    expect(12/4 === 3).toBe(true);
  });
  /*Grouping Expressions*/
  /*PEMDAS: Parentheses, Exponents, Multiplication, Division, Addition and Subtraction. */
  it('Javascript follows PEMDAS: Order of Operations', function () {
    expect((-5 * 6) - 7 * -2 === -16).toBe(true);
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
