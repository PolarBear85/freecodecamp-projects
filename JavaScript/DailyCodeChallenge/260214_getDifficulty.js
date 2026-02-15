function getDifficulty(track) {

  const score = track.split("")
                .reduce((accumulator,section,index,arr) => {
        if (section == "S") return accumulator
        if (section == "L" && arr[index-1]=="R") return accumulator + 15
        if (section == "R" && arr[index-1]=="L") return accumulator + 15
        return accumulator + 5
  },0)
        


  console.log(score)
  if (score <=100) return "Easy"
  if (score <=200) return "Medium"
  return "Hard"
}



getDifficulty("SLSLLSRRLSRLRL")

/*
2026 Winter Games Day 9: Skeleton

Given a string representing the curves on a skeleton track, determine the difficulty of the track.

    The given string will only consist of the letters:
        "L" for a left turn
        "R" for a right turn
        "S" for a straight segment

    Each direction change adds 15 points (an "L" followed by an "R" or vice versa).

    All other curves add 5 points each (all other "L" or "R" characters).

    Straight segments add 0 points.

The difficulty of the track is based on the total score. Return:

    "Easy" if the total is 0 - 100
    "Medium" if the total is 101-200
    "Hard" if the total is over 200

Tests

    Waiting: 1. getDifficulty("SLSLLSRRLSRLRL") should return "Easy".
    Waiting: 2. getDifficulty("LLRSLRLRSLLRLRSLRRLRSRLLS") should return "Hard".
    Waiting: 3. getDifficulty("SRRRRLSLLRLRSSRLSRL") should return "Medium".
    Waiting: 4. getDifficulty("LSRLRLSRLRLSLRSLRLLRLSRLRLRSL") should return "Hard".
    Waiting: 5. getDifficulty("SLLSSLRLSLSLRSLSSLRL") should return "Medium".
    Waiting: 6. getDifficulty("SRSLSRSLSRRSLSRSRSLSRLSRSR") should return "Easy".
    */