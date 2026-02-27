function shiftMatrix(matrix, shift) {

  const arrLength = matrix.length
  const chunkLength = matrix[0].length
  const flat = []

  matrix.forEach(item => {
    item.forEach(number => {
      flat.push(number)
    })
  })

  console.log(flat)

  const shiftNum = shift % flat.length
  let shiftSpace = Math.abs(shiftNum)
  if (shiftNum < 0) {
    
    while (shiftSpace !=0) {
      flat.push(flat.shift())
      shiftSpace-=1
    }

  } else {
    while (shiftSpace != 0) {
      flat.unshift(flat.pop())
      shiftSpace -=1
    } 
  }


  console.log(flat)

  const answerArr = []

  while (answerArr.length < arrLength) {
    const chunk = flat.splice(0,chunkLength)
    answerArr.push(chunk)
  }

  console.log(answerArr)
  



  return answerArr
}



shiftMatrix([[1, 2, 3], [4, 5, 6]], 1)
console.log("Next item")
shiftMatrix([[1, 2, 3], [4, 5, 6]], -1)
console.log("Next item")
shiftMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5)


/*
Matrix Shift
Given a matrix (array of arrays) of numbers and an integer, shift all values in the matrix by the given amount.

A positive shift moves values to the right.
A negative shift moves values to the left.
Values should wrap:

Treat the matrix as one continuous sequence of values.
When a value moves past the end of a row, it continues at the beginning of the next row.
When a value moves past the last position in the matrix, it wraps to the first position.
The same applies in reverse when shifting left.
For example, given:

[
  [1, 2, 3],
  [4, 5, 6]
]
with a shift of 1, move all the numbers to the right one:

[
  [6, 1, 2],
  [3, 4, 5]
]

Tests
Passed:1. shiftMatrix([[1, 2, 3], [4, 5, 6]], 1) should return [[6, 1, 2], [3, 4, 5]].
Passed:2. shiftMatrix([[1, 2, 3], [4, 5, 6]], -1) should return [[2, 3, 4], [5, 6, 1]].
Passed:3. shiftMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5) should return [[5, 6, 7], [8, 9, 1], [2, 3, 4]].
Passed:4. shiftMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], -6) should return [[7, 8, 9], [1, 2, 3], [4, 5, 6]].
Passed:5. shiftMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 7) should return [[10, 11, 12, 13], [14, 15, 16, 1], [2, 3, 4, 5], [6, 7, 8, 9]].
Passed:6. shiftMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], -54) should return [[7, 8, 9, 10], [11, 12, 13, 14], [15, 16, 1, 2], [3, 4, 5, 6]].
*/