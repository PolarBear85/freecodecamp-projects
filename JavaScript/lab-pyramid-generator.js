** start of script.js **

let symbol = "0"
let pyramidRows = 4
let invert = true;







function pyramid(symbol, pyramidRows, invert) {
  const thisPyramid = [];
  let space = " "
  let maxWidth = ((2*pyramidRows)-1)
  let currentSymbolLength;
  
  for (let i = 0; i<pyramidRows; i++) {
    let thisRow = symbol.repeat(2*i+1);
    let padRow = space.repeat((maxWidth-thisRow.length)/2)

    if (invert) {
      thisPyramid.unshift(padRow+thisRow);
    } else
      thisPyramid.push(padRow+thisRow);
  }
  let thisOutput = "\n"+thisPyramid.join("\n") +"\n";
  console.log(thisOutput);
  return thisOutput;

}

pyramid(symbol,pyramidRows, invert)


** end of script.js **

