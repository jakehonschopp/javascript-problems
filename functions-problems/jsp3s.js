//Write a JavaScript function that accepts two arguments, a string and a letter
//and the function will count the number of occurrences of the specified letter within the string. 

function characterCount(mySentence, letter) {
var letterCount = 0;
for(var position = 0; position < mySentence.length; position++) {
  if (mySentence.charAt(position) == letter) {
    letterCount += 1; 
  }
}

return letterCount; 
}

console.log(characterCount("the big brown bear climbed up the tree", "o")); 

/* Step 1: define a javascript function that accepts a string and a letter as a perameter
   Step 2: define a variable called letterCount and set it equal to 0. 
   Step 3: start looping through the sentence to find how many of one character are found (the character "o")
   Step 4: if the loop finds an "o" in the sentence, increase the letter count by 1.
   Step 5: continue to loop through all of the characters in the string until you reach the last "e".
   Step 6: return the letterCount
   Step 7: return the number "1", as there is 1 "o" in the sentence "The big brown bear climbed up the tree"
   
*/
