def is_balanced(s):


    midpoint = len(s)//2
    print(midpoint)

    first_half = s[:midpoint]
    second_half = s[-midpoint:]
    print(first_half,second_half)

    first_match = sum(1 for char in first_half if char.lower() in "aeiou")
    second_match = sum(1 for char in second_half if char.lower() in "aeiou")

    return first_match == second_match



is_balanced("abcdefghijklmnopqrstuvwxyz")
'''
Vowel Balance
Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

The string can contain any characters.
The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
If there's an odd number of characters in the string, ignore the center character.

Tests
Passed:1. is_balanced("racecar") should return True.
Passed:2. is_balanced("Lorem Ipsum") should return True.
Passed:3. is_balanced("Kitty Ipsum") should return False.
Passed:4. is_balanced("string") should return False.
Passed:5. is_balanced(" ") should return True.
Passed:6. is_balanced("abcdefghijklmnopqrstuvwxyz") should return False.
Passed:7. is_balanced("123A#b!E&*456-o.U") should return True.

'''