def is_match(fingerprint_a, fingerprint_b):

    if len(fingerprint_a) != len(fingerprint_b):
        return False

    iterator = 0

    for index,letter in enumerate(fingerprint_a):
        if letter != fingerprint_b[index]:
            iterator+= 1
    
    return iterator == 0 or iterator/len(fingerprint_a) <= 0.1


is_match("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat")

'''
Fingerprint Test
Given two strings representing fingerprints, determine if they are a match using the following rules:

Each fingerprint will consist only of lowercase letters (a-z).
Two fingerprints are considered a match if:
They are the same length.
The number of differing characters does not exceed 10% of the fingerprint length.
Tests:
Passed:1. is_match("helloworld", "helloworld") should return True.
Passed:2. is_match("helloworld", "helloworlds") should return False.
Passed:3. is_match("helloworld", "jelloworld") should return True.
Passed:4. is_match("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog") should return True.
Passed:5. is_match("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog") should return True.
Passed:6. is_match("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat") should return False.
'''