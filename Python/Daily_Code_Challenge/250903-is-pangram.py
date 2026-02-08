def is_pangram(sentence, letters):


    sentence_set = set(char.lower() for char in sentence if char.isalpha())

    letters_set = set(char.lower() for char in letters if char.isalpha())

    print(sentence_set,letters_set)

    return sentence_set==letters_set

is_pangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz")

'''
Pangram

Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

    Ignore non-alphabetical characters in the word or sentence.
    Ignore letter casing in the word or sentence.

Tests

    Passed: 1. is_pangram("hello", "helo") should return True
    Passed: 2. is_pangram("hello", "hel") should return False
    Passed: 3. is_pangram("hello", "helow") should return False
    Passed: 4. is_pangram("hello world", "helowrd") should return True
    Passed: 5. is_pangram("Hello World!", "helowrd") should return True
    Passed: 6. is_pangram("Hello World!", "heliowrd") should return False
    Passed: 7. is_pangram("freeCodeCamp", "frcdmp") should return False
    Passed: 8. is_pangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz") should return True
'''