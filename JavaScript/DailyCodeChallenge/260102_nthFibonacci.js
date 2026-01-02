function nthFibonacci(n) {

  const fiboArr = []
  let nextNum = 1
  let thisNum = 0
  let temp

  while (fiboArr.length < n) {
    fiboArr.push(thisNum);
    [thisNum,nextNum] = [nextNum,thisNum+nextNum];

  }

console.log(fiboArr)
  return fiboArr[n-1];
}

/*
Nth Fibonacci Number
Given an integer n, return the nth number in the fibonacci sequence.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.


Tests
Passed:1. nthFibonacci(4) should return 2.
Passed:2. nthFibonacci(10) should return 34.
Passed:3. nthFibonacci(15) should return 377.
Passed:4. nthFibonacci(40) should return 63245986.
Passed:5. nthFibonacci(75) should return 1304969544928657.

*/