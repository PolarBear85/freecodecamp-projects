function buildMatrix(rows, cols) {

const outerArray = Array.from({length:rows})

const matrix = outerArray.map((item) => {
  return Array.from({length:cols}).fill(0)
})

return matrix
}

buildMatrix(9, 1)

/*
Matrix Builder
Given two integers (a number of rows and a number of columns), return a matrix (an array of arrays) filled with zeros (0) of the given size.

For example, given 2 and 3, return:

[
  [0, 0, 0],
  [0, 0, 0]
]

*/