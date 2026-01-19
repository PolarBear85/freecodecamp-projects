def jbelmu(text):


    jumbled_list = [
        word[0] + "".join(sorted(word[1:-1]))+word[-1] if len(word) > 2 else word
        for word in text.split()
    ]


    print(" ".join(jumbled_list))
    return " ".join(jumbled_list)


jbelmu("the quick brown fox jumps over the lazy dog")


'''
Jbelmud Text
Given a string, return a jumbled version of that string where each word is transformed using the following constraints:

The first and last letters of the words remain in place
All letters between the first and last letter are sorted alphabetically.
The input strings will contain no punctuation, and will be entirely lowercase.

Tests
Passed:1. jbelmu("hello world") should return "hello wlord".
Passed:2. jbelmu("i love jumbled text") should return "i love jbelmud text".
Passed:3. jbelmu("freecodecamp is my favorite place to learn to code") should return "faccdeeemorp is my faiortve pacle to laern to cdoe".
Passed:4. jbelmu("the quick brown fox jumps over the lazy dog") should return "the qciuk borwn fox jmpus oevr the lazy dog"
'''