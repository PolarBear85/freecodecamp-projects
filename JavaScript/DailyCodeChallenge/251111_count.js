function count(str) {
  console.log(str)
  const regexVowel = /[aeiou]/gi
  const regexLetter = /[^aeiou\s.,!?]/gi
  const answer = []
  answer.push(str.match(regexVowel).length)
  answer.push(str.match(regexLetter).length)

  console.log(answer)
  return answer
  
}

count("Hello World")

/*
Vowels and Consonants
Given a string, return an array with the number of vowels and number of consonants in the string.

Vowels consist of a, e, i, o, u in any case.
Consonants consist of all other letters in any case.
Ignore any non-letter characters.
For example, given "Hello World", return [3, 7].
*/