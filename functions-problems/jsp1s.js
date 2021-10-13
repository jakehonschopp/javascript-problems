// Problem 1: Write a JavaScript function that accepts a string as a parameter and 
// find the longest word within the string. (Hint: use the “split” method and a “for” loop)

function findLongestWord(mySentence) {
  var arrayOfWords = mySentence.split(" ");
  var longestWord = arrayOfWords[0]; 
  
  for(var i = 0 ; i < arrayOfWords.length ; i++) {
    if(longestWord.length < arrayOfWords[i].length) {
      longestWord = arrayOfWords[i];
    }
  }
  
  return longestWord; 
}
console.log(findLongestWord("The big brown bear climbed up the tree")); 


  
/* step 1: define a javascript function that accepts a string as a parameter
   step 2: split the string passed in, turn it into an array of words
   step 3: define a variable called longestWord and set the initial value equal to 0. 
   step 4: start looping through our array of words in the sentence
   step 5: check if the current word in our loop is the longest so far
   step 6: continue this process until we have looped through all of the words 
   step 7: return the longest word "climbed"
*/