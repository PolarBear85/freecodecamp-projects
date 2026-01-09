function isCircularPrime(n) {
  const generatedNums = generateNums(n)
  console.log(generatedNums)




  const answerArr = generatedNums.map(num => {
   return primeCheck(num)
  })

  console.log(answerArr)
  console.log(answerArr.includes(false) ? false:true)
  return answerArr.includes(false) ? false:true
}



function generateNums(number) {
  const rotateNums = []
  const numberStr = number.toString().split("")
  while (rotateNums.length <numberStr.length) {
    rotateNums.push(numberStr.join(""))
    const thisNum = numberStr[0]
    numberStr.shift(0)
    numberStr.push(thisNum)
  }

  return rotateNums

  
}



function primeCheck(target) {
  if(target <2 ) return false

  const upperLimit = Math.sqrt(target)
  let primeState = true
  console.log(upperLimit)
  for (let x = 2; x<=upperLimit; x++) {
    if (target%x == 0) {

      return false
    }
  }
  return true
}

isCircularPrime(197)

/*
Circular Prime
Given an integer, determine if it is a circular prime.

A circular prime is an integer where all rotations of its digits are themselves prime.

For example, 197 is a circular prime because all rotations of its digits: 197, 971, and 719, are prime numbers.


Tests
Passed:1. isCircularPrime(197) should return true.
Passed:2. isCircularPrime(23) should return false.
Passed:3. isCircularPrime(13) should return true.
Passed:4. isCircularPrime(89) should return false.
Passed:5. isCircularPrime(1193) should return true.
*/