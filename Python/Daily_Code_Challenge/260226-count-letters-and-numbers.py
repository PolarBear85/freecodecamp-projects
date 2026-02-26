def count_letters_and_numbers(s):

    letters = sum(1 for char in s if char.isalpha())
    numbers = sum(1 for char in s if char.isdigit())
    
    ls = "" if letters == 1 else "s"
    ns = "" if numbers == 1 else "s"

    return f"The string has {letters} letter{ls} and {numbers} number{ns}."


print(count_letters_and_numbers("A1"))

'''
Letter and Number Count
Given a string, return a message with the count of how many letters and numbers it contains.

Letters are A-Z and a-z.
Numbers are 0-9.
Ignore all other characters.
Return "The string has X letters and Y numbers.", where "X" is the count of letters and "Y" is the count of numbers. If either count is 1, use the singular form for that item. E.g: "1 letter" instead of "1 letters" and "1 number" instead of "1 numbers".

Tests
Passed:1. count_letters_and_numbers("helloworld123") should return "The string has 10 letters and 3 numbers.".
Passed:2. count_letters_and_numbers("Catch 22") should return "The string has 5 letters and 2 numbers.".
Passed:3. count_letters_and_numbers("A1!") should return "The string has 1 letter and 1 number.".
Passed:4. count_letters_and_numbers("12345") should return "The string has 0 letters and 5 numbers.".
Passed:5. count_letters_and_numbers("password") should return "The string has 8 letters and 0 numbers.".
'''