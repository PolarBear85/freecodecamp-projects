function mirror(str) {

  const mirror = str.split("").reverse().join("")
  console.log(str+mirror)

  return str+mirror;
}

mirror("The quick brown fox...")

/*
String Mirror
Given a string, return a new string that consists of the given string with a reversed copy of itself appended to the end of it.


Tests
Passed:1. mirror("freeCodeCamp") should return "freeCodeCamppmaCedoCeerf".
Passed:2. mirror("RaceCar") should return "RaceCarraCecaR".
Passed:3. mirror("helloworld") should return "helloworlddlrowolleh".
Passed:4. mirror("The quick brown fox...") should return "The quick brown fox......xof nworb kciuq ehT".
*/