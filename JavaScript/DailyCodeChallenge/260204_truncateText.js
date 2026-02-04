function truncateText(text) {

  if (text.length <= 20) return text

  return text.slice(0,17)+"..."

}

/*
Truncate the Text
Given a string, return it as-is if it's 20 characters or shorter. If it's longer than 20 characters, truncate it to the first 17 characters and append "..." to the end of it (so it's 20 characters total) and return the result.


Tests
Passed:1. truncateText("Hello, world!") should return "Hello, world!".
Passed:2. truncateText("This string should get truncated.") should return "This string shoul...".
Passed:3. truncateText("Exactly twenty chars") should return "Exactly twenty chars".
Passed:4. truncateText(".....................") should return "....................".
*/