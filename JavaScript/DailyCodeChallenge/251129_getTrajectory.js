function getNextLocation(matrix) {

  matrix.forEach(line => console.log(line))

  let lastLocation = []
  let thisLocation = []

  const cols = matrix[0].length
  const rows = matrix.length
  

  for (let r = 0; r<rows; r++) {

    for (let c =0; c<cols; c++) {
      if (matrix[r][c] == 1) lastLocation = [r,c]
      if (matrix[r][c]== 2) thisLocation = [r,c]
    }
  }

  console.log(lastLocation,thisLocation)
  let dr= thisLocation[0] - lastLocation[0]


  let dc = thisLocation[1]-lastLocation[1]


  let nextR = thisLocation[0]+dr
  let nextC = thisLocation[1]+dc

  if (nextR >= rows || nextR < 0 ) {
    dr = -dr
    nextR = thisLocation[0]+dr
  }

  if (nextC >= cols || nextC < 0 ) {
    dc = -dc
    nextC = thisLocation[1]+dc

  }


  const next = [nextR,nextC]
  console.log(next)


  return next

}


getNextLocation([[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]])


/*
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

    Waiting: 1. getNextLocation([[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]]) should return [2, 3].
    Waiting: 2. getNextLocation([[0,0,0,0], [0,0,1,0], [0,2,0,0], [0,0,0,0]]) should return [3, 0].
    Waiting: 3. getNextLocation([[0,2,0,0], [1,0,0,0], [0,0,0,0], [0,0,0,0]]) should return [1, 2].
    Waiting: 4. getNextLocation([[0,0,0,0], [0,0,0,0], [2,0,0,0], [0,1,0,0]]) should return [1, 1].
    Waiting: 5. getNextLocation([[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]]) should return [2, 2]

*/