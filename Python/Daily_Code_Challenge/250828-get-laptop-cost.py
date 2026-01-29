def get_laptop_cost(laptops, budget):

    prices = sorted(set(laptops),reverse =True)

    if (len(prices)) >= 2 and prices[1] <= budget:
        return prices[1]

    for price in prices:
        if price <= budget:
            return price

    return 0


'''
Second Best
Given an array of integers representing the price of different laptops, and an integer representing your budget, return:

The second most expensive laptop if it is within your budget, or
The most expensive laptop that is within your budget, or
0 if no laptops are within your budget.
Duplicate prices should be ignored.

Tests
Passed:1. get_laptop_cost([1500, 2000, 1800, 1400], 1900) should return 1800
Passed:2. get_laptop_cost([1500, 2000, 2000, 1800, 1400], 1900) should return 1800
Passed:3. get_laptop_cost([2099, 1599, 1899, 1499], 2200) should return 1899
Passed:4. get_laptop_cost([2099, 1599, 1899, 1499], 1000) should return 0
Passed:5. get_laptop_cost([1200, 1500, 1600, 1800, 1400, 2000], 1450) should return 1400

'''