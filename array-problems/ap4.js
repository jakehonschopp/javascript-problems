/* Problem 4: Write a javascript program that removes duplicates from an array (using case sensitivity)
*/


var myArray = [17, 18, 18, 18, 1, 1, 2, 3];

let unique = [...new Set(myArray)];

console.log(unique);



/* Step 1: define an array of numbers or otherwise
   Step 2: define a new variable name for your new array 
   Step 3: Use the "Set" function on your array to give it new values
   Step 4: Use console log to see if your new array has gotten rid of all of the duplicate numbers.
   Step 5: Should return 17, 18, 1, 2, 3.

*/