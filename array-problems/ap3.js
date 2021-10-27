/* Write a JavaScript program to sort the items of an array
*/


const arrayOfNumbers = [-2, 1, -1, 0, 2];

function sortNumber(arr){
    arr.sort(function(a,b){ 
        if (a < b) {
            return -1;
        }
        if(a > b) {
            return 1;
        }
        return 0;
    });
}

console.log(sortNumber(arrayOfNumbers)); 
/* 

Step 1: define an array of numbers (or of anything)
Step 2: write a function called sortNumber
Step 3: use the "sort" method and the a, b comparison so the function knows that you want to count in ascending order.
Step 4: define the cases included in the a, b comparison so that the function returns the correct order.
Step 5: console log to test if the numbers are in ascending order
Step 6: return -2, -1, 0, 1, 2

*/