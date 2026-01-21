def decode(message, shift):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'


    print(alphabet)
    shifted_alphabet = alphabet[-shift:]+alphabet[:-shift]
    print(shifted_alphabet)
    translation_table = str.maketrans(alphabet+alphabet.upper(), shifted_alphabet+shifted_alphabet.upper())

    decrypted_text = message.translate(translation_table)
    print(decrypted_text)

    return decrypted_text


decode("Zqd xnt njzx?", -1)

'''
Message Decoder
Given a secret message string, and an integer representing the number of letters that were used to shift the message to encode it, return the decoded string.

A positive number means the message was shifted forward in the alphabet.
A negative number means the message was shifted backward in the alphabet.
Case matters, decoded characters should retain the case of their encoded counterparts.
Non-alphabetical characters should not get decoded.
Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Passed:1. decode("Xlmw mw e wigvix qiwweki.", 4) should return "This is a secret message."
Passed:2. decode("Byffi Qilfx!", 20) should return "Hello World!"
Passed:3. decode("Zqd xnt njzx?", -1) should return "Are you okay?"
Passed:4. decode("oannLxmnLjvy", 9) should return "freeCodeCamp"
'''