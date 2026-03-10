function insertIntoArray(arr, value, index) {
  console.log(arr.toSpliced(index,0,value))
  return arr.toSpliced(index,0,value)

}

insertIntoArray([0, 1, 1, 2, 3, 8, 13], 5, 5)

/*
Array Insertion
Given an array, a value to insert into the array, and an index to insert the value at, return a new array with the value inserted at the specified index.

Tests
Passed:1. insertIntoArray([2, 4, 8, 10], 6, 2) should return [2, 4, 6, 8, 10].
Passed:2. insertIntoArray(["the", "quick", "fox"], "brown", 2) should return ["the", "quick", "brown", "fox"].
Passed:3. insertIntoArray([], 0, 0) should return [0].
Passed:4. insertIntoArray([0, 1, 1, 2, 3, 8, 13], 5, 5) should return [0, 1, 1, 2, 3, 5, 8, 13].
*/
