function countPerfectCubes(a, b) {

  let cubeCount = 0
  const lower = Math.min(a,b)
  const higher = Math.max(a,b)




  const start = Math.ceil(Math.cbrt(lower))
  const end = Math.floor(Math.cbrt(higher))
  console.log(end - start + 1)
  return end - start + 1

}

countPerfectCubes(-64, 64)


/*
Perfect Cube Count
Given two integers, determine how many perfect cubes exist in the range between and including the two numbers.

The lower number is not garanteed to be the first argument.
A number is a perfect cube if there exists an integer (n) where n * n * n = number. For example, 27 is a perfect cube because 3 * 3 * 3 = 27.

Tests
Passed:1. countPerfectCubes(3, 30) should return 2.
Passed:2. countPerfectCubes(1, 30) should return 3.
Passed:3. countPerfectCubes(30, 0) should return 4.
Passed:4. countPerfectCubes(-64, 64) should return 9.
Passed:5. countPerfectCubes(9214, -8127) should return 41.
*/
