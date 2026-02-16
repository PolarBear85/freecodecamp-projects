def get_longest_word(sentence):

    words = [(word.strip(".,!"), len(word.strip(".,!"))) for word in sentence.split(" ")]


    
    print(words)

    long_word = max(words, key=lambda item: item[1])
    print(long_word)

    return long_word[0]

get_longest_word("Coding challenges are fun and educational.")

'''
Longest Word

Given a sentence, return the longest word in the sentence.

    Ignore periods (.) when determining word length.
    If multiple words are ties for the longest, return the first one that occurs.

Tests

    Passed: 1. get_longest_word("coding is fun") should return "coding".
    Passed: 2. get_longest_word("Coding challenges are fun and educational.") should return "educational".
    Passed: 3. get_longest_word("This sentence has multiple long words.") should return "sentence".
'''