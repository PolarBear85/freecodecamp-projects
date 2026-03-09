function isValidHSL(hsl) {
  
  const regex = /^hsl\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})%\s*,\s*([0-9]{1,3})%\s*\)(?:\s*;)?/i

  const matches = hsl.match(regex)

  if (!matches) return false 

  if (matches[1] < 0 || matches[1]>360) {
    return false
  }

    if (matches[2] < 0 || matches[2]>100) {
    return false
  }

    if (matches[3] < 0 && matches[3]>100) {
    return false
  }

  return true

}

isValidHSL("hsl(361, 50%, 80%)")

/*
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
Passed:1. isValidHSL("hsl(240, 50%, 50%)") should return true.
Passed:2. isValidHSL("hsl( 200 , 50% , 75% )") should return true.
Passed:3. isValidHSL("hsl(99,60%,80%);") should return true.
Passed:4. isValidHSL("hsl(0, 0%, 0%) ;") should return true.
Passed:5. isValidHSL("hsl(  10  ,  20%   ,  30%   )    ;") should return true.
Passed:6. isValidHSL("hsl(361, 50%, 80%)") should return false.
Passed:7. isValidHSL("hsl(300, 101%, 70%)") should return false.
Passed:8. isValidHSL("hsl(200, 55%, 75)") should return false.
Passed:9. isValidHSL("hsl (80, 20%, 10%)") should return false.

*/