function decode(message, shift) {

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
                  //01234567890123456789012345

  const encodedMsg = message.split("")
  const encodedAlpha = []
  let shifted = shift

//Create a decoding alphabet
  while (encodedAlpha.length < alphabet.length) {
    if (shifted > 25) {
      shifted -= 26
    }
    if (shifted < 0) {
      shifted +=26
    }
    console.log(shifted)
    encodedAlpha.push(alphabet[shifted])
    shifted++
  }

  const decodedMsg = encodedMsg.map(char => {
    const newPosition = encodedAlpha.indexOf(char.toLowerCase())
    //console.log(char,newPosition,alphabet[newPosition])
    if (newPosition == -1) {
      return char
    }
    if (char == char.toLowerCase()) {
      return alphabet[newPosition]
    } else {
      return alphabet[newPosition].toUpperCase()
    }
    
  })

  //console.log(encodedAlpha)
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
Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Passed:1. decode("Xlmw mw e wigvix qiwweki.", 4) should return "This is a secret message."
Passed:2. decode("Byffi Qilfx!", 20) should return "Hello World!"
Passed:3. decode("Zqd xnt njzx?", -1) should return "Are you okay?"
Passed:4. decode("oannLxmnLjvy", 9) should return "freeCodeCamp"

*/


/*

Alternative:
function decode(message, shift) {

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  const encodedMsg = message.split("")

  const decodedMsg = encodedMsg.map(char => {
    //console.log(char,char.toLowerCase())
    const index = alphabet.indexOf(char.toLowerCase())
    const shifted = Math.abs(index - shift)%26
    console.log(shifted,alphabet[shifted])
  })

  return message;
}

decode("oannLxmnLjvy", 9)

*/

