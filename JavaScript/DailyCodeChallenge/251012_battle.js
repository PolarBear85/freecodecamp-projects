function battle(ourTeam, opponent) {

  const ourArmy = ourTeam.split(" ")
  const theirArmy = opponent.split(" ")
  const ourWins = []
  const theirWins = []

  for (let x = 0; x<ourArmy.length; x++) {
    const ourBattle = ourArmy[x].split("")
    const theirBattle = theirArmy[x].split("")
    console.log(ourBattle)

    const ourScore = ourBattle.reduce((accumulator,char) => {
      const charValue = parseInt(char,36)-9
     return (char == char.toUpperCase())? accumulator + charValue*2 : accumulator + charValue 
      
    },0)

    const theirScore = theirBattle.reduce((accumulator,char) => {
      const charValue = parseInt(char,36)-9
     return (char == char.toUpperCase())? accumulator + charValue*2 : accumulator + charValue 
      
    },0)

  console.log(ourScore,theirScore)
    if (ourScore > theirScore) {
      ourWins.push("True")
    } else if (ourScore < theirScore) {
      theirWins.push("True")
    }
  }

  console.log(ourWins,theirWins)

  switch(true) {
    case ourWins.length > theirWins.length: return "We win"
    case ourWins.length < theirWins.length: return "We lose"
    case ourWins.length == theirWins.length: return "Draw"
  }
}


battle("We must never surrender", "Our team must win")


/*
Battle of Words
Given two sentences representing your team and an opposing team, where each word from your team battles the corresponding word from the opposing team, determine which team wins using the following rules:

The given sentences will always contain the same number of words.
Words are separated by a single space and will only contain letters.
The value of each word is the sum of its letters.
Letters a to z correspond to the values 1 through 26. For example, a is 1, and z is 26.
A capital letter doubles the value of the letter. For example, A is 2, and Z is 52.
Words battle in order: the first word of your team battles the first word of the opposing team, and so on.
A word wins if its value is greater than the opposing word's value.
The team with more winning words is the winner.
Return "We win" if your team is the winner, "We lose" if your team loses, and "Draw" if both teams have the same number of wins.

Tests
Passed:1. battle("hello world", "hello word") should return "We win".
Passed:2. battle("Hello world", "hello world") should return "We win".
Passed:3. battle("lorem ipsum", "kitty ipsum") should return "We lose".
Passed:4. battle("hello world", "world hello") should return "Draw".
Passed:5. battle("git checkout", "git switch") should return "We win".
Passed:6. battle("Cheeseburger with fries", "Cheeseburger with Fries") should return "We lose".
Passed:7. battle("We must never surrender", "Our team must win") should return "Draw".
*/