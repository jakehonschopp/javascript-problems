/* Create an object, then write a javascript program to tell if that object contains
the specified key
*/

const footballField  = {
	surface: "turf",
	yards: 100,
	logo: "cardinal"
};

function hasKey(object, property) {
	return object.hasOwnProperty(property)
}; 

console.log(hasKey(footballField, "surface")); 
console.log(hasKey(footballField, "cheerleaders"));


/* 

Step 1: Define a variable to name your object ("footballField")
Step 2: Define the object with key value pairs
Step 3: Write your function name for clear readability 
Step 4: Using the "hasOwnProperty" method, ask the function to return
the object with the correct property and the boolean "true" or "false"
Step 5: console log your function with the correct object and property to return 
true, and any incorrect input for false.
Step 6: These console logs would return "true" and "false", respectively. 
*/ 