function findLandingSpot(matrix) {
    let safeValue = Infinity
    let safeSpot = []

    const safeNumber = (row,col) => {
        if (row >= 0 && row< matrix.length) {
        if (col >= 0 && col <matrix[row].length) {
            return matrix[row][col]
        }
        }
        return 0
    }




    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
        console.log(matrix[row][col])
        if (matrix[row][col] === 0) {
            console.log("found a zero")
            
            const north = safeNumber(row-1,col)
            const south = safeNumber(row+1,col)
            const east = safeNumber(row,col+1)
            const west = safeNumber(row,col-1)
            console.log(north,south,east,west)
            const totalScore = north+south+east+west
            if (totalScore < safeValue) {
            safeValue = totalScore
            safeSpot = [row,col]
            console.log(`New safest spot is ${safeSpot}`)
            }
        }
        }
    }



    return safeSpot




}

findLandingSpot([[1, 0], [2, 0]])

/*
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
*/