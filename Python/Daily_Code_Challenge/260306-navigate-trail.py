def navigate_trail(map):

    route = ""
    row = 0
    col = 0

    for index,line in enumerate(map):
        c = line.find("C")
        if c != -1:
         row = index
         col = c
    print(row,col)

    directions = [(-1, 0,"U"), #north
                (1, 0,"D"), #south
                (0, -1,"L"), #west
                (0, 1,"R") #east
                ]

    grid = [list(row) for row in map]
    print(grid)

    while grid[row][col] != "G":
        grid[row][col] = "-"


        for dr,dc,move in directions:
            new_r,new_c = row + dr,col+dc

            if 0<= new_r < len(grid) and 0 <= new_c < len(grid[0]):

                if grid[new_r][new_c] == "T" or grid[new_r][new_c] == "G":
                    row,col = new_r,new_c
                    route += move
                    break

    print(route)
    return route



navigate_trail(["-----", "--TTG", "--T--", "--T--", "CTT--"])

'''
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
Passed:1. navigate_trail(["-CT--", "--T--", "--TT-", "---T-", "---G-"]) should return "RDDRDD".
Passed:2. navigate_trail(["-----", "--TTG", "--T--", "--T--", "CTT--"]) should return "RRUUURR".
Passed:3. navigate_trail(["-C----", "TT----", "T-----", "TTTTT-", "----G-"]) should return "DLDDRRRRD".
Passed:4. navigate_trail(["--------", "-CTTT---", "----T---", "---GT---", "--------"]) should return "RRRDDL".
Passed:5. navigate_trail(["TTTTTTT-", "T-----T-", "T-----T-", "TTTT--TG", "---C----"]) should return "ULLLUUURRRRRRDDDR".

'''