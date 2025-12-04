function isValidMessage(message, validator) {

  const splitMessage = message.toLowerCase().split(" ")
  const valids = validator.toLowerCase().split("")

  if(splitMessage.length !== valids.length) {
    return false
  }

  const answer = splitMessage.every((word, index) => {
    console.log(word[0])
    console.log(valids[index])
return word[0] === valids[index]
  })

console.log(answer)
  return answer;
}

isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT")


/*
Message Validator
Given a message string and a validation string, determine if the message is valid.

A message is valid if each word in the message starts with the corresponding letter in the validation string, in order.
Letters are case-insensitive.
Words in the message are separated by single spaces.

Tests
Waiting:1. isValidMessage("hello world", "hw") should return true.
Waiting:2. isValidMessage("ALL CAPITAL LETTERS", "acl") should return true.
Waiting:3. isValidMessage("Coding challenge are boring.", "cca") should return false.
Waiting:4. isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD") should return true.
Waiting:5. isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT") should return false.

*/