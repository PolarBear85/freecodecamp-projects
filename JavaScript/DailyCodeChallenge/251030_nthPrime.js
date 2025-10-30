function nthPrime(n) {
  const sizeFactor = 10
  const lowest = 0
  const highest = n*sizeFactor
  const numArr = []
  const upperLimit = Math.sqrt(highest)

  for (let x = lowest; x<=highest; x++) {
    numArr.push(true)
  }

  for (let i = 2; i<=upperLimit; i++) {
    if (numArr[i]) {
      for (let j = i*i; j<=highest; j+=i) {
        numArr[j] = false;
      }
    }
  }
  //console.log(numArr)
  const primeArr = []

  for (let x = 2; primeArr.length<n; x++) {
    if (numArr[x]) {
      primeArr.push(x)
    }
  }

  console.log(primeArr[primeArr.length-1])

  

  

  return primeArr[primeArr.length-1];
}


nthPrime(1000)