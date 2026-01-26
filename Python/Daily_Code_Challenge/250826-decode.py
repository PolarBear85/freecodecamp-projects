def decode(s):

    stack = [];
    current_string = ""

    for char in s:
        if char =="(":
            stack.append(current_string)
            current_string = ""
        elif char == ")":
            reversed_part = current_string[::-1]
            current_string = stack.pop()+reversed_part
        else:
            current_string+= char

    return current_string


'''
Reverse Parenthesis
Given a string that contains properly nested parentheses, return the decoded version of the string using the following rules:

All characters inside each pair of parentheses should be reversed.
Parentheses should be removed from the final result.
If parentheses are nested, the innermost pair should be reversed first, and then its result should be included in the reversal of the outer pair.
Assume all parentheses are evenly balanced and correctly nested.

Tests
Passed:1. decode("(f(b(dc)e)a)") should return "abcdef".
Passed:2. decode("((is?)(a(t d)h)e(n y( uo)r)aC)") should return "Can you read this?".
Passed:3. decode("f(Ce(re))o((e(aC)m)d)p") should return "freeCodeCamp".
'''