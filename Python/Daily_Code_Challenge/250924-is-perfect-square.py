import math

def is_perfect_square(n):
    
    if n < 0: 
        return False
    
    root = math.sqrt(n)
    
    return root % 1 == 0

is_perfect_square(99)
is_perfect_square(-9)

'''
Perfect Square
Given an integer, determine if it is a perfect square.

A number is a perfect square if you can multiply an integer by itself to achieve the number. For example, 9 is a perfect square because you can multiply 3 by itself to get it.

Tests
Passed:1. is_perfect_square(9) should return True.
Passed:2. is_perfect_square(49) should return True.
Passed:3. is_perfect_square(1) should return True.
Passed:4. is_perfect_square(2) should return False.
Passed:5. is_perfect_square(99) should return False.
Passed:6. is_perfect_square(-9) should return False.
Passed:7. is_perfect_square(0) should return True.
Passed:8. is_perfect_square(25281) should return True
'''