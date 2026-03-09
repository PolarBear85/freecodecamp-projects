import re

def is_valid_hsl(hsl):

    regex = r"^hsl\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})%\s*,\s*([0-9]{1,3})%\s*\)(?:\s*;)?"

    match = re.match(regex,hsl)

    if not match:
        return False

    print(f"All captured values: {match.groups()}")

    if not 360 >= int(match.group(1)) >=0:
        return False
    
    if not 100 >= int(match.group(2)) >=0:
        return False

    
    if not 100 >= int(match.group(3)) >=0:
        return False

    return True





print(is_valid_hsl("hsl(240, 50%, 50%)"))

'''
HSL Validator
Given a string, determine whether it is a valid CSS hsl() color value.

A valid HSL value must be in the format "hsl(h, s%, l%)", where:

h (hue) must be a number between 0 and 360 (inclusive).
s (saturation) must be a percentage between 0% and 100%.
l (lightness) must be a percentage between 0% and 100%.
Spaces are only allowed:

After the opening parenthesis
Before and/or after the commas
Before and/or after closing parenthesis
Optionally, the value can end with a semi-colon (";").

For example, "hsl(240, 50%, 50%)" is a valid HSL value.

Tests
Passed:1. is_valid_hsl("hsl(240, 50%, 50%)") should return True.
Passed:2. is_valid_hsl("hsl( 200 , 50% , 75% )") should return True.
Passed:3. is_valid_hsl("hsl(99,60%,80%);") should return True.
Passed:4. is_valid_hsl("hsl(0, 0%, 0%) ;") should return True.
Passed:5. is_valid_hsl("hsl(  10  ,  20%   ,  30%   )    ;") should return True.
Passed:6. is_valid_hsl("hsl(361, 50%, 80%)") should return False.
Passed:7. is_valid_hsl("hsl(300, 101%, 70%)") should return False.
Passed:8. is_valid_hsl("hsl(200, 55%, 75)") should return False.
Passed:9. is_valid_hsl("hsl (80, 20%, 10%)") should return False.
'''
