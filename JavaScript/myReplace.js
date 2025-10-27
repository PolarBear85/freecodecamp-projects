function myReplace(string, find, replace) {
  
  const regex = new RegExp(find,"gi")
  console.log(regex)
  return string.replace(regex,(matchedWord) => {
    const firstLetter = matchedWord[0]
    const replaceRest = replace.substring(1)
    if (matchedWord[0] === matchedWord[0].toUpperCase()) {
          const replaceFirst = replace[0].toUpperCase()
      return replaceFirst+replaceRest
    } else {
          const replaceFirst = replace[0].toLowerCase()
      return replaceFirst+replaceRest
    }
  })

}


myReplace("Let us go to the store", "store", "mall")

myReplace("Let us get back to more Coding", "Coding", "algorithms")