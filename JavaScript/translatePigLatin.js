function translatePigLatin(inputString) {

  const regex = /^[^aeiou]+/i

  const matched = inputString.match(regex)

  if(!matched) {

    return inputString+"way"
  } else {

    return inputString.replace(regex,"")+matched[0]+"ay"
  }

}


console.log(translatePigLatin("california"))
console.log(translatePigLatin("glove"))
console.log(translatePigLatin("rhythm"))
console.log(translatePigLatin("algorithm"))