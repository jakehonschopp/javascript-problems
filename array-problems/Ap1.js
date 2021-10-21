/*
Problem 1: Write a JavaScript function that takes in two parameters, an array and a number (n), 
and return the first n elements of that array. (Example: If I pass in an array and the number 2, 
your function returns the first 2 elements in that array.)

*/

colorArray = ["blue", "red", "purple", "green", "silver", "gold"]

var getArrayItems = function(array, num) {
    if(array === null)
      return "Input the correct array";
  
  
  if(num === null)
    return "Enter number";
  
  if(num < 0)
    return "Enter positive number"; 
  
  if(num > array.length)
    return "Number too big";
 
   return array.slice(0, num);
  }; 
    
console.log(getArrayItems(colorArray, 3));
console.log(getArrayItems(colorArray, 13));

/*

Step 1: Define an array of any kind.
Step 2: Define a javascript function that accepts an array, and a number, n, as a parameter.
Step 3: if the input array does not match the array in the function, return "Input the correct array"
Step 4: if the number entered is not a number, return "enter a number."
Step 5: if the number entered is less than 0, return "enter positive number."
Step 6: if the number entered is greater than the length of the array, return "number too big."
Step 7: Use the slice function to return the right number in the array, according to what number and array is logged to the console. 
Step 8: This first console log returns "blue", "red", "purple", as everything in it is correct.
Step 9: This console log returns "number too big", as 13 is more than the number in the array. 


*/ 