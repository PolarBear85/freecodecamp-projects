def invert_matrix(matrix):

    swap_set = {}

    first = matrix[0][0]
    second =""

    rows = len(matrix)
    cols = len(matrix[0])

    for r in range(rows):
        for c in range(cols):
            if matrix[r][c] != first:
                second = matrix[r][c]
                swap_set[first] = second
                swap_set[second] = first
                break
            else:
                continue

    answer = [[swap_set[item] for item in row] for row in matrix] 


    print(swap_set)
    print(answer)

    return answer


invert_matrix([["a", "b"], ["a", "a"]])


'''
Inverted Matrix
Given a matrix (an array of arrays) filled with two distinct values, return a new matrix where all occurrences of one value are swapped with the other.

For example, given:

[
  ["a", "b"],
  ["a", "a"]
]
Return:

[
  ["b", "a"],
  ["b", "b"]
]
Tests:
Waiting:1. invert_matrix([["a", "b"], ["a", "a"]]) should return [["b", "a"], ["b", "b"]].
Waiting:2. invert_matrix([[1, 0, 1], [1, 1, 1], [0, 1, 0]]) should return [[0, 1, 0], [0, 0, 0], [1, 0, 1]].
Waiting:3. invert_matrix([["apple", "banana", "banana", "apple"], ["banana", "apple", "apple", "banana"], ["banana", "banana", "banana", "apple"]]) should return [["banana", "apple", "apple", "banana"], ["apple", "banana", "banana", "apple"], ["apple", "apple", "apple", "banana"]].
Waiting:4. invert_matrix([[6, 7, 7, 7, 6], [7, 6, 7, 6, 7], [7, 7, 6, 7, 7], [7, 6, 7, 6, 7], [6, 7, 7, 7, 6]]) should return [[7, 6, 6, 6, 7], [6, 7, 6, 7, 6], [6, 6, 7, 6, 6], [6, 7, 6, 7, 6], [7, 6, 6, 6, 7]].
Waiting:5. invert_matrix([[1.2, 2.1, 2.1, 2.1], [2.1, 1.2, 2.1, 1.2], [1.2, 1.2, 2.1, 2.1]]) should return [[2.1, 1.2, 1.2, 1.2], [1.2, 2.1, 1.2, 2.1], [2.1, 2.1, 1.2, 1.2]].
'''