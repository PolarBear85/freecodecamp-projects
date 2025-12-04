function isFizzBuzz(sequence) {

  for (let x = 0; x<sequence.length; x++) {
    const num = x+1;
    console.log(num,sequence[x])
    console.log(num % 3, num %5)
    if (num % 3 === 0 && num % 5 === 0 && sequence[x] !== "FizzBuzz") {
      console.log("I get here 1")
      return false
      //check for missing fizz
    } else if (num % 3 === 0 && num % 5 != 0 && sequence[x] !== "Fizz") {
      console.log("I get here 2")
      console.log(num % 3)
      console.log(num, sequence[x])
      return false
      //check for missing buzz
    } else if (num %5 === 0 && num % 3 !=0 && sequence[x] !== "Buzz") {
      console.log("I get here 3")
      return false
    } else if (num % 3 !== 0 && num % 5 !== 0 && sequence[x] !== num) {
      console.log("I get here 4")
      console.log(num,sequence[x])
      return false
    }
  }
  

  return true;
}

console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"]))


/*
BuzzFizz
Given an array, determine if it is a correct FizzBuzz sequence from 1 to the last item in the array. A sequence is correct if:

Numbers that are multiples of 3 are replaced with "Fizz"
Numbers that are multiples of 5 are replaced with "Buzz"
Numbers that are multiples of both 3 and 5 are replaced with "FizzBuzz"
All other numbers remain as integers in ascending order, starting from 1.
The array must start at 1 and have no missing or extra elements.

Tests
Passed:1. isFizzBuzz([1, 2, "Fizz", 4]) should return true.
Passed:2. isFizzBuzz([1, 2, 3, 4]) should return false.
Passed:3. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", 7]) should return false.
Passed:4. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "FizzBuzz"]) should return false.
Passed:5. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Fizz"]) should return false.
Passed:6. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Buzz"]) should return false.
Passed:7. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"]) should return true.

*/