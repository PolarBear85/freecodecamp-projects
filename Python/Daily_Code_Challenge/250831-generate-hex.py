import random
HEX_LETTERS = "0123456789ABCDEF"

def random_number(char):
    

    if char == "F": return "F"
    else: return HEX_LETTERS[random.randint(0,15)]

def generate_hex(color):

    hex_table = {
        "red":"FF0000",
        "green":"00FF00",
        "blue":"0000FF"
    }

    if color not in hex_table:
        return "Invalid color"

    


    hex_colour = [random_number(char) for char in hex_table[color]]


    print("".join(hex_colour))


    return "".join(hex_colour)


generate_hex("red")

'''
Hex Generator
Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.

The function should handle "red", "green", or "blue" as an input argument.
If the input is not one of those, the function should return "Invalid color".
The function should return a random six-character hex color code where the input color value is greater than any of the others.
Example of valid outputs for a given input:
Input	Output
"red"	"FF0000"
"green"	"00FF00"
"blue"	"0000FF"

Tests
Passed:1. generate_hex("yellow") should return "Invalid color".
Passed:2. generate_hex("red") should return a six-character string.
Passed:3. generate_hex("red") should return a valid six-character hex color code.
Passed:4. generate_hex("red") should return a valid hex color with a higher red value than other colors.
Passed:5. Calling generate_hex("red") twice should return two different hex color values where red is dominant.
Passed:6. Calling generate_hex("green") twice should return two different hex color values where green is dominant.
Passed:7. Calling generate_hex("blue") twice should return two different hex color values where blue is dominant.
'''