function getMilestone(years) {

  const milestones = {
    70:"Platinum",
    60: "Diamond",
    50: "Gold",
    40:"Ruby",
    25:"Silver",
    10:"Tin",
    5:"Wood",
    1:"Paper"
  }

  const milestoneKeys = Object.keys(milestones).reverse()
  for (let x = 0; x<milestoneKeys.length; x++) {
    if (years >= milestoneKeys[x]) return milestones[milestoneKeys[x]]
  }

  return "Newlyweds"

}


getMilestone(71)


/*
Anniversary Milestones
Given an integer representing the number of years a couple has been married, return their most recent anniversary milestone according to this chart:

Years Married	Milestone
1	"Paper"
5	"Wood"
10	"Tin"
25	"Silver"
40	"Ruby"
50	"Gold"
60	"Diamond"
70	"Platinum"
If they haven't reached the first milestone, return "Newlyweds".
Tests:
Passed:1. getMilestone(0) should return "Newlyweds".
Passed:2. getMilestone(1) should return "Paper".
Passed:3. getMilestone(8) should return "Wood".
Passed:4. getMilestone(10) should return "Tin".
Passed:5. getMilestone(26) should return "Silver".
Passed:6. getMilestone(45) should return "Ruby".
Passed:7. getMilestone(50) should return "Gold".
Passed:8. getMilestone(64) should return "Diamond".
Passed:9. getMilestone(71) should return "Platinum".
*/
