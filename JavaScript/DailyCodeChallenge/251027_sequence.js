function sequence(n) {
  const returnArr = []

  for (let x = 1; x <= n; x++) {
    returnArr.push(x)
  }

console.log(returnArr.join(""))

  return returnArr.join("")
}

sequence(1)

/*
Integer Sequence
Given a positive integer, return a string with all of the integers from 1 up to, and including, the given number, in numerical order.

For example, given 5, return "12345".
*/