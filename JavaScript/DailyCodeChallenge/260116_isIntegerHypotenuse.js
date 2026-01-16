function isIntegerHypotenuse(a, b) {


  const c = Math.hypot(a,b)
  return Number.isInteger(c)

}

isIntegerHypotenuse(250, 333)
isIntegerHypotenuse(780, 1040)

/*
Integer Hypotenuse
Given two positive integers representing the lengths for the two legs (the two short sides) of a right triangle, determine whether the hypotenuse is an integer.

The length of the hypotenuse is calculated by adding the squares of the two leg lengths together and then taking the square root of that total (a2 + b2 = c2).

Tests
Passed:1. isIntegerHypotenuse(3, 4) should return true.
Passed:2. isIntegerHypotenuse(2, 3) should return false.
Passed:3. isIntegerHypotenuse(5, 12) should return true.
Passed:4. isIntegerHypotenuse(10, 10) should return false.
Passed:5. isIntegerHypotenuse(780, 1040) should return true.
Passed:6. isIntegerHypotenuse(250, 333) should return false.

*/