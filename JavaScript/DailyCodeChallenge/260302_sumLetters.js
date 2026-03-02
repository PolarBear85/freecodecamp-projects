function sumLetters(str) {

  const answer = str.split("")
                    .reduce((accumulator,letter) => {
                      const letterNumber = parseInt(letter,36) && parseInt(letter,36) > 9 ? parseInt(letter,36) - 9 : 0
                      return accumulator + letterNumber




                    },0)

  console.log(answer)

  return answer;
}

sumLetters("</404>")
sumLetters("The quick brown fox jumps over the lazy dog.")

/*
Sum the Letters
Given a string, return the sum of its letters.

Letters are A-Z in uppercase or lowercase
Letter values are: "A" = 1, "B" = 2, ..., "Z" = 26
Uppercase and lowercase letters have the same value.
Ignore all non-letter characters.

Tests
Passed:1. sumLetters("Hello") should return 52.
Passed:2. sumLetters("freeCodeCamp") should return 94.
Passed:3. sumLetters("The quick brown fox jumps over the lazy dog.") should return 473.
Passed:4. sumLetters("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nisl, pretium eu varius blandit, facilisis quis eros. Vestibulum ante ipsum primis in faucibus orci.") should return 1681.
Passed:5. sumLetters("</404>") should return 0.

*/