/* Problem 1: Define an object, and then create a javascript program to delete a property in that object
*/


const goat = {
  firstName:"Lamar",
  lastName:"Jackson",
  age:24,
  eyeColor:"brown",
  heisman:"2016",
  MVP:"2019"
};



function eraseProperty (object, property) {
  delete object[property]; 
  return object; 
}



console.log(eraseProperty(goat, "heisman"));


/* Possibility 1 - 
Step 1: Define an object (goat)
Step 2: Set the criteria for the object with key value pairs
Step 3: Write a function, called "eraseProperty" with object and property inside of parentheses
Step 4: Use the delete method to delete one property from said object
Step 5: return the object with the deletion
Step 6: Console log to see if your deleted property is still there or not
Step 7: Should return "heisman is not defined"
*/








/* Possibility 2 - 
Step 1: define an object (myObject)
Step 2: Define the values in the key value pairs and write syntax correctly
Step 3: Use object destructuring and change create a new object with said destructuring
Step 4: Pick one of your objects to delete or destructure, chose "scary" and set it equal to original object
Step 5: Console log the name of your new object to see if it has been deleted
Step 6: Should return the object without the "scary: yes" object pair.
*/




const myObject = {"color": "blue", "name": "sully", "scary": "yes"};
const { scary, ...newObject } = myObject;
console.log(newObject);