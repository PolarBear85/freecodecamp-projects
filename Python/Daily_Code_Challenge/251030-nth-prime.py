import math
def nth_prime(n):
    # Rosser's Theorem bound
    ln_n = math.log(n)
    ln_ln_n = math.log(ln_n)
    
    upper_limit = int(n * (ln_n + ln_ln_n))
    upper_sqrt = math.sqrt(upper_limit)

    prime_arr = [True] * (upper_limit + 1)
    prime_arr[0] = prime_arr[1] = False


    list_length = len(prime_arr)
    top_bound = int(math.sqrt(list_length))
    for check in range(0,top_bound):
        if prime_arr[check] == True:
            for not_prime in range(check*check,list_length,check):
                prime_arr[not_prime] = False


    print(prime_arr)

    all_primes = [index for index,number in enumerate(prime_arr) if number]

    print(all_primes)



    return all_primes[n-1]


print(nth_prime(10))

'''
Nth Prime
A prime number is a positive integer greater than 1 that is divisible only by 1 and itself. The first five prime numbers are 2, 3, 5, 7, and 11.

Given a positive integer n, return the nth prime number. For example, given 5 return the 5th prime number: 11.

Tests
Passed:1. nth_prime(5) should return 11.
Passed:2. nth_prime(10) should return 29.
Passed:3. nth_prime(16) should return 53.
Passed:4. nth_prime(99) should return 523.
Passed:5. nth_prime(1000) should return 7919.
'''