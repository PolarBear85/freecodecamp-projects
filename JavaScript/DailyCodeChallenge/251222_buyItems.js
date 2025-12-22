function buyItems(funds, items) {

  //step 1 - Convert our funds to USD
  const currencyObj = {
    "USD":1.00,
    "EUR":1.10,
    "GBP":1.25,
    "JPY":0.0070,
    "CAD":0.75
  }

  if (funds[1] !== "USD") {
    funds[0] = funds[0]*currencyObj[funds[1]]
    funds[1] = "USD"
  }
  

  //step 2 - convert all the items into the same currency as our funds
  items.forEach(item => {
    if (item[1] !== "USD") {
      item[0] = item[0]*currencyObj[item[1]]
      item[1] = "USD"
    }
  })
  //console.log(items)

  //step 3 - iterate through the new array and work out when we breach our budget

  let runTotal = 0

  for (let x = 0; x<items.length; x++) {
    runTotal += Number(items[x][0])

    if (funds[0] - runTotal <= 0) {
      console.log(`Buy the first ${x} items.`)
      return `Buy the first ${x} items.`
    }
  }
  console.log("Buy them all!")
  return `Buy them all!`



}

buyItems(["150.00", "USD"], [["50.00", "USD"], ["75.00", "USD"], ["30.00", "USD"]]) //first 2

buyItems(["200.00", "EUR"], [["50.00", "USD"], ["50.00", "USD"]]) //all

buyItems(["100.00", "CAD"], [["20.00", "USD"], ["15.00", "EUR"], ["10.00", "GBP"], ["6000", "JPY"], ["5.00", "CAD"], ["10.00", "USD"]]) //3

buyItems(["5000", "JPY"], [["3.00", "USD"], ["1000", "JPY"], ["5.00", "CAD"], ["2.00", "EUR"], ["4.00", "USD"], ["2000", "JPY"]]) // all

buyItems(["200.00", "USD"], [["50.00", "USD"], ["40.00", "EUR"], ["30.00", "GBP"], ["5000", "JPY"], ["25.00", "CAD"], ["20.00", "USD"]]) //5


/*
Traveling Shopper
Given an amount of money you have, and an array of items you want to buy, determine how many of them you can afford.

The given amount will be in the format ["Amount", "Currency Code"]. For example: ["150.00", "USD"] or ["6000", "JPY"].
Each array item you want to purchase will be in the same format.
Use the following exchange rates to convert values:

Currency	1 Unit Equals
USD	1.00 USD
EUR	1.10 USD
GBP	1.25 USD
JPY	0.0070 USD
CAD	0.75 USD
If you can afford all the items in the list, return "Buy them all!".
Otherwise, return "Buy the first X items.", where X is the number of items you can afford when purchased in the order given.

Tests
Passed:1. buyItems(["150.00", "USD"], [["50.00", "USD"], ["75.00", "USD"], ["30.00", "USD"]]) should return "Buy the first 2 items.".
Passed:2. buyItems(["200.00", "EUR"], [["50.00", "USD"], ["50.00", "USD"]]) should return "Buy them all!".
Passed:3. buyItems(["100.00", "CAD"], [["20.00", "USD"], ["15.00", "EUR"], ["10.00", "GBP"], ["6000", "JPY"], ["5.00", "CAD"], ["10.00", "USD"]]) should return "Buy the first 3 items.".
Passed:4. buyItems(["5000", "JPY"], [["3.00", "USD"], ["1000", "JPY"], ["5.00", "CAD"], ["2.00", "EUR"], ["4.00", "USD"], ["2000", "JPY"]]) should return "Buy them all!".
Passed:5. buyItems(["200.00", "USD"], [["50.00", "USD"], ["40.00", "EUR"], ["30.00", "GBP"], ["5000", "JPY"], ["25.00", "CAD"], ["20.00", "USD"]]) should return "Buy the first 5 items.".

*/