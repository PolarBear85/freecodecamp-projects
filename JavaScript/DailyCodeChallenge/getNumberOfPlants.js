function getNumberOfPlants(fieldSize, unit, crop) {

  const plantRoom = {
    "corn":1,
    "wheat":0.1,
    "soybeans":0.5,
    "tomatoes":0.25,
    "lettuce":0.2
  }

  const unitRatios = {
    "acres":4046.86,
    "hectares":10000
  }

  if(!unitRatios.hasOwnProperty(unit) || !plantRoom.hasOwnProperty(crop)) {
    return "Not a valid entry"
  }

  const squareMeters = fieldSize * unitRatios[unit]



  const maxPlants = Math.floor(squareMeters/plantRoom[crop])
  console.log(maxPlants)
  return maxPlants;
}

console.log(getNumberOfPlants(2, "hectares", "lettuce"))

/*
Plant the Crop
Given an integer representing the size of your farm field, and "acres" or "hectares" representing the unit for the size of your farm field, and a type of crop, determine how many plants of that type you can fit in your field.

1 acre equals 4046.86 square meters.
1 hectare equals 10,000 square meters.
Here's a list of crops that will be given as input and how much space a single plant takes:

Crop	Space per plant
"corn"	1 square meter
"wheat"	0.1 square meters
"soybeans"	0.5 square meters
"tomatoes"	0.25 square meters
"lettuce"	0.2 square meters
Return the number of plants that fit in the field, rounded down to the nearest whole plant.

Tests
Passed:1. getNumberOfPlants(1, "acres", "corn") should return 4046.
Passed:2. getNumberOfPlants(2, "hectares", "lettuce") should return 100000.
Passed:3. getNumberOfPlants(20, "acres", "soybeans") should return 161874.
Passed:4. getNumberOfPlants(3.75, "hectares", "tomatoes") should return 150000.
Passed:5. getNumberOfPlants(16.75, "acres", "tomatoes") should return 271139.

*/