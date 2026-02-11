function rotate(matrix) {

  const turned = matrix[0].map((val, index) => {
    console.log(val,index)
    return matrix.map(row => row[index]).reverse()
    })

  console.log(turned)
  return turned;
}


rotate([[1, 2], [3, 4]])

/*
Matrix Rotate
Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it. For instance, given [[1, 2], [3, 4]], which looks like this:

1	2
3	4
You should return [[3, 1], [4, 2]], which looks like this:

3	1
4	2

Tests
Passed:1. rotate([[1]]) should return [[1]].
Passed:2. rotate([[1, 2], [3, 4]]) should return [[3, 1], [4, 2]].
Passed:3. rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) should return [[7, 4, 1], [8, 5, 2], [9, 6, 3]].
Passed:4. rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]]) should return [[0, 1, 0], [0, 0, 1], [0, 1, 0]].
*/