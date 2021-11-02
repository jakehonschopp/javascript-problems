/* Problem 4: Write a javascript program that removes duplicates from an array (using case sensitivity)
*/



function getNew(arr){

    let newArr = [...new Set(arr)];

    return newArr;
}

const array = [1, 2, 3, 2, 3];

console.log(newArr);
getNew(array);

/* Step 1: define an array of numbers or otherwise
   Step 2: define a function named "called getNew" and use an arr as a parameter 
   Step 3: Define a new variable called "newArr" that will be the new array name after the duplicates are removed.
   Step 4: Since Set is a collection of new values, all of the duplicates should have been removed. 
   Step 5: Use console log to see if your new array has gotten rid of all of the duplicate numbers.
   Step 6: Should return 1, 2, 3.

*/


/* Problem 4 without using set/ Write a javascript program that removes duplicates from an array
*/


    function getUnique(array){
        let uniqueArray = [];
        
        
        for(let i = 0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    
const names = ["Gandalf", "Frodo", "Frodo", "Sam", "Gimli", "Legolas"];
const uniqueNames = getUnique(names);   
console.log(uniqueNames);  
  

/* Step 1: define an array of any kind (chose "names") using var
Step 2: Define a variable with the name of the new array, that will be without duplicates (chose "uniqueNames")
Step 3: Write the function, and choose a clear function name for readability ("getUnique")
Step 4: Store the variable uniqueArray and set it equal to "[]", as it will be defined later.
Step 5: Run a for loop, iterating for unique values in the array.
Step 6: Throughout each loop, using indexOf and push, during each iteration where the loop encounters a new value, set it equal to -1 
and add it to "uniqueArray".
Step 7: return the value of the stored variable "uniqueArray"
Step 8: Console log to see if the value is returned correctly. Should Return "Gandalf, Frodo, Sam, Gimli, Legolas" without duplicates.

*/