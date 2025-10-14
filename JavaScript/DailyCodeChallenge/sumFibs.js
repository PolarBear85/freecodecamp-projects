function sumFibs (number) {

  let first = 0
  let second = 1
  let sum = 0
  const fibArr = [first,second]
  let runTotal = 1

  while (second <number) {

   sum = first + second;

    if (sum > number) {
      break
    }
   (sum%2)=== 0 ? undefined:fibArr.push(sum);
   (sum%2)=== 0 ? undefined:runTotal += sum;
    
    first = second;
    second = sum;

  }
console.log(fibArr)
console.log(runTotal)

return runTotal

}


sumFibs(75025)

/*
Build an Odd Fibonacci Sum Calculator
In this lab you will build an odd Fibonacci sum calculator that computes the sum of all odd Fibonacci numbers that are less than or equal to a given positive integer.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories

You should have a sumFibs function that accepts a number as an argument.
The sumFibs function should return the sum of all odd Fibonacci numbers that are less than or equal to the given number.
The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two previous ones.
Only the odd Fibonacci numbers should be added to the sum.
*/