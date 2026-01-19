def are_anagrams(str1, str2):

    first_word = sorted(str1.upper().replace(" ",""))
    second_word=sorted(str2.upper().replace(" ",""))

    return first_word==second_word




are_anagrams("School master", "The classroom")


'''
Anagram Checker
Given two strings, determine if they are anagrams of each other (contain the same characters in any order).

Ignore casing and white space.

Tests
Passed:1. are_anagrams("listen", "silent") should return true.
Passed:2. are_anagrams("School master", "The classroom") should return true.
Passed:3. are_anagrams("A gentleman", "Elegant man") should return true.
Passed:4. are_anagrams("Hello", "World") should return false.
Passed:5. are_anagrams("apple", "banana") should return false.
Passed:6. are_anagrams("cat", "dog") should return false.

'''