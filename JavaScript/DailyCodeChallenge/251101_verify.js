function verify(message, key, signature) {

  const messageSum = wordSum(message)
  const keySum = wordSum(key)

  console.log(messageSum,keySum)

  return (messageSum+keySum)==signature
}

function wordSum(word) {
  return word.split("").reduce((accumulator,letter) => {
    if (!letter.match(/[a-z]/gi)) return accumulator
    if (letter == letter.toUpperCase()) return accumulator+ parseInt(letter,36)+17
    if(letter == letter.toLowerCase()) return accumulator+parseInt(letter,36)-9
  },0)
}


console.log(verify("foo", "bar", 57))

/*
Signature Validation

Given a message string, a secret key string, and a signature number, determine if the signature is valid using this encoding method:

    Letters in the message and secret key have these values:
        a to z have values 1 to 26 respectively.
        A to Z have values 27 to 52 respectively.
    All other characters have no value.
    Compute the signature by taking the sum of the message plus the sum of the secret key.

For example, given the message "foo" and the secret key "bar", the signature would be 57:

f (6) + o (15) + o (15) = 36
b (2) + a (1) + r (18) = 21
36 + 21 = 57

Check if the computed signature matches the provided signature.
Tests

    Passed: 1. verify("foo", "bar", 57) should return true.
    Passed: 2. verify("foo", "bar", 54) should return false.
    Passed: 3. verify("freeCodeCamp", "Rocks", 238) should return true.
    Passed: 4. verify("Is this valid?", "No", 210) should return false.
    Passed: 5. verify("Is this valid?", "Yes", 233) should return true.
    Passed: 6. verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514) should return true.
*/