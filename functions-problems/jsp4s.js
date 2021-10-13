// Write a javascript function that checks whether a string is a palindrome or not
// a palindrome is a word, phrase or sentence that reads the same forwards as backwords 

function palindromeOrNot(string) {
  const arrayValues = string.split("");
  const reverseArrayValues = arrayValues.reverse();
  const reverseString = reverseArrayValues.join("");
  if(string == reverseString) {
    console.log("It is a palindrome");
    return true; 
    }
  else {
    console.log("It is not a palindrome");
    return false;
  }
  
  
}

console.log(palindromeOrNot("racecar"));

/* Step 1: define a javascript function that accepts a string as a parameter
   Step 2: split your string into an array of letters and call it "arrayValues"
   Step 3: reverse your new array and call this new variable "reverseArrayValues"
   Step 4: join the new array into a new string, and call this "reverseString"
   Step 5: use an if else statement to see if string is equal to reverseString
   Step 6: return "true" if the string is a palindrome, and return "false" if it is not.
   Step 7: log the value of "racecar" to the console, and return "true".
*/ 