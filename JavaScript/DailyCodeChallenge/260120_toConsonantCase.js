function toConsonantCase(str) {

  const regex = /([aeiou])|(-)|([^aeiou])/gi

  const returnStr = str.replace(regex,(match,p1,p2,p3) => {
    if (p1) {
      return match.toLowerCase()
    }
    if (p2) {
      return "_"
    }
    if (p3) {
      return match.toUpperCase()
    }
  })

  console.log(returnStr)

  return returnStr;
}


toConsonantCase("_~-generic_~-variable_~-name_~-here-~_")

/*
Consonant Case
Given a string representing a variable name, convert it to consonant case using the following rules:

All consonants should be converted to uppercase.
All vowels (a, e, i, o, u in any case) should be converted to lowercase.
All hyphens (-) should be converted to underscores (_).
Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Passed:1. toConsonantCase("helloworld") should return "HeLLoWoRLD".
Passed:2. toConsonantCase("HELLOWORLD") should return "HeLLoWoRLD".
Passed:3. toConsonantCase("_hElLO-WOrlD-") should return "_HeLLo_WoRLD_".
Passed:4. toConsonantCase("_~-generic_~-variable_~-name_~-here-~_") should return "_~_GeNeRiC_~_VaRiaBLe_~_NaMe_~_HeRe_~_".

*/