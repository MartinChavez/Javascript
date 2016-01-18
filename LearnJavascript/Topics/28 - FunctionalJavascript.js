'use strict';

describe('Functional Javascript', function () {

	/* Functional Javascript */
  
	// Functional programming allows the developer to express intention
	// It allows to write complex programs by combining simple components 
	// which have a single responsibility and are easy to grasp

	it('map() goes over an array, applying a function to every element', function () {

		var numbers = [0, 1, 2];

		function convertToString(number) {
			return number.toString();
		}
		// map() builds up a new array from these values
		var stringNumbers = numbers.map(convertToString);

		expect(stringNumbers[0]).toEqual("0");
		expect(stringNumbers[1]).toEqual("1");
		expect(stringNumbers[2]).toEqual("2");
	});


	it('forEach() method executes a provided function once per array element', function () {

		var numberObjects = [];
	  
		//forEach() executes the provided callback once for each element present in the array in ascending order.
		function saveNumber(element, index, array) {
			numberObjects.push({ element: element, index: index, array: array });
		}

		["a", "b", "c"].forEach(saveNumber);

		expect(numberObjects[0].element).toEqual("a");
		expect(numberObjects[0].index).toEqual(0);
		expect(numberObjects[0].array).toEqual(["a", "b", "c"]);
	});

	it('reduce() method applies a function against an accumulator and each value of the array to reduce it to a single value', function () {

		function addNumbers(first, second) {
			return first + second;
		}

		//reduce executes the callback function once for each element present in the array, 
		//excluding holes in the array, receiving four arguments
		var totalSum = [0, 1, 2, 3].reduce(addNumbers)

		expect(totalSum).toEqual(6);
	});

	it('filter() creates a new array with all elements that pass the test implemented by the provided function', function () {

		function largerThanThree(number) {
			return number > 3;
		}

		// filter() calls a provided callback function once for each element in an array, 
		// and constructs a new array of all the values for which callback returns a true value
		var valuesLargerThanThree = [1, 2, 3, 4, 5, 6].filter(largerThanThree)

		expect(valuesLargerThanThree).toEqual([4, 5, 6]);
	});
});
