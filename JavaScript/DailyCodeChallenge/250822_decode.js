function decode(message, shift) {

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  const encodedMsg = message.split("")

  const decodedMsg = encodedMsg.map(char => {
    const index = alphabet.indexOf(char.toLowerCase()) //find the index of the current letter
    if (index == -1) { //did we find anything?
      console.log("Letter not found")
      return char
    }
    console.log(index - shift)
    const shifted = (index - shift)%26 > -1 ?  (index - shift)%26 : (index-shift) + 26
    console.log(char.toLowerCase(),index,shifted,alphabet[shifted])
    if (char != char.toLowerCase()) {
      return alphabet[shifted].toUpperCase()
    } else {
      return alphabet[shifted]
    }
  })

  console.log(decodedMsg)

  return decodedMsg.join("");
}


decode("Zqd xnt njzx?", -1)

/*
Message Decoder
Given a secret message string, and an integer representing the number of letters that were used to shift the message to encode it, return the decoded string.

A positive number means the message was shifted forward in the alphabet.
A negative number means the message was shifted backward in the alphabet.
Case matters, decoded characters should retain the case of their encoded counterparts.
Non-alphabetical characters should not get decoded.

Tests
Passed:1. decode("Xlmw mw e wigvix qiwweki.", 4) should return "This is a secret message."
Passed:2. decode("Byffi Qilfx!", 20) should return "Hello World!"
Passed:3. decode("Zqd xnt njzx?", -1) should return "Are you okay?"
Passed:4. decode("oannLxmnLjvy", 9) should return "freeCodeCamp"

*/