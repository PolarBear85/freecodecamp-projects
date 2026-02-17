def find_landing_spot(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    
    safe_spot = [0, 0]
    safe_value = float('inf') 

    for r in range(rows):
        for c in range(cols):
            
            if matrix[r][c] == 0:
                north = matrix[r-1][c] if r > 0 else 0
                south = matrix[r+1][c] if r < rows - 1 else 0
                east = matrix[r][c+1] if c < cols - 1 else 0
                west = matrix[r][c-1] if c > 0 else 0
                
                total_danger = north + south + east + west
                
                if total_danger < safe_value:
                    safe_value = total_danger
                    safe_spot = [r, c]

    return safe_spot



find_landing_spot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]])

'''
Space Week Day 4: Landing Spot
In day four of Space Week, you are given a matrix of numbers (an array of arrays), representing potential landing spots for your rover. Find the safest landing spot based on the following rules:

Each spot in the matrix will contain a number from 0-9, inclusive.
Any 0 represents a potential landing spot.
Any number other than 0 is too dangerous to land. The higher the number, the more dangerous.
The safest spot is defined as the 0 cell whose surrounding cells (up to 4 neighbors, ignore diagonals) have the lowest total danger.
Ignore out-of-bounds neighbors (corners and edges just have fewer neighbors).
Return the indices of the safest landing spot. There will always only be one safest spot.
For instance, given:

[
  [1, 0],
  [2, 0]
]
Return [0, 1], the indices for the 0 in the first array.


Tests
Passed:1. find_landing_spot([[1, 0], [2, 0]]) should return [0, 1].
Passed:2. find_landing_spot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]) should return [1, 1].
Passed:3. find_landing_spot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]) should return [2, 2].
Passed:4. find_landing_spot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]) should return [2, 1].
'''