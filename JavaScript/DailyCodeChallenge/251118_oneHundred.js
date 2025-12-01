function oneHundred(chars) {
  const repeatNum = Math.ceil(100/chars.length)
  const returnString = chars.repeat(repeatNum)
  console.log(returnString)
  return returnString.substring(0,100)

}


oneHundred("One hundred ")

/*
100 Characters
Welcome to the 100th Daily Coding Challenge!

Given a string, repeat its characters until the result is exactly 100 characters long. If your repetitions go over 100 characters, trim the extra so it's exactly 100.

Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Passed:1. oneHundred("One hundred ") should return "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One ".
Passed:2. oneHundred("freeCodeCamp ") should return "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC".
Passed:3. oneHundred("daily challenges ") should return "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge".
Passed:4. oneHundred("!") should return "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!".

*/
