


//MY BRUTE FORCE SOLUTION
function navigateTrail(map) {
  const route = []
  const newMap = map.map(row => {
    return row.split("")
  })
  console.log(newMap)

  let curRow
  let curCol

  newMap.forEach((col,row) => {
    const check = col.indexOf("C")
    if (check != -1) {
    curRow = row
    curCol = check
    }
  })

  let curLoc = newMap[curRow][curCol]
  while (curLoc != "G") {
  //check north
  const north = checkDirection(newMap,curRow-1,curCol)
  if (north) {
    console.log("Going north")
    newMap[curRow][curCol] = "-"
    route.push("U")
    curRow -= 1
    curLoc = newMap[curRow][curCol]

  }

  //check south
  const south = checkDirection(newMap,curRow+1,curCol)
  if (south) {
    console.log("Going south")
    newMap[curRow][curCol] = "-"
    route.push("D")
    curRow += 1
    curLoc = newMap[curRow][curCol]
  }
  //check east
  const east = checkDirection(newMap,curRow,curCol+1)
  if (east) {
    console.log("Going east")
    newMap[curRow][curCol] = "-"
    route.push("R")
    curCol += 1
    curLoc = newMap[curRow][curCol]
  }
  //check west
  const west = checkDirection(newMap,curRow,curCol-1)
  if (west) {
    console.log("going west")
    newMap[curRow][curCol] = "-"
    route.push("L")
    curCol -= 1
    curLoc = newMap[curRow][curCol]

  }
  console.log(route)
  }

  console.log(route.join(""))



  



  return route.join("");
}

function checkDirection(map,row,col) {
  if (row> map.length-1) return false
  if (row< 0) return false
  if (col > map[row].length-1) return false
  if (col < 0) return false
  if (map[row][col] == "T" || map[row][col] == "G") return true
  return false

}

navigateTrail(["-CT--", "--T--", "--TT-", "---T-", "---G-"])


/*
Trail Traversal
Given an array of strings representing your trail map, return a string of the moves needed to get to your goal.

The given strings will contain the values:

"C": Your current location
"G": Your goal
"T": Traversable parts of the trail
"-": Untraversable parts of the map
Return a string with the moves needed to follow the trail from your location to your goal where:

"R" is a move right

"D" is a move down

"L" is a move left

"U" is a move up

There will always be a single continuous trail, without any branching, from your current location to your goal.

Each trail location will have a maximum of two traversable locations touching it.

For example, given:

[
  "-CT--",
  "--T--",
  "--TT-",
  "---T-",
  "---G-"
]
Return "RDDRDD".

Tests
Passed:1. navigateTrail(["-CT--", "--T--", "--TT-", "---T-", "---G-"]) should return "RDDRDD".
Passed:2. navigateTrail(["-----", "--TTG", "--T--", "--T--", "CTT--"]) should return "RRUUURR".
Passed:3. navigateTrail(["-C----", "TT----", "T-----", "TTTTT-", "----G-"]) should return "DLDDRRRRD".
Passed:4. navigateTrail(["--------", "-CTTT---", "----T---", "---GT---", "--------"]) should return "RRRDDL".
Passed:5. navigateTrail(["TTTTTTT-", "T-----T-", "T-----T-", "TTTT--TG", "---C----"]) should return "ULLLUUURRRRRRDDDR".

*/