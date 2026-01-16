import math

def is_integer_hypotenuse(a, b):

    c = math.hypot(a,b)

    return c.is_integer()




is_integer_hypotenuse(250, 333)


'''
Integer Hypotenuse
Given two positive integers representing the lengths for the two legs (the two short sides) of a right triangle, determine whether the hypotenuse is an integer.

The length of the hypotenuse is calculated by adding the squares of the two leg lengths together and then taking the square root of that total (a2 + b2 = c2).


Tests
Passed:1. is_integer_hypotenuse(3, 4) should return True.
Passed:2. is_integer_hypotenuse(2, 3) should return False.
Passed:3. is_integer_hypotenuse(5, 12) should return True.
Passed:4. is_integer_hypotenuse(10, 10) should return False.
Passed:5. is_integer_hypotenuse(780, 1040) should return True.
Passed:6. is_integer_hypotenuse(250, 333) should return False.
'''