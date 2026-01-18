function isBalanced(s) {

  const regex = /([aeiou])/gi
  const oddLength = s.length % 2 ? true : false 

  const midpoint = s.length / 2

  const firstSplit = oddLength ? Math.floor(midpoint) : midpoint

  const secondSplit = oddLength ? Math.floor(midpoint)+1 : midpoint

const firstHalf = s.substring(0,firstSplit)
const secondHalf = s.substring(secondSplit)


const firstMatch = firstHalf.match(regex) ? firstHalf.match(regex) : []
const secondMatch = secondHalf.match(regex) ? secondHalf.match(regex) : []


return firstMatch.length === secondMatch.length



}

console.log(isBalanced("racecar"))



/*
Vowel Balance

Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

    The string can contain any characters.
    The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
    If there's an odd number of characters in the string, ignore the center character.

Tests

Passed: 1. isBalanced("racecar") should return true.
Passed: 2. isBalanced("Lorem Ipsum") should return true.
Passed: 3. isBalanced("Kitty Ipsum") should return false.
Passed: 4. isBalanced("string") should return false.
Passed: 5. isBalanced(" ") should return true.
Passed: 6. isBalanced("abcdefghijklmnopqrstuvwxyz") should return false.
Passed: 7. isBalanced("123A#b!E&*456-o.U") should return true.

*/

