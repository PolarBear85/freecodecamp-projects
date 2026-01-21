def is_unnatural_prime(n):

    number = abs(n)
    print(number)

    if number == 2:
        return True
    if number == 1 or number == 0 or number % 2 == 0:
        return False
    x = 3
    while x*x <= number:

        if number % x == 0:
            return False
        x+=2
        
    return True

is_unnatural_prime(99)

'''
Unnatural Prime
Given an integer, determine if that number is a prime number or a negative prime number.

A prime number is a positive integer greater than 1 that is only divisible by 1 and itself.
A negative prime number is the negative version of a positive prime number.
1 and 0 are not considered prime numbers.
Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Passed:1. is_unnatural_prime(1) should return False.
Passed:2. is_unnatural_prime(-1) should return False.
Passed:3. is_unnatural_prime(19) should return True.
Passed:4. is_unnatural_prime(-23) should return True.
Passed:5. is_unnatural_prime(0) should return False.
Passed:6. is_unnatural_prime(97) should return True.
Passed:7. is_unnatural_prime(-61) should return True.
Passed:8. is_unnatural_prime(99) should return False.
Passed:9. is_unnatural_prime(-44) should return False.

'''