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
      fragment.appendChild(liElement);
    }
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

});
