function fizzBuzzMini(n) {

  let string = ""
  if (n%3 == 0) string += "Fizz"
  if (n%5 == 0) string += "Buzz"
  return string || String(n)
}

/*
FizzBuzz Mini
Given an integer, return a string based on the following rules:

If the number is divisible by 3, return "Fizz".
If the number is divisible by 5, return "Buzz".
If the number is divisible by both 3 and 5, return "FizzBuzz".
Otherwise, return the given number as a string.

Tests
Passed:1. fizzBuzzMini(3) should return "Fizz".
Passed:2. fizzBuzzMini(4) should return "4".
Passed:3. fizzBuzzMini(35) should return "Buzz".
Passed:4. fizzBuzzMini(75) should return "FizzBuzz".
Passed:5. fizzBuzzMini(98) should return "98".

*/