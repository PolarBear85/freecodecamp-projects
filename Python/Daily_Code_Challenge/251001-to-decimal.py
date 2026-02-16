def to_decimal(binary):
    print(binary)

    binary_reverse = binary[::-1]

    print(binary_reverse)

    total = sum([int(number) * (2**int(index)) for index,number in enumerate(binary_reverse)])

    print(total)

    return total


to_decimal("10010")

'''
Binary to Decimal

Given a string representing a binary number, return its decimal equivalent as a number.

A binary number uses only the digits 0 and 1 to represent any number. To convert binary to decimal, multiply each digit by a power of 2 and add them together. Start by multiplying the rightmost digit by 2^0, the next digit to the left by 2^1, and so on. Once all digits have been multiplied by a power of 2, add the result together.

For example, the binary number 101 equals 5 in decimal because:

1 * 2^2 + 0 * 2^1 + 1 * 2^0 = 4 + 0 + 1 = 5

Tests

    Passed: 1. to_decimal("101") should return 5.
    Passed: 2. to_decimal("1010") should return 10.
    Passed: 3. to_decimal("10010") should return 18.
    Passed: 4. to_decimal("1010101") should return 85.
'''