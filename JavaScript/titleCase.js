function titleCase(string) {
  const splitString = string.toLowerCase().split(" ")
  console.log(splitString)
  const returnString = []

  splitString.forEach(word => {
    const splitWord = word.split("")
    console.log(splitWord)
    splitWord[0] = word[0].toUpperCase()
    returnString.push(splitWord.join(""))
    
  })

  return returnString.join(" ")
}


titleCase("I'm a little tea pot")