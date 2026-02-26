function findDifferences(arr) {


  const result = []

  for (let x = 0; x<arr.length-1; x++){
    result.push(arr[x+1]-arr[x])
  }

  result.push(0)
  console.log(result)
  return result
}


findDifferences([1, 2, 5, 12, 34, -15, -1, 41, 113, -222, -99, -40, 10, -18, -6, -2, -1])

/*
Sequential Difference
Given an array of numbers, return a new array containing the value needed to get from each number to the next number.

For the last number, use 0 since there is no next number.
For example, given [1, 2, 4, 7], return [1, 2, 3, 0].

Tests
Passed:1. findDifferences([1, 2, 4, 7]) should return [1, 2, 3, 0].
Passed:2. findDifferences([10, 15, 19, 22, 24, 25]) should return [5, 4, 3, 2, 1, 0].
Passed:3. findDifferences([25, 20, 16, 13, 11, 10]) should return [-5, -4, -3, -2, -1, 0].
Passed:4. findDifferences([0, 1, 2, 2, 3, 3, 4, 5]) should return [ 1, 1, 0, 1, 0, 1, 1, 0 ].
Passed:5. findDifferences([1, 2, 5, 12, 34, -15, -1, 41, 113, -222, -99, -40, 10, -18, -6, -2, -1]) should return [1, 3, 7, 22, -49, 14, 42, 72, -335, 123, 59, 50, -28, 12, 4, 1, 0].

*/