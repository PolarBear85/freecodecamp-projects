function countPermutations(str) {
  const length = str.length
  let totalCount = 0
  //basecase
  if (length === 0) {return 1}

  const usedChars = new Set()

  for (let x = 0; x<length; x++) {
    const char = str[x]
    if (usedChars.has(char)) {continue}
    usedChars.add(char)
    const newStr = str.slice(0,x) + str.slice(x+1)
    const subCount = countPermutations(newStr)
    totalCount += subCount
    
  }

    return totalCount

}


console.log(countPermutations("racecar"))


/*
Permutation Count
Given a string, return the number of distinct permutations that can be formed from its characters.

A permutation is any reordering of the characters in the string.
Do not count duplicate permutations.
If the string contains repeated characters, repeated arrangements should only be counted once.
The string will contain only letters (A-Z, a-z).
For example, given "abb", return 3 because there's three unique ways to arrange the letters: "abb", "bab", and "bba".


Tests
Passed:1. countPermutations("abb") should return 3.
Passed:2. countPermutations("abc") should return 6.
Passed:3. countPermutations("racecar") should return 630.
Passed:4. countPermutations("freecodecamp") should return 39916800.

*/