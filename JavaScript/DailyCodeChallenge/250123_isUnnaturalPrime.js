function isUnnaturalPrime(n) {

  const number = Math.abs(n)
  console.log(number)
  
  if (number == 2) return true
  if (number == 1 || number == 0 || number % 2 == 0) return false
  

  const target = Math.sqrt(number)
  console.log(target)

  for (let x = 3; x<=target; x+=2) {
    console.log(x)
    if(number % x == 0) {
      return false
    }
  }

  return true;
}


console.log(isUnnaturalPrime(44))

/*
Unnatural Prime
Given an integer, determine if that number is a prime number or a negative prime number.

A prime number is a positive integer greater than 1 that is only divisible by 1 and itself.
A negative prime number is the negative version of a positive prime number.
1 and 0 are not considered prime numbers.
Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Waiting:1. isUnnaturalPrime(1) should return false.
Waiting:2. isUnnaturalPrime(-1) should return false.
Waiting:3. isUnnaturalPrime(19) should return true.
Waiting:4. isUnnaturalPrime(-23) should return true.
Waiting:5. isUnnaturalPrime(0) should return false.
Waiting:6. isUnnaturalPrime(97) should return true.
Waiting:7. isUnnaturalPrime(-61) should return true.
Waiting:8. isUnnaturalPrime(99) should return false.
Waiting:9. isUnnaturalPrime(-44) should return false.

*/