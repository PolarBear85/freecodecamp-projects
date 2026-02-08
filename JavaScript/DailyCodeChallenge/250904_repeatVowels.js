function repeatVowels(str) {

  const vowels = 'aeiouAEIOU'
  let repeats = 0
  const strArr = str.split("")

  const answerArr = strArr.map(item => {
    if (vowels.includes(item)) {
      repeats++
      return item + item.toLowerCase().repeat(repeats-1)
    } else {
      return item
    }
  })
  console.log(answerArr.join(""))

  return answerArr.join("");
}

repeatVowels("AEIOU")
console.log("AEeIiiOoooUuuuu")

/*
Vowel Repeater

Given a string, return a new version of the string where each vowel is duplicated one more time than the previous vowel you encountered. For instance, the first vowel in the sentence should remain unchanged. The second vowel should appear twice in a row. The third vowel should appear three times in a row, and so on.

    The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
    The original vowel should keeps its case.
    Repeated vowels should be lowercase.
    All non-vowel characters should keep their original case.

Tests

    Passed: 1. repeatVowels("hello world") should return "helloo wooorld".
    Passed: 2. repeatVowels("freeCodeCamp") should return "freeeCooodeeeeCaaaaamp".
    Passed: 3. repeatVowels("AEIOU") should return "AEeIiiOoooUuuuu".
    Passed: 4. repeatVowels("I like eating ice cream in Iceland") should return "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand".
    */