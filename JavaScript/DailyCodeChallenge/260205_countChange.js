function countChange(change) {

  const totalChange = change.reduce((total,coin)=> {
    return total += coin
  },0)

  console.log(`$${Math.floor(totalChange/100)}.${(totalChange%100).toFixed(0).toString().padStart(2,"0")}`)

  return `$${Math.floor(totalChange/100)}.${(totalChange%100).toFixed(0).toString().padStart(2,"0")}`

}

countChange([1])

/*
Pocket Change
Given an array of integers representing the coins in your pocket, with each integer being the value of a coin in cents, return the total amount in the format "$D.CC".

100 cents equals 1 dollar.
In the return value, include a leading zero for amounts less than one dollar and always exactly two digits for the cents.

Tests
Passed:1. countChange([25, 10, 5, 1]) should return "$0.41".
Passed:2. countChange([25, 10, 5, 1, 25, 10, 25, 1, 1, 10, 5, 25]) should return "$1.43".
Passed:3. countChange([100, 25, 100, 1000, 5, 500, 2000, 25]) should return "$37.55".
Passed:4. countChange([10, 5, 1, 10, 1, 25, 1, 1, 5, 1, 10]) should return "$0.70".
Failed:5. countChange([1]) should return "$0.01".
Failed:6. countChange([25, 25, 25, 25]) should return "$1.00".
*/