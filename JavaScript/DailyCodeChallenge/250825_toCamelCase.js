function toCamelCase(s) {

  const regex = /[_\-\s]+/gi
  const cleanSentence = s.toLowerCase().split(regex)

  const camelSplit = cleanSentence.map((word,index) => {
    if (index == 0) return word
    return word[0].toUpperCase() + word.slice(1)
  })
  console.log(camelSplit.join(""))
  return camelSplit.join("")
}


toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk")
toCamelCase("HELLO WORLD")

/*
camelCase
Given a string, return its camel case version using the following rules:

Words in the string argument are separated by one or more characters from the following set: space ( ), dash (-), or underscore (_). Treat any sequence of these as a word break.
The first word should be all lowercase.
Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
All spaces and separators should be removed.

Tests
Passed:1. toCamelCase("hello world") should return "helloWorld".
Passed:2. toCamelCase("HELLO WORLD") should return "helloWorld".
Passed:3. toCamelCase("secret agent-X") should return "secretAgentX".
Passed:4. toCamelCase("FREE cODE cAMP") should return "freeCodeCamp".
Passed:5. toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk") should return "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk".

*/