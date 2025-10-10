function fearNotLetter(string) {
  const alpha = "abcdefghijklmnopqrstuvwxyz"
  const startPoint = alpha.indexOf(string[0])
  console.log(startPoint)

  for (let i = 0; i<string.length; i++) {
    console.log(string[i]===alpha[i+startPoint])
    if (string[i] !== alpha[i+startPoint]) {
      console.log('mismatch found')
      return alpha[i+startPoint]
    }
    

  }

  return
}


fearNotLetter("abce")