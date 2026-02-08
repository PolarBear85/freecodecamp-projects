def repeat_vowels(s):

    vowels = 'AEIOUaeiou'
    repeat = 0


    result_list = []

    for char in s:
        if char in vowels:
            
            result_list.append(char + char.lower()*(repeat))
            repeat+=1
        else:
            result_list.append(char)

    print(result_list)

    return "".join(result_list)



repeat_vowels("freeCodeCamp")

'''
Vowel Repeater

Given a string, return a new version of the string where each vowel is duplicated one more time than the previous vowel you encountered. For instance, the first vowel in the sentence should remain unchanged. The second vowel should appear twice in a row. The third vowel should appear three times in a row, and so on.

    The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
    The original vowel should keeps its case.
    Repeated vowels should be lowercase.
    All non-vowel characters should keep their original case.

Tests

    Waiting: 1. repeat_vowels("hello world") should return "helloo wooorld".
    Waiting: 2. repeat_vowels("freeCodeCamp") should return "freeeCooodeeeeCaaaaamp".
    Waiting: 3. repeat_vowels("AEIOU") should return "AEeIiiOoooUuuuu".
    Waiting: 4. repeat_vowels("I like eating ice cream in Iceland") should return "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand"
'''