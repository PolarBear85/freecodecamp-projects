import math

def count_perfect_cubes(a, b):

    lower = min(a,b)
    higher = max(a,b)

    start = math.ceil(math.cbrt(lower))
    end = math.floor(math.cbrt(higher))

    print(end - start + 1)

    return end - start + 1

count_perfect_cubes(9214, -8127)

'''
Perfect Cube Count
Given two integers, determine how many perfect cubes exist in the range between and including the two numbers.

The lower number is not garanteed to be the first argument.
A number is a perfect cube if there exists an integer (n) where n * n * n = number. For example, 27 is a perfect cube because 3 * 3 * 3 = 27.

Tests
Passed:1. count_perfect_cubes(3, 30) should return 2.
Passed:2. count_perfect_cubes(1, 30) should return 3.
Passed:3. count_perfect_cubes(30, 0) should return 4.
Passed:4. count_perfect_cubes(-64, 64) should return 9.
Passed:5. count_perfect_cubes(9214, -8127) should return 41.
'''