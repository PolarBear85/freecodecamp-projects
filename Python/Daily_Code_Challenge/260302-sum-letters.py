def sum_letters(s):

    answer = sum([int(letter,36)-9 for letter in s if letter.isalpha()])

    print(answer)
    return answer



sum_letters("The quick brown fox jumps over the lazy dog.")

'''
Sum the Letters
Given a string, return the sum of its letters.

Letters are A-Z in uppercase or lowercase
Letter values are: "A" = 1, "B" = 2, ..., "Z" = 26
Uppercase and lowercase letters have the same value.
Ignore all non-letter characters.

Tests
Passed:1. sum_letters("Hello") should return 52.
Passed:2. sum_letters("freeCodeCamp") should return 94.
Passed:3. sum_letters("The quick brown fox jumps over the lazy dog.") should return 473.
Passed:4. sum_letters("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nisl, pretium eu varius blandit, facilisis quis eros. Vestibulum ante ipsum primis in faucibus orci.") should return 1681.
Passed:5. sum_letters("</404>") should return 0.
'''