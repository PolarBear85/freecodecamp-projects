function separateLettersAndNumbers(str) {

  const regex = /[A-Za-z]+|[0-9]+/gi

  const answer = str.match(regex) ||[]



  console.log(answer.join("-"))

  return answer.join("-")
}


separateLettersAndNumbers("H3LL0W0RLD") 

/*
Letters-Numbers
Given a string containing only letters and numbers, return a new string where a hyphen (-) is inserted every time the string switches from a letter to a number, or a number to a letter.

Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Passed:1. separateLettersAndNumbers("ABC123") should return "ABC-123".
Passed:2. separateLettersAndNumbers("Route66") should return "Route-66.
Passed:3. separateLettersAndNumbers("H3LL0W0RLD") should return "H-3-LL-0-W-0-RLD".
Passed:4. separateLettersAndNumbers("a1b2c3d4") should return "a-1-b-2-c-3-d-4".

*/