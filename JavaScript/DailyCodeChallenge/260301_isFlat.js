function isFlat(arr) {

  const answer =  !arr.some(item => Array.isArray(item))
  console.log(answer)
  return answer

}


isFlat([1, 2, 3, 4])
isFlat([1, [2, [3, [4, [5]]]], 6])

/*
Flattened
Given an array, determine if it is flat.

An array is flat if none of its elements are arrays.

Tests
Passed:1. isFlat([1, 2, 3, 4]) should return true.
Passed:2. isFlat([1, [2, 3], 4]) should return false.
Passed:3. isFlat([1, 0, false, true, "a", "b"]) should return true.
Passed:4. isFlat(["a", [0], "b", true]) should return false.
Passed:5. isFlat([1, [2, [3, [4, [5]]]], 6]) should return false.
*/