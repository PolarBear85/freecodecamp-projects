** start of script.js **

function largestPrimeFactor(number) {  const factorArr = []
  let thisNumber = number //take the number

  while (thisNumber % 2 === 0 && thisNumber >=2) { //repeatedly divide by 2 until it can't divide any further but is still larger than 2
    factorArr.push(2)
    thisNumber /= 2;
    console.log(thisNumber);
  }

  console.log(thisNumber)
  let iterator = 3 //once done, repeat with 3
  
  while (thisNumber >= iterator) {
    if (thisNumber % iterator === 0) {
      factorArr.push(iterator);
      thisNumber /= iterator;
      console.log(thisNumber)
    } else {
      iterator += 2;
    }
    
  }
  console.log(factorArr)

  return factorArr[factorArr.length-1];

}

largestPrimeFactor(600851475143);


** end of script.js **

