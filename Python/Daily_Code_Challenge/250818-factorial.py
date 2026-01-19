def factorial(n):

    arr = range(1,n+1)

    count = 1

    for num in arr:
        count *= num

    return count


factorial(20)

'''
Factorializer

Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.

    The factorial of zero is 1.

Tests

    Passed: 1. factorial(0) should return 1.
    Passed: 2. factorial(5) should return 120.
    Passed: 3. factorial(20) should return 2432902008176640000.
'''