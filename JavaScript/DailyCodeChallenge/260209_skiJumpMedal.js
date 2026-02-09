function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {

  const totalScore = distancePoints + stylePoints+windComp+kPointBonus
  console.log(totalScore)

  const currentScores = [165.5,172.0,158.0,180,169.5,175.0,162.0,170.0]

  console.log(currentScores)
  let pos = 0

  for (let x = 0; x < currentScores.length; x++) {
    if (currentScores[x] > totalScore) {
      pos++
    }
  }
  console.log(currentScores)

  if (pos === 0) return "Gold"
  if (pos === 1) return "Silver"
  if (pos === 2) return "Bronze"
  return "No Medal"


}

console.log(skiJumpMedal(119.0, 50.0, 1.0, 4.0))


/*
2026 Winter Games Day 4: Ski Jumping
Given distance points, style points, a wind compensation value, and K-point bonus value, calculate your score for the ski jump and determine if you won a medal or not.

Your score is calculated by summing the above four values.
The current total scores of the other jumpers are:

165.5
172.0
158.0
180.0
169.5
175.0
162.0
170.0
If your score is the best, return "Gold"
If it's second best, return "Silver"
If it's third best, return "Bronze"
Otherwise, return "No Medal"

Tests
Passed:1. skiJumpMedal(125.0, 58.0, 0.0, 6.0) should return "Gold".
Passed:2. skiJumpMedal(119.0, 50.0, 1.0, 4.0) should return "Bronze".
Passed:3. skiJumpMedal(122.0, 52.0, -1.0, 4.0) should return "Silver".
Passed:4. skiJumpMedal(118.0, 50.5, -1.5, 4.0) should return "No Medal".
Passed:5. skiJumpMedal(124.0, 50.5, 2.0, 5.0) should return "Gold".
Passed:6. skiJumpMedal(119.0, 49.5, 0.0, 3.0) should return "No Medal".
*/