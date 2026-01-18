function getsFreeShipping(cart, minimum) {

  const inventory = {
    "shirt":34.25,
    "jeans":48.50,
    "shoes":75.00,
    "hat":19.95,
    "socks":15.00,
    "jacket":109.95
  }


  const cartTotal = cart.reduce((total,item) => {
    return total+= inventory[item]
  },0)

  console.log(cartTotal)

  return cartTotal > minimum
}


getsFreeShipping(["hat", "socks", "hat", "jeans", "shoes", "hat"], 200)


/*
Free Shipping

Given an array of strings representing items in your shopping cart, and a number for the minimum order amount to qualify for free shipping, determine if the items in your shopping cart qualify for free shipping.

The given array will contain items from the list below:
Item 	Price
"shirt" 	34.25
"jeans" 	48.50
"shoes" 	75.00
"hat" 	19.95
"socks" 	15.00
"jacket" 	109.95


Tests
Passed: 1. getsFreeShipping(["shoes"], 50) should return true.
Passed: 2. getsFreeShipping(["hat", "socks"], 50) should return false.
Passed: 3. getsFreeShipping(["jeans", "shirt", "jacket"], 75) should return true.
Passed: 4. getsFreeShipping(["socks", "socks", "hat"], 75) should return false.
Passed: 5. getsFreeShipping(["shirt", "shirt", "jeans", "socks"], 100) should return true.
Passed: 6. getsFreeShipping(["hat", "socks", "hat", "jeans", "shoes", "hat"], 200) should return false.

*/
