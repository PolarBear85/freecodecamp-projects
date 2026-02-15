function getHillRating(drop, distance, type) {

  const style = {
    "Downhill":1.2,
    "Slalom":0.9,
    "Giant Slalom":1.0
  }

  const classification = (drop/distance)*style[type]
  console.log(classification)

  if (classification <= 0.1) return "Green"
  if (classification <=0.25) return "Blue"
  return "Black"

}

getHillRating(380, 1500, "Giant Slalom")

/*
2026 Winter Games Day 10: Alpine Skiing

Given a ski hill's vertical drop, horizontal distance, and type, determine the difficulty rating of the hill.

To determine the rating:

    Calculate the steepness of the hill by taking the drop divided by the distance.
    Then, calculate the adjusted steepness based on the hill type:
        "Downhill" multiply steepness by 1.2
        "Slalom": multiply steepness by 0.9
        "Giant Slalom": multiply steepness by 1.0

Return:

    "Green" if the adjusted steepness is less than or equal to 0.1
    "Blue" if the adjusted steepness is greater than 0.1 and less than or equal to 0.25
    "Black" if the adjusted steepness is greater than 0.25

Tests

    Passed: 1. getHillRating(95, 900, "Slalom") should return "Green".
    Passed: 2. getHillRating(620, 2800, "Downhill") should return "Black".
    Passed: 3. getHillRating(420, 1680, "Giant Slalom") should return "Blue".
    Passed: 4. getHillRating(250, 3000, "Downhill") should return "Green".
    Passed: 5. getHillRating(110, 900, "Slalom") should return "Blue".
    Passed: 6. getHillRating(380, 1500, "Giant Slalom") should return "Black".
    */