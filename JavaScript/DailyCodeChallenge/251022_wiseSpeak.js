function wiseSpeak(sentence) {
  const puncRegex = /[^\w\s]+/
  let returnArr = []
  const splitSent = sentence.replace(puncRegex,"").toLowerCase().split(" ")
  const keyWords = ["have","must","are","will","can"]
  const finalPunc = sentence[sentence.length-1]
  console.log(finalPunc)


  splitSent.forEach((word,index) => {
    keyWords.forEach(key => {
      if (word === key) {
        const move = splitSent.splice(0,index+1)
        move[move.length-1] = move[move.length-1]+finalPunc
        splitSent[splitSent.length-1] = splitSent[splitSent.length-1]+","

        returnArr = splitSent.concat(move)
        

      }
    })
  })

console.log(returnArr)

const capital = returnArr[0].split("")

capital[0] = capital[0].toUpperCase()
returnArr[0]= (capital.join(""))
const returnString = returnArr.join(" ")
console.log(returnString)
  

  return returnString;
}

wiseSpeak("You must speak wisely.")