def parse_roman_numeral(numeral):

    num_table = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
    }

    total = 0

    for index,item in enumerate(numeral):
        try:
            next_item = numeral[index+1]
            if num_table[next_item] > num_table[item]:
                total -= num_table[item]
            else:
                total += num_table[item]
        except:
            total += num_table[item]
        

    print(total)

    return total


parse_roman_numeral("IV")

'''
Roman Numeral Parser
Given a string representing a Roman numeral, return its integer value.

Roman numerals consist of the following symbols and values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.

Tests
Passed:1. parse_roman_numeral("III") should return 3.
Passed:2. parse_roman_numeral("IV") should return 4.
Passed:3. parse_roman_numeral("XXVI") should return 26.
Passed:4. parse_roman_numeral("XCIX") should return 99.
Passed:5. parse_roman_numeral("CDLX") should return 460.
Passed:6. parse_roman_numeral("DIV") should return 504.
Passed:7. parse_roman_numeral("MMXXV") should return 2025.
'''