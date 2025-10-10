const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];


function golfScore(par, strokes) {



  switch (true) {
    case (strokes === 1):
      return names[0]
    case (strokes <= par-2):
      return names[1]
    case (strokes === par -1):
      return names[2]
    case (strokes === par):
      return names[3]
    case (strokes === par+1):
      return names[4]
    case (strokes === par + 2):
      return names[5]
  }
  return names[6]

}


golfScore(3, 7)
