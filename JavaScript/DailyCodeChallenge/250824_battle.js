function battle(myArmy, opposingArmy) {

  const myArmySize = myArmy.length
  const oppArmySize = opposingArmy.length
  let myTotal = 0
  let oppTotal = 0

  if (myArmySize > oppArmySize) return "Opponent retreated"
  if (myArmySize < oppArmySize) return "We retreated"

  for (let x = 0; x < myArmySize; x ++) {
    const myScore = characterScore(myArmy[x])
    const oppScore = characterScore(opposingArmy[x])

    if (myScore > oppScore) myTotal++
    if (oppScore > myScore) oppTotal++
  }



  console.log(myTotal,oppTotal)

  if (myTotal > oppTotal) return "We won"
  if (myTotal < oppTotal) return "We lost"
  return "It was a tie"


}

function characterScore(char) {

  const special = /[^0-9A-Za-z]/
  const nums = /[0-9]/
    if (nums.test(char)) return parseInt(char)
    if (special.test(char)) return 0
  if (char >= 'a' && char <= 'z') {
    return char.charCodeAt(0) - 96; // 'a' becomes 1
  }
  if (char >= 'A' && char <= 'Z') {
    return char.charCodeAt(0) - 38; // 'A' becomes 27
  }
 return 0 
}


battle("pizza", "salad")


/*
Character Battle
Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:

Characters a-z have a strength of 1-26, respectively.
Characters A-Z have a strength of 27-52, respectively.
Digits 0-9 have a strength of their face value.
All other characters have a value of zero.
Each character can only fight one battle.
For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:

"Opponent retreated" if your army has more characters than the opposing army.
"We retreated" if the opposing army has more characters than yours.
"We won" if your army won more battles.
"We lost" if the opposing army won more battles.
"It was a tie" if both armies won the same number of battles.

Tests
Passed:1. battle("Hello", "World") should return "We lost".
Passed:2. battle("pizza", "salad") should return "We won".
Passed:3. battle("C@T5", "D0G$") should return "We won".
Passed:4. battle("kn!ght", "orc") should return "Opponent retreated".
Passed:5. battle("PC", "Mac") should return "We retreated".
Passed:6. battle("Wizards", "Dragons") should return "It was a tie".
Passed:7. battle("Mr. Smith", "Dr. Jones") should return "It was a tie".
*/