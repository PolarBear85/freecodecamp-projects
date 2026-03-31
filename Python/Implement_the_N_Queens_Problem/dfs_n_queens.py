def dfs_n_queens(n):
    if n < 1: return []



    def place_queens(i,cols,left_diag,right_diag,cur,result):
        print("Placing queens")

        n = len(cols)

        print("Place check:", i,n)
        if i == n:
            result.append(cur[:])
            return

        for j in range(n):
            if cols[j] or right_diag[i+j] or left_diag[i-j+n-1]:
                continue
            cols[j] = 1
            right_diag[i+j] = 1
            left_diag[i-j+n-1] = 1
            cur.append(j+1)

            place_queens(i+1,cols,left_diag,right_diag,cur,result)

            cur.pop()
            cols[j] = 0
            right_diag[i+j] = 0
            left_diag[i-j+n-1] = 0


    cols = [0]*n
    print("Cols: ", cols)
    right_diag= [0]*(2*n)
    print("Right: ",right_diag)
    left_diag = [0]*(2*n)
    print("Left: ",left_diag)
    cur = []
    print("Current:", cur)
    result = []
    print("Result:", result)

    place_queens(0,cols,left_diag,right_diag,cur,result)

    print(result)
    return result




dfs_n_queens(4)


'''
Implement the N-Queens Algorithm
The N-Queens problem asks you to place N queens on an N×N chessboard so that no two queens attack each other (no two share a row, column, or diagonal).

For example, if there is a 4x4 board, one valid arrangement is:

[1, 3, 0, 2]
That means that in row 0, the queen is placed in column 1; in row 1, the queen is placed in column 3; in row 2, the queen is placed in column 0; and in row 3, the queen is placed in column 2.

Visually, this arrangement looks like:

. Q . .
. . . Q
Q . . .
. . Q .
Where Q represents a queen and . represents an empty square.

In this lab, you will implement the N-Queens problem solver using the depth-first search approach.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named dfs_n_queens.
The function should accept exactly one argument: an integer n.
If n is less than 1, the function should return an empty list ([]).
The function should return a list of solutions; each solution is itself a list of length n, where the element at index i is the column index (0-based) of the queen in row i.
Tests:
Passed:1. You should have a function named dfs_n_queens that takes one argument.
Passed:2. If n is less than 1, the function should return an empty list.
Passed:3. The function should return a list of solutions, where each solution is a list of length n.
Failed:4. dfs_n_queens(1) should return [[0]].
Passed:5. dfs_n_queens(2) should return [].
Passed:6. dfs_n_queens(3) should return [].
Failed:7. dfs_n_queens(4) should return [[1, 3, 0, 2], [2, 0, 3, 1]].
Failed:8. dfs_n_queens(5) should return [[0, 2, 4, 1, 3], [0, 3, 1, 4, 2], [1, 3, 0, 2, 4], [1, 4, 2, 0, 3], [2, 0, 3, 1, 4], [2, 4, 1, 3, 0], [3, 0, 2, 4, 1], [3, 1, 4, 2, 0], [4, 1, 3, 0, 2], [4, 2, 0, 3, 1]].
Passed:9. len(dfs_n_queens(5)) should be 10.
Passed:10. len(dfs_n_queens(8)) should be 92.
Failed:11. dfs_n_queens should return the correct result.

'''