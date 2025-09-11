** start of script.js **

function burnCandles(candles, leftoversNeeded) {
  let candleCount = 0
  let leftOvers = 0
  let remainder = 0

  while (candles > 0) {
    candleCount += candles
    leftOvers = candles
    leftOvers += remainder
    candles = Math.floor(leftOvers/leftoversNeeded)
    remainder = leftOvers%leftoversNeeded
    
    

    

  }

  return candleCount

}


console.log(burnCandles(7, 2))
console.log(burnCandles(10, 5))
console.log(burnCandles(20, 3))




** end of script.js **

