function shiftArray(arr, n) {

  let switchPoint = n%arr.length


  if (switchPoint <0) {
    console.log(switchPoint, arr.length)
    switchPoint = arr.length + switchPoint
  }

  const shiftArr = arr.splice(switchPoint)
  console.log(shiftArr)
  console.log(arr)

  console.log(shiftArr.concat(arr))

  return shiftArr.concat(arr)



}



shiftArray(["alpha", "bravo", "charlie"], -11)


/*
Array Shift
Given an array and an integer representing how many positions to shift the array, return the shifted array.

A positive integer shifts the array to the left.
A negative integer shifts the array to the right.
The shift wraps around the array.
For example, given [1, 2, 3] and 1, shift the array 1 to the left, returning [2, 3, 1].
*/