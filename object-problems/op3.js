/* Problem 3: Create an object with three items in it, then write a
 JavaScript function that accepts an object and tells you the length 
 (tells you how many items are in it) of the object.
*/
 
 const dreamHouse = {
    built : 1970,
    floors : "hardwood",
    yard : "huge",
    neighbors: "optional"
};


function tellMeObjectLength(obj) {
    return Object.keys(obj).length;
}


console.log(tellMeObjectLength(dreamHouse));

/* 

Step 1: Create a variable (dreamHouse)
Step 2: create an object to define the variable and give it key value pairs
Step 3: Use correct syntax with regard to numbers and strings
Step 4: Describe a javascript function and what you want it to do "tellMeObjectLength"
Step 5: return using object.keys.(a).length method because it is the most simple
Step 6: console log and call back the function name, as well as the variable name
Step 7: returns 4
*/ 