function hasNoRepeats(str) {

  for (let x = 1; x<=str.length; x++) {
    if (str[x] == str[x-1]) {
      return false
    }
  }

  return true;
}


hasNoRepeats("The quick brown fox jumped over the lazy dog.")


/*
No Consecutive Repeats
Given a string, determine if it has no repeating characters.

A string has no repeats if it does not have the same character two or more times in a row.
Tests:
Passed:1. hasNoRepeats("hi world") should return true.
Passed:2. hasNoRepeats("hello world") should return false.
Passed:3. hasNoRepeats("abcdefghijklmnopqrstuvwxyz") should return true.
Passed:4. hasNoRepeats("freeCodeCamp") should return false.
Passed:5. hasNoRepeats("The quick brown fox jumped over the lazy dog.") should return true.
Passed:6. hasNoRepeats("Mississippi") should return false
*/