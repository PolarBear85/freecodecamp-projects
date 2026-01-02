function fuelToAdd(currentGallons, requiredLiters) {

  const convert =  3.78541
  const reqGal = Math.ceil(requiredLiters / convert)

  console.log(currentGallons, requiredLiters, reqGal)


  if (reqGal-currentGallons > 0) {
    return reqGal-currentGallons
  } else {
    return 0
  }

}

console.log(fuelToAdd(1000, 50000))

/*
Takeoff Fuel
Given the numbers of gallons of fuel currently in your airplane, and the required number of liters of fuel to reach your destination, determine how many additional gallons of fuel you should add.

1 gallon equals 3.78541 liters.
If the airplane already has enough fuel, return 0.
You can only add whole gallons.
Do not include decimals in the return number.

Tests
Waiting:1. fuelToAdd(0, 1) should return 1.
Waiting:2. fuelToAdd(5, 40) should return 6.
Waiting:3. fuelToAdd(10, 30) should return 0.
Waiting:4. fuelToAdd(896, 20500) should return 4520.
Waiting:5. fuelToAdd(1000, 50000) should return 12209.

*/