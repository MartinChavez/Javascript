'use strict';

describe('Switch Block', function () {

  /*Switch Block*/
  /*A conditional for multiple possibilities*/
  it('Switch keyword allows to invoke an expression based on a value', function () {
    var country = "Italy";
    var capital;

    /*The switch block contains multiple case's, where the case keyword is followed by one or more expressions*/
    /*Cases in Javascript allow execution Fall-through, which means, that once you find a matching case, it will continue executing all the cases*/
    switch(country){
      case "Mexico" : capital = "Mexico City";
      case "Germany" : capital = "Berlin";
      case "Italy" : capital = "Rome";
      case "USA" : capital = "Washington DC";
    }
    expect(capital).toBe("Washington DC");
  });

  it('Switch blocks require break to remove fall-through', function () {
    var country = "Germany";
    var capital;

    /*'break' keyword will allow us to remove the fall-through of the cases */
    switch(country){
      case "Mexico" : capital = "Mexico City"; break;
      case "Germany" : capital = "Berlin"; break;
      case "Italy" : capital = "Rome"; break;
      case "USA" : capital = "Washington DC"; break;
    }
    expect(capital).toBe("Berlin");
  });

  it('Switch blocks allows joining cases for which you want to execute the same action', function () {
    var country = "Italy";
    var currency;

    switch(country){
      case "Mexico" : currency = "Peso"; break;
      case "Germany" :
      case "Italy" : currency = "Euro"; break;
      case "USA" : currency = "Dollar"; break;
    }
    expect(currency).toBe("Euro");
  });

  it('On a Switch block, when there is no matching case, no action is executed', function () {
    var country = "Turkey";
    var currency;

    switch(country){
      case "Mexico" : currency = "Peso"; break;
      case "Germany" :
      case "Italy" : currency = "Euro"; break;
      case "USA" : currency = "Dollar"; break;
    }
    expect(currency).toBeUndefined();
  });

  it('On a Switch block, when there is no matching case, we can specify the desired action with the default keyword', function () {
    var country = "Turkey";
    var currency;

    switch(country){
      case "Mexico" : currency = "Peso"; break;
      case "Germany" :
      case "Italy" : currency = "Euro"; break;
      case "USA" : currency = "Dollar"; break;
      default : currency = "Unknown"; break;
    }
    expect(currency).toBe("Unknown");
  });

});
