function addPunctuation(sentences) {

  const regex = /\s(?=[A-Z]+)/g

  const matches = sentences.matchAll(regex)
  const answer = sentences.replace(regex,`. `)
  console.log(answer+".")

  return answer+".";
}


addPunctuation("A b c D e F g h I J k L m n o P Q r S t U v w X Y Z")

/*
Add Punctuation
Given a string of sentences with missing periods, add a period (".") in the following places:

Before each space that comes immediately before an uppercase letter
And at the end of the string
Return the resulting string.

Tests
Passed:1. addPunctuation("Hello world") should return "Hello world."
Passed:2. addPunctuation("Hello world It's nice today") should return "Hello world. It's nice today."
Passed:3. addPunctuation("JavaScript is great Sometimes") should return "JavaScript is great. Sometimes."
Passed:4. addPunctuation("A b c D e F g h I J k L m n o P Q r S t U v w X Y Z") should return "A b c. D e. F g h. I. J k. L m n o. P. Q r. S t. U v w. X. Y. Z."
Passed:5. addPunctuation("Wait.. For it") should return "Wait... For it."
*/