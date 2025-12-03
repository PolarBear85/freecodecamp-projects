function lcm(a, b) {

  const target = a>b ? a:b

  const numbers = []
  const upperLimit = Math.sqrt(target)
  const primes = []

  for (let x = 0; x<=target; x++) {
    numbers.push(true)
  }

  console.log(numbers)

  for (let i = 2; i<=upperLimit; i++) {
    console.log[i]
    for (let j = i*i; j <=target; j += i) {
      numbers[j] = false
    }
  }
  console.log(numbers)

  for (let i = 2; i<= target; i++) {
    if (numbers[i]) {
      primes.push(i)
    }
  }

  console.log(primes)

  const primeFactorsA = []
  const primeFactorsB = []

  



}

lcm(4, 6)