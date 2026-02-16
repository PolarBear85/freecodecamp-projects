def format_number(number):

    formatted = f"+{number[0]} ({number[1:4]}) {number[4:7]}-{number[7:11]}"
    print(formatted)

    return formatted

format_number("05552340182")

'''
Phone Number Formatter

Given a string of eleven digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".
Tests

    Passed: 1. format_number("05552340182") should return "+0 (555) 234-0182".
    Passed: 2. format_number("15554354792") should return "+1 (555) 435-4792".
'''
