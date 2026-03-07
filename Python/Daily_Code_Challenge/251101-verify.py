def verify(message, key, signature):

    message_sum = word_sum(message)
    key_sum = word_sum(key)

    return message_sum+key_sum == signature

def word_sum(word):
    return sum([
        int(letter,36)+17 if letter.isalpha() and letter.isupper()
        else int(letter,36)-9 if letter.isalpha() and letter.islower()
        else 0 
        for letter in word])


verify("foo", "bar", 57)

'''
Signature Validation

Given a message string, a secret key string, and a signature number, determine if the signature is valid using this encoding method:

    Letters in the message and secret key have these values:
        a to z have values 1 to 26 respectively.
        A to Z have values 27 to 52 respectively.
    All other characters have no value.
    Compute the signature by taking the sum of the message plus the sum of the secret key.

For example, given the message "foo" and the secret key "bar", the signature would be 57:

f (6) + o (15) + o (15) = 36
b (2) + a (1) + r (18) = 21
36 + 21 = 57

Check if the computed signature matches the provided signature.
Tests

    Passed: 1. verify("foo", "bar", 57) should return True.
    Passed: 2. verify("foo", "bar", 54) should return False.
    Passed: 3. verify("freeCodeCamp", "Rocks", 238) should return True.
    Passed: 4. verify("Is this valid?", "No", 210) should return False.
    Passed: 5. verify("Is this valid?", "Yes", 233) should return True.
    Passed: 6. verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514) should return True.

'''