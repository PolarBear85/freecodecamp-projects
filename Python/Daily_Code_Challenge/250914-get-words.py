import re, collections

def get_words(paragraph):

    words = re.findall(r'[a-z]+', paragraph.lower())
    print(words)
    counts = collections.Counter(words).most_common(3)
    print(counts)
    print([word for word, count in counts])
    return [word for word, count in counts]



get_words("Coding in Python is fun because coding Python allows for coding in Python easily while coding")

'''
Word Frequency
Given a paragraph, return an array of the three most frequently occurring words.

Words in the paragraph will be separated by spaces.
Ignore case in the given paragraph. For example, treat Hello and hello as the same word.
Ignore punctuation in the given paragraph. Punctuation consists of commas (,), periods (.), and exclamation points (!).
The returned array should have all lowercase words.
The returned array should be in descending order with the most frequently occurring word first.

Tests
Waiting:1. get_words("Coding in Python is fun because coding Python allows for coding in Python easily while coding") should return ["coding", "python", "in"].
Waiting:2. get_words("I like coding. I like testing. I love debugging!") should return ["i", "like", "coding"].
Waiting:3. get_words("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!") should return ["debug", "test", "deploy"].
'''