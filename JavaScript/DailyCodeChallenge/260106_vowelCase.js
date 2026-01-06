function vowelCase(str) {

  const regex = /[a-z]/gi

  const returnStr = str.replace(regex, (match) => {
    return 'aeiouAEIOU'.includes(match) ? match.toUpperCase() : match.toLowerCase()
  })

  console.log(returnStr)

  return returnStr;
}


vowelCase("git cherry-pick")
vowelCase("HEAD~1")

/*
vOwElcAsE
Given a string, return a new string where all vowels are converted to uppercase and all other alphabetical characters are converted to lowercase.

Vowels are "a", "e", "i", "o", and "u" in any case.
Non-alphabetical characters should remain unchanged.

Tests
Passed:1. vowelCase("vowelcase") should return "vOwElcAsE".
Passed:2. vowelCase("coding is fun") should return "cOdIng Is fUn".
Passed:3. vowelCase("HELLO, world!") should return "hEllO, wOrld!".
Passed:4. vowelCase("git cherry-pick") should return "gIt chErry-pIck".
Passed:5. vowelCase("HEAD~1") should return "hEAd~1".

*/