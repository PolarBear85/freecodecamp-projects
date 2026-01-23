function isValidHex(str) {

  const regex = /#([0-9a-f]{6}|[0-9a-f]{3})$/i

  console.log(regex.test(str))

  return regex.test(str);
}

isValidHex("#1234567")

/*
Hex Validator
Given a string, determine whether it is a valid CSS hex color. A valid CSS hex color must:

Start with a #, and
be followed by either 3 or 6 hexadecimal characters.
Hexadecimal characters are numbers 0 through 9 and letters a through f (case-insensitive).

Tests
Passed:1. isValidHex("#123") should return true.
Passed:2. isValidHex("#123abc") should return true.
Passed:3. isValidHex("#ABCDEF") should return true.
Passed:4. isValidHex("#0a1B2c") should return true.
Passed:5. isValidHex("#12G") should return false.
Passed:6. isValidHex("#1234567") should return false.
Passed:7. isValidHex("#12 3") should return false.
Passed:8. isValidHex("fff") should return false.

*/