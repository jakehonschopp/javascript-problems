/* Problem 2: Write a javascript function to sum the values of an array
*/

const arr = [10, 23, 88, 7]; 

function addArray(arr) {
  if (arr.length === 1)
    return arr[0]; 
  return arr[0] + addArray(arr.slice(1));
}

console.log(addArray(arr)); 

/* 
Step 1: Define an array variable name (arr)
Step 2: Write your function name to clearly describe what it will be doing
(addArray)
Step 3: Describe your base case, meaning if the array is only one number, 
return that number. 
Step 4: Otherwise return that first number + the rest of the numbers in the array. 
Use arr.slice(1) to do this, as the first part of the equation already returns the first
number in the array, and using slice, can add the rest of the numbers, starting with the
second number, or the (1) spot in the array. 
Step 5: console log your function to see if you get the correct result.
Step 6: Should return 128. 
*/ 