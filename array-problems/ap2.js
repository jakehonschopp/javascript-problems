/* Write a simple JavaScript program to join all elements of the following array into a string.

Example array: var my Color=["Red", "Green", "White", "Black"];

*/

myGame = ["Cuphead", "Bioshock", "Doom", "Rocket League"];

console.log(myGame.toString()); 
console.log(myGame.join(" , ")); 
console.log(myGame.join(" + ")); 


function joinItem(arr) {
    return arr.toString();
};

console.log(joinItem(myGame)); 

/* Step 1: define an array (used "myGame")
   Step 2: console log the array and use the .toString method to combine the array into a string.
   Step 3: Now console log using the join method, adding commas for readability.
   Step 4: Now consoel log using the join method with a "+" for even more readability.
   Step 5: define the javascript function, called "joinItem" in the array
   Step 6: Return the array with the toString method. 
   Step 7: Console log again after defining the javascript program. 
   Step 8: returns any combination of "cuphead, bioshock, doom, rocket league"  in various forms. 

*/ 