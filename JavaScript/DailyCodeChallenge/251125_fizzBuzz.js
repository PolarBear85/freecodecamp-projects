function fizzBuzz(n) {
  const answer = []

  for (let x = 1; x<=n; x++) {
    switch (true) {
      case x%3 === 0 && x %5 === 0 : 
        answer.push("FizzBuzz");
        break;
      case x%3 === 0 : 
        answer.push("Fizz");
        break;
      case x%5 === 0 : 
        answer.push("Buzz");
        break;
      default: answer.push(x)
    }
  }

console.log(answer)
  return answer;
}

fizzBuzz(20)

/*
FizzBuzz
Given an integer (n), return an array of integers from 1 to n (inclusive), replacing numbers that are multiple of:

3 with "Fizz".
5 with "Buzz".
3 and 5 with "FizzBuzz".

Tests
Passed:1. fizzBuzz(2) should return [1, 2].
Passed:2. fizzBuzz(4) should return [1, 2, "Fizz", 4].
Passed:3. fizzBuzz(8) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8].
Passed:4. fizzBuzz(20) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"].
Passed:5. fizzBuzz(50) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"].

*/