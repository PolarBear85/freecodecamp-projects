function getLaptopCost(laptops, budget) {

  const uniqueLaptops = new Set(laptops)
  
  const withinBudget = Array.from(uniqueLaptops)
    .sort((a, b) => b - a)
    .filter(laptop => {
      return laptop <= budget
  })
  console.log(withinBudget)
  if (withinBudget.length == laptops.length) {
    return withinBudget[1]
  } else if (withinBudget.length > 0) {
    return withinBudget[0]
  } else {
    return 0
  }
}

console.log(getLaptopCost([2099, 1599, 1899, 1499], 2200))

/*
Second Best
Given an array of integers representing the price of different laptops, and an integer representing your budget, return:

The second most expensive laptop if it is within your budget, or
The most expensive laptop that is within your budget, or
0 if no laptops are within your budget.
Duplicate prices should be ignored.

Tests
Passed:1. getLaptopCost([1500, 2000, 1800, 1400], 1900) should return 1800
Passed:2. getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900) should return 1800
Passed:3. getLaptopCost([2099, 1599, 1899, 1499], 2200) should return 1899
Passed:4. getLaptopCost([2099, 1599, 1899, 1499], 1000) should return 0
Passed:5. getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450) should return 1400

*/