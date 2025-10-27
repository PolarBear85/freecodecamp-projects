function smallestCommons(inputArr) {
  inputArr.sort((a,b) => a-b) // sort the array into order

  const numRng = [] //create a number range
  const lowest = inputArr[0] // set lowest number
  const highest= inputArr[inputArr.length-1] //set highest number

  for (let x = lowest; x<= highest; x++) { //populate the range of numbers
    numRng.push(x);
  }

  let lcm = 1 //set the LCM to 1

  numRng.forEach(number => {  //for each number in the range between the highest and lowest
    lcm = lowestCommon(number,lcm)  //recalculate the LCM
    
  })

return lcm

}

function euclid(highest,lowest) {
  while (highest % lowest !== 0) {
    let newHigh = lowest
    lowest = highest%lowest
    highest = newHigh
  }
  return lowest
}


//how do we callculate the lowest common?
function lowestCommon (number, currentLCM) { //take in the next number and the current LCM
  const gcd = euclid(number, currentLCM) //what is the GCD between the two?
  return (currentLCM * number)/gcd  //recalculate the LCM
}

smallestCommons([23, 18])


