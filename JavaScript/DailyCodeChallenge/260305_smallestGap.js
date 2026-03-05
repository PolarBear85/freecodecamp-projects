function smallestGap(str) {

  const lastSeen = {}
  let smallestGap = Infinity
  let smallestStr = null

  for (let x = 0; x<str.length; x++) {
    const thisChar = str[x]

    if (lastSeen.hasOwnProperty(thisChar)) {
      const startIndex = lastSeen[thisChar]
      const gapContent = str.substring(startIndex+1,x)
      const gapLength = gapContent.length

      if (gapLength < smallestGap) {
        smallestStr = gapContent
        smallestGap = gapLength
      }
    }

    lastSeen[thisChar] = x

  }

  console.log(smallestStr)


  return smallestStr;
}


console.log(smallestGap("The quick brown fox jumps over the lazy dog."))

/*
Smallest Gap
Given a string, return the substring between the two identical characters that have the smallest number of characters between them (smallest gap).

There will always be at least one pair of matching characters.
The returned substring should exclude the matching characters.
If two or more gaps are the same length, return the characters from the first one.
For example, given "ABCDAC", return "DA".

Only "A" and "C" repeat in the string.
The number of characters between the two "A" characters is 3, and between the "C" characters is 2.
So return the string between the two "C" characters.
Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Passed:1. smallestGap("ABCDAC") should return "DA".
Passed:2. smallestGap("racecar") should return "e".
Passed:3. smallestGap("A{5e^SD*F4i!o#q6e&rkf(po8|we9+kr-2!3}=4") should return "#q6e&rkf(p".
Passed:4. smallestGap("Hello World") should return "".
Passed:5. smallestGap("The quick brown fox jumps over the lazy dog.") should return "fox".
*/