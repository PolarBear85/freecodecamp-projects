import re

def rgb_to_hex(rgb):

    regex = r"[0-9]{1,3}"

    colour_array = re.findall(regex,rgb)
    print(colour_array)

    hex_string = "#"+"".join([f"{int(num):02x}" for num in colour_array])
    print(hex_string)



    return hex_string


rgb_to_hex("rgb(1, 11, 111)")


'''
RGB to Hex

Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:
Input 	Output
"rgb(255, 255, 255)" 	"#ffffff"
"rgb(1, 2, 3)" 	"#010203"

    Make any letters lowercase.
    Return a # followed by six characters. Don't use any shorthand values.

Tests

    Passed: 1. rgb_to_hex("rgb(255, 255, 255)") should return "#ffffff".
    Passed: 2. rgb_to_hex("rgb(1, 11, 111)") should return "#010b6f".
    Passed: 3. rgb_to_hex("rgb(173, 216, 230)") should return "#add8e6".
    Passed: 4. rgb_to_hex("rgb(79, 123, 201)") should return "#4f7bc9".
'''