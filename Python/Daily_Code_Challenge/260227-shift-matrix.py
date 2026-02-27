def shift_matrix(matrix, shift):
    rows = len(matrix)
    cols = len(matrix[0])

    

    flat_list = [
        num
        for row in matrix
        for num in row
    ]
    shift_spaces = shift % len(flat_list)
    print(len(flat_list),shift_spaces)

    print(flat_list)

    answer_list = flat_list[-shift_spaces:] + flat_list[:-shift_spaces]

    print(answer_list)

    answer_list = [answer_list[x:x+cols] for x in range(0,len(flat_list),cols)]

    print(answer_list)

    

    return answer_list

shift_matrix([[1, 2, 3], [4, 5, 6]], 1)
print("next item")
shift_matrix([[1, 2, 3], [4, 5, 6]], -1)


'''
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
Passed:1. shift_matrix([[1, 2, 3], [4, 5, 6]], 1) should return [[6, 1, 2], [3, 4, 5]].
Passed:2. shift_matrix([[1, 2, 3], [4, 5, 6]], -1) should return [[2, 3, 4], [5, 6, 1]].
Passed:3. shift_matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5) should return [[5, 6, 7], [8, 9, 1], [2, 3, 4]].
Passed:4. shift_matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], -6) should return [[7, 8, 9], [1, 2, 3], [4, 5, 6]].
Passed:5. shift_matrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 7) should return [[10, 11, 12, 13], [14, 15, 16, 1], [2, 3, 4, 5], [6, 7, 8, 9]].
Passed:6. shift_matrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], -54) should return [[7, 8, 9, 10], [11, 12, 13, 14], [15, 16, 1, 2], [3, 4, 5, 6]].

'''
