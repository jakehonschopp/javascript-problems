/* Problem 5: Write a JavaScript function to sort the following array of objects by title value.
*/

const library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

   function compareTitles (a, b) {
   	if(a.title < b.title)
   		return -1
   	if(b.title < a.title)
   		return 1
   	return 0
   }; 

  console.log(library.sort(compareTitles));  

  /* 
  Step 1: Define a variable to describe your object (library)
  Step 2: Use example object of books and their titles
  Step 3: Create a function and a function name that is clear (compareTitles)
  Step 4: The function will compare one title with the next, and will decide a 
  spot to put the title once the value is decided. 
  Step 5: Iterate through the whole array of values. 
  Step 6: Console log to see if your function works properly. 
  Step 7: Using sort alongside console log, should return the titles in alphabetical 
  order. "Mockingjay", "The Road Ahead", and then "Walter Isaacson". 

 */ 