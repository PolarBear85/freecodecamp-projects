function factorial(n) {

  if (n==0) return 1

  const arr = []

  for (let x= 1; x<=n; x++) {
    arr.push(x)
  }


  const answer = arr.reduce((accumulator,number) => {
    return number * accumulator
  },1)

  return answer
}

factorial(5)

/*
Factorializer

Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.

    The factorial of zero is 1.

Tests

    Passed: 1. factorial(0) should return 1.
    Passed: 2. factorial(5) should return 120.
    Passed: 3. factorial(20) should return 2432902008176640000.

    */