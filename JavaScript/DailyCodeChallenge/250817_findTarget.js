function findTarget(arr, target) {

  for (let x = 0; x<arr.length-1; x++) {
    for (let y = x+1; y <arr.length; y++){
      if ((arr[x]+arr[y])==target) {
        return [x,y]
      }
    }
  }


  return  "Target not found";
}


console.log(findTarget([1, 3, 5, 6, 7, 8], 15))

/*
Targeted Sum

Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.

    The returned array should have the indices in ascending order.

Tests

    Passed: 1. findTarget([2, 7, 11, 15], 9) should return [0, 1].
    Passed: 2. findTarget([3, 2, 4, 5], 6) should return [1, 2].
    Passed: 3. findTarget([1, 3, 5, 6, 7, 8], 15) should return [4, 5].
    Passed: 4. findTarget([1, 3, 5, 7], 14) should return "Target not found".

*/