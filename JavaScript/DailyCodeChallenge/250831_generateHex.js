function generateHex(color) {

  const hexLetters = "0123456789ABCDEF"
  hexLetters[(Math.floor(Math.random() * 16))]

  const hexTable = {
    "red":"FF0000",
    "green":"00FF00",
    "blue":"0000FF"
  }

  if (!hexTable[color]) return "Invalid color"

  const randomColour = hexTable[color]
    .split("")
    .map(digit => {
      return digit =="F"? "F":hexLetters[(Math.floor(Math.random() * 16))]
    })
    .join("")


  console.log(randomColour)

  return randomColour
}

generateHex("yellow")
generateHex("red")

/*
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
Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Passed:1. generateHex("yellow") should return "Invalid color".
Passed:2. generateHex("red") should return a six-character string.
Passed:3. generateHex("red") should return a valid six-character hex color code.
Passed:4. generateHex("red") should return a valid hex color with a higher red value than other colors.
Failed:5. Calling generateHex("red") twice should return two different hex color values where red is dominant.
Failed:6. Calling generateHex("green") twice should return two different hex color values where green is dominant.
Failed:7. Calling generateHex("blue") twice should return two different hex color values where blue is dominant.
*/