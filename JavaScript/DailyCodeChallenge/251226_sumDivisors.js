function sumDivisors(n) {

  const divisors = []

  for (let x = 0; x<=n; x++) {
    if(n%x ==0) {
      divisors.push(x)

    }
  }

  console.log(divisors)

  return divisors.reduce ((accumulator, thisValue)=> {
    return accumulator +thisValue
  })
}

/*
Sum of Divisors
Given a positive integer, return the sum of all its divisors.

A divisor is any integer that divides the number evenly (the remainder is 0).
Only count each divisor once.
For example, given 6, return 12 because the divisors of 6 are 1, 2, 3, and 6, and the sum of those is 12.


Tests
Waiting:1. sumDivisors(6) should return 12.
Waiting:2. sumDivisors(13) should return 14.
Waiting:3. sumDivisors(28) should return 56.
Waiting:4. sumDivisors(84) should return 224.
Waiting:5. sumDivisors(549) should return 806.
Waiting:6. sumDivisors(9348) should return 23520.

*/