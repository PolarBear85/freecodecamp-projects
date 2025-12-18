function createBoard(dimensions) {

  const answerArr = []
  let currentChar = "X"


  for (let x = 0; x<dimensions[0]; x++) {
    answerArr.push([])
    for (let y = 0; y<dimensions[1]; y++) {
      answerArr[x].push(currentChar)
      currentChar = currentChar =="X" ? "O":"X"

    }
    currentChar = answerArr[x][0]=="X" ? "O":"X"
    
  }

  console.log (answerArr)

  return answerArr
}

createBoard([3,3])

/*
Checkerboard
Given an array with two numbers, the first being the number of rows and the second being the number of columns, return a matrix (an array of arrays) filled with "X" and "O" characters of the given size.

The characters should alternate like a checkerboard.
The top-left cell must always be "X".
For example, given [3, 3], return:

Example Code
[
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"]
]

Tests
Passed:1. createBoard([3, 3]) should return [["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]].
Passed:2. createBoard([6, 1]) should return [["X"], ["O"], ["X"], ["O"], ["X"], ["O"]].
Passed:3. createBoard([2, 10]) should return [["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X", "O", "X", "O", "X"]].
Passed:4. createBoard([5, 4]) should return [["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"]].

*/