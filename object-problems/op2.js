/* Problem 2: Create an object with first and last names, and ages, 
and write a javascript program that displays the first and last names.
*/

const arrayOfPeopleObjects = [
    {
		firstName: "Lamar",
		lastName: "Jackson",
		age: 24
    },
    {
		firstName: "Hollywood", 
		lastName: "Brown",
		age: 24
    },

    {
		firstName: "Mark", 
		lastName: "Andrews", 
		age: 26
    }, 

    {
		firstName: "JK",
		lastName: "Dobbins",
		age: 22
    }
    ]; 

const displayNames = arrayOfNames.forEach(function(person) {
    console.log(person.firstName + ' ' + person.lastName)
});

/* 

Step 1: Define a variable that will be the title of your array of names (chose "arrayOfNames")
Step 2: Define the key value pairs in your variable, using first and last names, and age
Step 3: Define your function variable (chose "displayNames")
Step 4: Decide which method to use to loop through array (chose forEach)
Step 5: Define the value "i" in your function, the value of the current array element
Step 6: console log your value i with regards to your firstName and lastName elements. 
Step 7: Check to see if it returns the correct value while logging.

*/ 
