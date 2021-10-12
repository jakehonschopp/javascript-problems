// Write a JavaScript program that iterates the integers from 1 to 100. 
//But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers that are multiples of both three and five print "FizzBuzz".


function fizzBuzz(){
for (i = 1; i <= 100; i++) {
  if ( i % 3 === 0 && i % 5 === 0 )
   { 
     console.log(i + " FizzBuzz")
   } 
  else if ( i % 3 === 0 )
    {
      console.log(i + " Fizz")
    }
  else if (i % 5 === 0 )
    {
      console.log(i + " Buzz")
    }
  else
    {
      console.log(i)
    }
 }
}

fizzBuzz(); 

/* Step 1: define a javascript function that clearly states what we are trying to solve
   Step 2: Define i as 1, and start looping up to 100, counting by 1. 
   Step 3: If I is evenly divisible by 3 and i is evenly divisible by 5, console log "fizzbuzz"
   Step 4: if i is evenly divisible by only 3, console log "Fizz"
   Step 5: if i is evenly divisible by only 5, console log "Buzz"
   Step 6: if i is evenly divisible by neither 5 nor 1, console log the number
   Step 7: call the function 
   Step 8: results in various numbers 1-100, if divisible by 3 printed "Fizz", if divisible by 5 printed "Buzz", 
   if divisible by both printed "FizzBuzz", otherwise regular number is printed.
*/ 