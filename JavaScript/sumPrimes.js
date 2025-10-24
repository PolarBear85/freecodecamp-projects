function sumPrimes (target) {
  const array = []
  const upperLimit = Math.sqrt(target)
  const output = []

  for (let x = 0; x<=target; x++) {
    array.push(true)
  }


  for (let i = 2; i <= upperLimit; i++) {
    console.log(i)
    if (array[i]) {
      for (let j = i * i; j <= target; j += i) {
        array[j] = false;
      }
    }
  }

  for (let i = 2; i <= target; i++) {
    if (array[i]) {
      output.push(i)
    }
  }

  console.log(output)

  let total = 0

  output.forEach(prime => {
    total += prime
  })

console.log(total)

return total

}


sumPrimes(5)
sumPrimes(10)