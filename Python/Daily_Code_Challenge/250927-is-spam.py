import re

def is_spam(number):

    phone_regex = r"\+([0-9]+)\s+\(([0-9]{3})\)\s([0-9]{3})-([0-9]{4})"

    phone_match = re.search(phone_regex,number)
    print(phone_match)

    if not phone_match:
        return False

    country_code, area_code, local1, local2 = phone_match.groups()

    checks = []
    #Country Code check
    checks.append(len(country_code) > 2 or not country_code.startswith("0"))

    #Area Code check
    checks.append(int(area_code) > 900 or int(area_code) < 200)

    #Local code check
    local1_sum = sum(int(digit) for digit in local1)
    checks.append(str(local1_sum) in local2)

    #Total Code check
    clean_number = "".join(filter(str.isdigit, number))
    print(clean_number)
    digit_regex = r"(\d)\1{3}"
    consecutive_match = re.search(digit_regex, clean_number)
    checks.append(bool(consecutive_match))


    print(checks)
    return any(checks)


is_spam("+0 (555) 564-1987")

'''
Spam Detector

Given a phone number in the format "+A (BBB) CCC-DDDD", where each letter represents a digit as follows:

    A represents the country code and can be any number of digits.
    BBB represents the area code and will always be three digits.
    CCC and DDDD represent the local number and will always be three and four digits long, respectively.

Determine if it's a spam number based on the following criteria:

    The country code is greater than 2 digits long or doesn't begin with a zero (0).
    The area code is greater than 900 or less than 200.
    The sum of first three digits of the local number appears within last four digits of the local number.
    The number has the same digit four or more times in a row (ignoring the formatting characters).

Tests

    Passed: 1. is_spam("+0 (200) 234-0182") should return False.
    Passed: 2. is_spam("+091 (555) 309-1922") should return True.
    Passed: 3. is_spam("+1 (555) 435-4792") should return True.
    Passed: 4. is_spam("+0 (955) 234-4364") should return True.
    Passed: 5. is_spam("+0 (155) 131-6943") should return True.
    Passed: 6. is_spam("+0 (555) 135-0192") should return True.
    Passed: 7. is_spam("+0 (555) 564-1987") should return True.
    Passed: 8. is_spam("+00 (555) 234-0182") should return False.
'''