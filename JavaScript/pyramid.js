let symbol = "0"
let pyramidRows = 4
let invert = true;

function pyramid(symbol, pyramidRows, invert) {
  const thisPyramid = [];
  let space = " "
  let maxWidth = ((2*pyramidRows)-1)
  let currentSymbolLength;

  for (let i = 0; i<pyramidRows; i++) {


    if (invert) {
      currentSymbolLength = 2 * (pyramidRows - 1 - i) + 1;

    } else {
      currentSymbolLength = 2 * i + 1;

    }
    let thisRow = symbol.repeat(currentSymbolLength);
    let padRow = space.repeat((maxWidth-thisRow.length)/2)
    thisPyramid.push(padRow+thisRow);
  }

  let thisOutput = "\n"+thisPyramid.join("\n") +"\n";
  //console.log(thisOutput);
  return thisOutput;

}

pyramid(symbol,pyramidRows, invert)


      //thisPyramid.push(padRow+thisRow+padRow);
            //thisPyramid.unshift(padRow+thisRow+padRow);