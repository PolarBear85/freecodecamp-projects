def find_word(matrix, word):

    rows = len(matrix)
    cols = len(matrix[0])
    reversed_word = word[::-1]
    print(reversed_word)
    length = len(word)-1

    for row in range(rows):
        row_str = "".join(matrix[row])
        if word in row_str:
            start_col = row_str.index(word)
            return [[row,start_col],[row,start_col+length]]
        elif reversed_word in row_str:
            start_col = row_str.index(reversed_word)
            return [[row,start_col+length],[row,start_col]]
        else:
            continue


    for col in range(cols):
        col_str = "".join([row[col] for row in matrix])[::-1]

        print(col_str)
        if word in col_str:

            start_row = col_str.index(word)
            
            return [[start_row+length,col],[start_row,col]]
        elif reversed_word in col_str:
            start_row = col_str.index(reversed_word)
            return [[start_row,col],[start_row+length,col]]
        else:
            continue

    return matrix


print(
    find_word([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish")
)

'''
Word Search
Given a matrix (an array of arrays) of single letters and a word to find, return the start and end indices of the word in the matrix.

The given matrix will be filled with all lowercase letters (a-z).
The word to find will always be in the matrix exactly once.
The word to find will always be in a straight line in one of these directions:
left to right
right to left
top to bottom
bottom to top
For example, given the matrix:

[
  ["a", "c", "t"],
  ["t", "a", "t"],
  ["c", "t", "c"]
]
And the word "cat", return:

[[0, 1], [2, 1]]
Where [0, 1] are the indices for the "c" (start of the word), and [2, 1] are the indices for the "t" (end of the word).

Tests
Passed:1. find_word([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat") should return [[0, 1], [2, 1]].
Passed:2. find_word([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog") should return [[0, 0], [0, 2]].
Passed:3. find_word([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish") should return [[3, 3], [0, 3]].
Passed:4. find_word([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox") should return [[1, 3], [1, 1]].
'''