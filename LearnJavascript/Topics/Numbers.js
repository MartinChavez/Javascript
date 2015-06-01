'use strict';

describe('Numbers', function () {

  /*Numbers*/

  it('Javascript uses binary floating point values to handle all of its decimal based operations', function () {
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

  /*NaN*/
  it('You should not be checking for a number not being NaN (by itself) before numeric operations', function () {
    //The JS interpreter returns "number" for this operation
    expect(typeof NaN).toBe("number");
    //It also doesn't work for strings
    expect(isNaN("55")).toBe(false);
    //The function works when the string "NaN" or NaN value is on the variable we are looking to verify
    expect(isNaN("NaN")).toBe(true);
    expect(isNaN(NaN)).toBe(true);
  });
  it('You should use typeOf and isNaN as a best practice', function () {
    var unsureNumber = 55;
    expect(typeof unsureNumber == "number" && !isNaN(unsureNumber)).toBe(true);
    unsureNumber = "55";
    expect(typeof unsureNumber == "number" && !isNaN(unsureNumber)).toBe(false);
    unsureNumber = "NaN";
    expect(typeof unsureNumber == "number" && !isNaN(unsureNumber)).toBe(false);
    unsureNumber = NaN;
    expect(typeof unsureNumber == "number" && !isNaN(unsureNumber)).toBe(false);
  });
});
