def build_matrix(rows, cols):

    matrix = [[0]*cols for row in range(rows)]

    print(matrix)

    return matrix

build_matrix(2, 3)

'''
Matrix Builder

Given two integers (a number of rows and a number of columns), return a matrix (an array of arrays) filled with zeros (0) of the given size.

For example, given 2 and 3, return:

[
  [0, 0, 0],
  [0, 0, 0]
]

Tests

    Passed: 1. build_matrix(2, 3) should return [[0, 0, 0], [0, 0, 0]].
    Passed: 2. build_matrix(3, 2) should return [[0, 0], [0, 0], [0, 0]].
    Passed: 3. build_matrix(4, 3) should return [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]].
    Passed: 4. build_matrix(9, 1) should return [[0], [0], [0], [0], [0], [0], [0], [0], [0]].
'''