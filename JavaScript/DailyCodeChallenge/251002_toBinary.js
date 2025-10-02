function toBinary(decimal) {

    const binArr = []

    if (decimal === 0) {
        return decimal.toString()
    }

    if (decimal < 0) {
        return "Not a positive integer"
    }

    while (decimal > 0) {
        binArr.unshift(decimal % 2)
        decimal = Math.floor(decimal /2)

    }

    


    return binArr.join("");
}

toBinary(5)
toBinary(12)
toBinary(50)
toBinary(99)


/*
Decimal to Binary
Given a non-negative integer, return its binary representation as a string.

A binary number uses only the digits 0 and 1 to represent any number. To convert a decimal number to binary, repeatedly divide the number by 2 and record the remainder. Repeat until the number is zero. Read the remainders last recorded to first. For example, to convert 12 to binary:

12 ÷ 2 = 6 remainder 0
6 ÷ 2 = 3 remainder 0
3 ÷ 2 = 1 remainder 1
1 ÷ 2 = 0 remainder 1
12 in binary is 1100.
*/