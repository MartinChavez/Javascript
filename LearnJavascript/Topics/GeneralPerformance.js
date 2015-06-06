'use strict';

describe('General Performance Concepts', function () {

  /*Script Execution

  - A Browser can download up to 6 components at the same time (parallel download)
  - A browser stops downloading when it encounters a script tag <script>
  - Solution
		- If the Script is not necessary for initial page load, place it at the end, just before the body tag
		- Use the 'async' attribute for script downloading
*/

  /*DOM Manipulation*/
  it('Adding individual DOM Elements is a bad practice due to reflow', function () {
    var ulDomElement = document.createElement("ul");
    var contentOfLiElements = ["1","2","3"];

    for(var index = 0; index < contentOfLiElements.length; index++){
      var liElement = document.createElement("li");
      liElement.appendChild(document.createTextNode(contentOfLiElements[index]));
      //Each time the list is appended, we access the DOM and cause an entire document reflow
      ulDomElement.appendChild(liElement);
    }
  });

  it('Use a document Fragment to insert additions all at once', function () {
    //Fragments are invisible containers that hold multiple DOM elements without being a node itself
    var ulDomElement = document.createElement("ul");
    var contentOfLiElements = ["1","2","3"];

    var fragment = document.createDocumentFragment();
    for(var index = 0; index < contentOfLiElements.length; index++){
      var liElement = document.createElement("li");
      liElement.appendChild(document.createTextNode(contentOfLiElements[index]));
      fragment.appendChild(liElement); //There is no document reflow at this point
    }
    //There is only one document reflow on this program
    ulDomElement.appendChild(fragment);
  });

  it('Declare variables as few times as possible', function () {
    //Every var keyword adds a look-up for the JavaScript parser that can be avoided with comma extensions
    var ulDomElement = document.createElement("ul"),
        contentOfLiElements = ["1","2","3"],
        fragment = document.createDocumentFragment(),
        liElement;
    //Anticipate variable needs to avoid the processor burden of creating a new var each time
    for(var index = 0; index < contentOfLiElements.length; index++){
      liElement = document.createElement("li");
      liElement.appendChild(document.createTextNode(contentOfLiElements[index]));
      fragment.appendChild(liElement);
    }
    ulDomElement.appendChild(fragment);
  });

  it('you can use time and timeEnd to measure the performance of functions in an easy manner', function () {
    //Be aware that the creation of the console.time object is time consuming and it adds to the total elapsed time
    console.time("timer");
    var times = 0;
    while(times < 100){
      times++;
    }
    console.timeEnd("timer");
  });

  it('you can use Date Objects to accurately measure performance', function () {
    //Date object immediately captures the current date and time
    var dateObject = new Date();
    expect(typeof(dateObject)).toEqual('object');//Date types are JS Objects
    //By placing a '+' unary operator in front of the Date Object, we can retrieve the value in milliseconds
    expect(typeof(+dateObject)).toEqual('number');

    var start = +new Date();
    var times = 0;
    while(times < 100){
      times++;
    }
    var end = +new Date();
    //The difference between the two values will be the amount of time that passed between the creation of both variables
    var elapsedTime = end - start;
    expect(elapsedTime).toBeLessThan(5);

  });

});
