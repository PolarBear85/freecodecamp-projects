from datetime import date


def calculate_age(birthday):

    birth = date.fromisoformat(birthday)
    today = date.fromisoformat("2025-11-27")
    print(today-birth)

    age = today.year-birth.year

    has_not_happened = (today.month, today.day) < (birth.month, birth.day)

    return age - has_not_happened



calculate_age("2000-12-01")

'''
What's My Age Again?
Given the date of someone's birthday in the format YYYY-MM-DD, return the person's age as of November 27th, 2025.

Assume all birthdays are valid dates before November 27th, 2025.
Return the age as an integer.
Be sure to account for whether the person has already had their birthday in 2025.
Tests:
Passed:1. calculate_age("2000-11-20") should return 25.
Passed:2. calculate_age("2000-12-01") should return 24.
Passed:3. calculate_age("2014-10-25") should return 11.
Passed:4. calculate_age("1994-01-06") should return 31.
Passed:5. calculate_age("1994-12-14") should return 30.

'''