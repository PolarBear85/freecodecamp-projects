import re

def is_valid_hex(s):

    regex = r'#([0-9a-f]{6}|[0-9a-f]{3})$'

    string = re.search(regex,s,flags=re.IGNORECASE)

    print(bool(string))

    return bool(string)

is_valid_hex("#123")
is_valid_hex("#1234567")

'''
Hex Validator
Given a string, determine whether it is a valid CSS hex color. A valid CSS hex color must:

Start with a #, and
be followed by either 3 or 6 hexadecimal characters.
Hexadecimal characters are numbers 0 through 9 and letters a through f (case-insensitive).

Tests
Passed:1. is_valid_hex("#123") should return True.
Passed:2. is_valid_hex("#123abc") should return True.
Passed:3. is_valid_hex("#ABCDEF") should return True.
Passed:4. is_valid_hex("#0a1B2c") should return True.
Passed:5. is_valid_hex("#12G") should return False.
Passed:6. is_valid_hex("#1234567") should return False.
Passed:7. is_valid_hex("#12 3") should return False.
Passed:8. is_valid_hex("fff") should return False.
'''