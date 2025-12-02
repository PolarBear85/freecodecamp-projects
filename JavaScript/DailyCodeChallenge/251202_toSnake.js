function toSnake(camel) {
  
  const regex = /[A-Z]/g

  const answer = camel.replace(regex,(match) => {
    return "_" + match.toLowerCase()
  })

return answer
 
}

toSnake("helloWorld")

toSnake("helloWorld")

/*
Camel to Snake
Given a string in camel case, return the snake case version of the string using the following rules:

The input string will contain only letters (A-Z and a-z) and will always start with a lowercase letter.
Every uppercase letter in the camel case string starts a new word.
Convert all letters to lowercase.
Separate words with an underscore (_).


Tests
Passed:1. toSnake("helloWorld") should return "hello_world".
Passed:2. toSnake("myVariableName") should return "my_variable_name".
Passed:3. toSnake("freecodecampDailyChallenges") should return "freecodecamp_daily_challenges".
*/