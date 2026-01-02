function stringSum(str) {

  const regex = /\d+/g

  const numbers = str.match(regex)

  
  console.log(numbers)

  return numbers.reduce((accumulator,currentValue)=> {
    return accumulator+Number(currentValue)
  },0 )

}


stringSum("a12b34c56d78e90f123g456h789i0j1k2l3m4n5")

/*
Sum the String
Given a string containing digits and other characters, return the sum of all numbers in the string.

Treat consecutive digits as a single number. For example, "13" counts as 13, not 1 + 3.
Ignore any non-digit characters.

Tests
Passed:1. stringSum("3apples2bananas") should return 5.
Passed:2. stringSum("10cats5dogs2birds") should return 17.
Passed:3. stringSum("125344") should return 125344.
Passed:4. stringSum("a1b20c300") should return 321.
Passed:5. stringSum("a12b34c56d78e90f123g456h789i0j1k2l3m4n5") should return 1653.

*/