def count_change(change):

    total_change = sum(change)
    print(total_change)

    tens,hundreds = divmod(total_change,100)

    print(hundreds,tens)

    print(f"${tens}.{hundreds:02}")


    return f"${tens}.{hundreds:02}"


count_change([1])

'''
Pocket Change
Given an array of integers representing the coins in your pocket, with each integer being the value of a coin in cents, return the total amount in the format "$D.CC".

100 cents equals 1 dollar.
In the return value, include a leading zero for amounts less than one dollar and always exactly two digits for the cents.

Tests
Passed:1. count_change([25, 10, 5, 1]) should return "$0.41".
Passed:2. count_change([25, 10, 5, 1, 25, 10, 25, 1, 1, 10, 5, 25]) should return "$1.43".
Passed:3. count_change([100, 25, 100, 1000, 5, 500, 2000, 25]) should return "$37.55".
Passed:4. count_change([10, 5, 1, 10, 1, 25, 1, 1, 5, 1, 10]) should return "$0.70".
Passed:5. count_change([1]) should return "$0.01".
Passed:6. count_change([25, 25, 25, 25]) should return "$1.00".
'''