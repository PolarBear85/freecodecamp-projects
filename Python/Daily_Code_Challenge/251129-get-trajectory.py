def get_next_location(matrix):

    rows = len(matrix)
    cols = len(matrix[0])
    print(rows,cols)

    for r in range(rows):
        for c in range(cols):
            print(matrix[r][c])
            if matrix[r][c] == 2: this_location = [r,c]
            if matrix[r][c] == 1: last_location = [r,c]

    print(this_location,last_location)

    dr = this_location[0]-last_location[0]
    dc = this_location[1]-last_location[1]
    print("JAM",dr,dc)
    
    next_r = this_location[0]+dr
    next_c = this_location[1]+dc
    print(next_r,next_c)

    if next_r >= rows or next_r <0:
        dr = -dr
        next_r = this_location[0]+dr

    if next_c >= cols or next_c < 0:
        dc = -dc
        next_c = this_location[1]+dc

    print(next_r,next_c)

    return [next_r,next_c]




get_next_location([[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]])

'''
Ball Trajectory

Today's challenge is inspired by the video game Pong, which was released November 29, 1972.

Given a matrix (array of arrays) that includes the location of the ball (2), and the previous location of the ball (1), return the matrix indices for the next location of the ball.

    The ball always moves in a straight line.
    The movement direction is determined by how the ball moved from 1 to 2.
    The edges of the matrix are considered walls. If the ball hits a:
        top or bottom wall, it bounces by reversing its vertical direction.
        left or right wall, it bounces by reversing its horizontal direction.
        corner, it bounces by reversing both directions.

Tests:

    Passed: 1. get_next_location([[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]]) should return [2, 3].
    Passed: 2. get_next_location([[0,0,0,0], [0,0,1,0], [0,2,0,0], [0,0,0,0]]) should return [3, 0].
    Passed: 3. get_next_location([[0,2,0,0], [1,0,0,0], [0,0,0,0], [0,0,0,0]]) should return [1, 2].
    Passed: 4. get_next_location([[0,0,0,0], [0,0,0,0], [2,0,0,0], [0,1,0,0]]) should return [1, 1].
    Passed: 5. get_next_location([[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]]) should return [2, 2].
'''