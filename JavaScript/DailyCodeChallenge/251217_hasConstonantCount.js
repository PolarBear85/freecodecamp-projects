function hasConsonantCount(text, target) {

  const regex = /[aeiou0-9\W_]/gi

  const check = text.replace(regex,"")
  console.log(check)
  return check.length == target
}


hasConsonantCount("helloworld", 7)
hasConsonantCount("eieio", 5)
hasConsonantCount("freeCodeCamp Rocks!", 11)
hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 24)

/*
Consonant Count
Given a string and a target number, determine whether the string contains exactly the target number of consonants.

Consonants are all alphabetic characters except "a", "e", "i", "o", and "u" in any case.
Ignore digits, punctuation, spaces, and other non-letter characters when counting.

Tests
Passed:1. hasConsonantCount("helloworld", 7) should return true.
Passed:2. hasConsonantCount("eieio", 5) should return false.
Passed:3. hasConsonantCount("freeCodeCamp Rocks!", 11) should return true.
Passed:4. hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 24) should return false.
Passed:5. hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 23) should return true.

*/