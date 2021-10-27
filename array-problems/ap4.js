/* Problem 4: Write a javascript program that removes duplicates from an array (using case sensitivity)
*/



function getNew(arr){

    let newArr = [...new Set(arr)];

    console.log(newArr);
}

const array = [1, 2, 3, 2, 3];


getNew(array);

/* Step 1: define an array of numbers or otherwise
   Step 2: define a function named "called getNew" and use an arr as a parameter 
   Step 3: Define a new variable called "newArr" that will be the new array name after the duplicates are removed.
   Step 4: Use console log to see if your new array has gotten rid of all of the duplicate numbers.
   Step 5: Should return 1, 2, 3.

*/