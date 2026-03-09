function sumArray(numbers) {

  return numbers.reduce((accumulator,number) => {
    return accumulator + number
  })

}

/*
Array Sum
Given an array of numbers, return the sum of all the numbers.

Tests
Passed:1. sumArray([1, 2, 3, 4, 5]) should return 15.
Passed:2. sumArray([42]) should return 42.
Passed:3. sumArray([5, -2, 7, -3]) should return 7.
Passed:4. sumArray([203, 145, -129, 6293, 523, -919, 845, 2434]) should return 9395.
Passed:5. sumArray([0, 0]) should return 0.
*/