def has_no_repeats(s):

    for letter in range(1,len(s)):
        if s[letter] == s[letter-1]:
            return False

    return True



has_no_repeats("The quick brown fox jumped over the lazy dog.")


'''
No Consecutive Repeats
Given a string, determine if it has no repeating characters.

A string has no repeats if it does not have the same character two or more times in a row.
Tests:
Passed:1. has_no_repeats("hi world") should return True.
Passed:2. has_no_repeats("hello world") should return False.
Passed:3. has_no_repeats("abcdefghijklmnopqrstuvwxyz") should return True.
Passed:4. has_no_repeats("freeCodeCamp") should return False.
Passed:5. has_no_repeats("The quick brown fox jumped over the lazy dog.") should return True.
Passed:6. has_no_repeats("Mississippi") should return False.

'''