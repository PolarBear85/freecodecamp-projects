function isSorted(arr) {
  let isAscend = true
  let isDescend = true

  for (let x = 0; x <arr.length-1; x++) {
    if (!isAscend && !isDescend) {
      return "Not sorted"
    } else {
      if (arr[x] == arr[x+1]) {
        continue
      } else if (arr[x] > arr[x+1]) {
        isAscend = false
      } else {
        isDescend = false
      }
    }
  }
  console.log(isAscend,isDescend)

  if (isAscend && !isDescend) {
    return "Ascending"
  } else if (!isAscend && isDescend) {
    return "Descending"
  }
  
  return "Not sorted"
}
console.log(isSorted([1, 2, 3, 4, 5]))
console.log(isSorted([10, 8, 6, 4, 2]))
console.log(isSorted([1, 3, 2, 4, 5]))
console.log(isSorted([12.3, 23.4, 34.5, 45.6, 56.7, 67.8, 78.9]))
console.log(isSorted([0.4, 0.5, 0.3]))

/*
Sorted Array?
Given an array of numbers, determine if the numbers are sorted in ascending order, descending order, or neither.

If the given array is:

In ascending order (lowest to highest), return "Ascending".
In descending order (highest to lowest), return "Descending".
Not sorted in ascending or descending order, return "Not sorted".
Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Waiting:1. isSorted([1, 2, 3, 4, 5]) should return "Ascending".
Waiting:2. isSorted([10, 8, 6, 4, 2]) should return "Descending".
Waiting:3. isSorted([1, 3, 2, 4, 5]) should return "Not sorted".
Waiting:4. isSorted([3.14, 2.71, 1.61, 0.57]) should return "Descending".
Waiting:5. isSorted([12.3, 23.4, 34.5, 45.6, 56.7, 67.8, 78.9]) should return "Ascending".
Waiting:6. isSorted([0.4, 0.5, 0.3]) should return "Not sorted".

*/