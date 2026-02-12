function allUnique(str) {

  const uniques = Array.from(new Set(str))
  console.log(uniques.length)
  console.log(str.length)

  return str.length == uniques.length
}

allUnique("freeCodeCamp")

/*
Unique Characters
Given a string, determine if all the characters in the string are unique.

Uppercase and lowercase letters should be considered different characters.

Tests
Passed:1. allUnique("abc") should return true.
Passed:2. allUnique("aA") should return true.
Passed:3. allUnique("QwErTy123!@") should return true.
Passed:4. allUnique("~!@#$%^&*()_+") should return true.
Passed:5. allUnique("hello") should return false.
Passed:6. allUnique("freeCodeCamp") should return false.
Passed:7. allUnique("!@#*$%^&*()aA") should return false.
*/