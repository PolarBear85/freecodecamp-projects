function largestNumber(str) {

  const cleanStr =str.replace(/[\!\?,:;]/gi," ").split(" ").map(number => parseFloat(number)||0).sort((a,b) => b-a)
  console.log(cleanStr)
  return cleanStr[0]

}

largestNumber("-402,-1032!-569:-947;-633?-800!-1012;-402,-723?-8102!-3011")

/*
Largest Number
Given a string of numbers separated by various punctuation, return the largest number.

The given string will only contain numbers and separators.
Separators can be commas (","), exclamation points ("!"), question marks ("?"), colons (":"), or semi-colons (";").
Tests:
Passed:1. largestNumber("1,2") should return 2.
Passed:2. largestNumber("4;15:60,26?52!0") should return 60.
Passed:3. largestNumber("-402,-1032!-569:-947;-633?-800!-1012;-402,-723?-8102!-3011") should return -402.
Passed:4. largestNumber("12;-50,99.9,49.1!-10.1?88?16") should return 99.9.
*/
