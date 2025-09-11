** start of script.js **

function jbelmu(text) {
  const wordArr = text.split(" ")
  const returnArr = wordArr.map(jumble)
  return returnArr.join(" ");

}

function jumble(word) {
  if (word.length <= 1) {
    return word
  }
  const stringArr = word.split("");
  const firstLetter = stringArr[0];
  const lastLetter = stringArr[stringArr.length-1];
  stringArr.shift();
  stringArr.pop();
  stringArr.sort();
  stringArr.push(lastLetter);
  stringArr.unshift(firstLetter);
  return stringArr.join("");

}


jbelmu("the qciuk borwn fox jmpus oevr the lazy dog")

** end of script.js **

