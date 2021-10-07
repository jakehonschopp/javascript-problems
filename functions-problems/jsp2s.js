//Write a javascript function that accepts a string as a parameter and 
//returns the number of vowels in that string

function findNumberOfVowels(mySentence) {
  const vowelList = ["a", "e", "i", "o", "u"];
  let currentVowelCount = 0; 
  const arrayOfLetters = mySentence.toLowerCase().split(""); 
 
  for(let x = 0; x < arrayOfLetters.length; x++) {
    if (vowelList.includes(arrayOfLetters[x])) {
      currentVowelCount += 1; 
    }
  }
  return currentVowelCount; 
}

console.log(findNumberOfVowels("The big brown bear climbed up the tree")); 

/* Step 1: define a function that accepts a parameter as a string
   Step 2: split the string into individual letters
   step 3: definte what a vowel is so the computer knows, using an array
   step 4: Define a variable recognizing the current vowel count, and set it equal to 0.
   Step 5: Make sure to turn the string (or array of letters,  at this point) lowercase, so it will match with the 
   vowelList.
   Step 6: Begin to loop through the array of letters
   Step 7: Increase the currentVowelCount every time you encounter a vowel
   Step 8: return the currentVowelCount after you are done looping through every letter
   Step 9: console log the number of vowels so you know  you did the problem correctly (Answer is 11)
   
*/ 