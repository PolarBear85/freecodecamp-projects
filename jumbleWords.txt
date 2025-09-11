** start of script.js **

function jbelmu(text) {
  const returnArr = []
  const wordArr = text.split(" ")

  for (let word of wordArr) {
    if (word.length <= 1) {
      returnArr.push(word);
      continue
    } else {
    const stringArr = word.split("")
    const firstLetter = stringArr[0]
    const lastLetter = stringArr[stringArr.length-1];
    stringArr.shift();
    stringArr.pop();
    stringArr.sort();
    stringArr.push(lastLetter);
    stringArr.unshift(firstLetter);
    let returnWord = stringArr.join("");
    returnArr.push(returnWord);
    }
  }
  let newWord = returnArr.join(" ");
  console.log(newWord)
  return newWord

}


jbelmu("i love jumbled text")

** end of script.js **

