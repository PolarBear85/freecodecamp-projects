function parseRomanNumeral(numeral) {

  const numTable = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
  }

  const total = numeral.split("")
    .reduce((accumulator,item,index,array)=> {
      if (!array[index+1]) return accumulator + numTable[item]

      return numTable[array[index+1]]> numTable[item] ? accumulator - numTable[item] : accumulator + numTable[item]
      
    },0)

  console.log(total)

  return total;
}

parseRomanNumeral("IV")


/*
Roman Numeral Parser
Given a string representing a Roman numeral, return its integer value.

Roman numerals consist of the following symbols and values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.

Tests
Passed:1. parseRomanNumeral("III") should return 3.
Passed:2. parseRomanNumeral("IV") should return 4.
Passed:3. parseRomanNumeral("XXVI") should return 26.
Passed:4. parseRomanNumeral("XCIX") should return 99.
Passed:5. parseRomanNumeral("CDLX") should return 460.
Passed:6. parseRomanNumeral("DIV") should return 504.
Passed:7. parseRomanNumeral("MMXXV") should return 2025.
*/