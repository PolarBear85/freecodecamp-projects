import re

def to_camel_case(s):

    words = [w for w in re.split(r'[_\-\s]+', s.lower()) if w]

    print(words)

    if not words:
        return ""

    return words[0] + "".join(w.capitalize() for w in words[1:])


to_camel_case("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk")
to_camel_case("FREE cODE cAMP")


'''
camelCase
Given a string, return its camel case version using the following rules:

Words in the string argument are separated by one or more characters from the following set: space ( ), dash (-), or underscore (_). Treat any sequence of these as a word break.
The first word should be all lowercase.
Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
All spaces and separators should be removed.
Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Passed:1. to_camel_case("hello world") should return "helloWorld".
Passed:2. to_camel_case("HELLO WORLD") should return "helloWorld".
Passed:3. to_camel_case("secret agent-X") should return "secretAgentX".
Passed:4. to_camel_case("FREE cODE cAMP") should return "freeCodeCamp".
Passed:5. to_camel_case("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk") should return "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk".
'''