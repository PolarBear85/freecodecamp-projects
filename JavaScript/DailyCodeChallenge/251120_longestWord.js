function longestWord(sentence) {

  const regex = /[^a-z\s]/gi

  const wordArr = sentence.replace(regex,"").split(" ")


  let longestWord = ""
  console.log(longestWord.length)

  for (let i = 0; i<wordArr.length; i++) {
    if (wordArr[i].length > longestWord.length) {
      longestWord = wordArr[i]
    }
  }

console.log(longestWord)


  return longestWord;
}


longestWord("This sentence... has commas, ellipses, and an exclamation point!")


/*
ongest Word
Given a sentence string, return the longest word in the sentence.

Words are separated by a single space.
Only letters (a-z, case-insensitive) count toward the word's length.
If there are multiple words with the same length, return the first one that appears.
Return the word as it appears in the given string, with punctuation removed.

Tests
Passed:1. longestWord("The quick red fox") should return "quick".
Passed:2. longestWord("Hello coding challenge.") should return "challenge".
Passed:3. longestWord("Do Try This At Home.") should return "This".
Passed:4. longestWord("This sentence... has commas, ellipses, and an exclamation point!") should return "exclamation".
Passed:5. longestWord("A tie? No way!") should return "tie".
Passed:6. longestWord("Wouldn't you like to know.") should return "Wouldnt".

*/