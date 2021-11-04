/* Problem 1: Write a javascript function to calculate the factorial of a number
*/ 

function findFactorial(x) { 

  if (x === 0) {
    return 1;
  }
  return x * findFactorial(x-1);
         
} 
console.log(findFactorial(8));
console.log(findFactorial(0));
console.log(findFactorial(10)); 


/* 
Step 1: name your javascript function something clear (findFactorial)
Step 2: Describe the base case that if the input is 0, you must return 1 
since the factorial of 0 is 1. 
Step 3: Describe your return of the function with x * findFactorial(x-1) because
the number will need to be multiplied by each number in the factorial case, from x 
number to 1. 
E.g. 5*4*3*2*1 = 120
Step 4: Console log examples to see if your function works
Step 5: Should return 40,320, 1, and 3,628,800, respectively. 
*/ 