/* Write a JavaScript program to sort the items of an array
*/


var numbers = [5, 2, -1, 143]

var numbers = numbers.sort(function(a, b) {
	return a - b;
});

console.log(numbers)

/* 

Step 1: define an array of numbers (or of anything)
Step 2: sort the array users the array.sort method
Step 3: pass in the compare function so that the function knows to sort in ascending order ("return a-b")
Step 4: close the function correctly 
Step 5: console log to test if the numbers are in ascending order
Step 6: return -1, 2, 5, 143