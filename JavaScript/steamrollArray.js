function steamrollArray (inputArr) {

  const returnArr = []
  inputArr.forEach(item => {
    iterateArr(item,returnArr)
  })

  console.log(returnArr)
  return returnArr
}

function iterateArr(input, accumArr) {
  console.log("iteration called. Checking if is an array passed")
  if (Array.isArray(input)) {
    console.log("This is an array")
    input.forEach(item => {
      console.log(`Calling futher iterations with ${item}`)
      iterateArr(item,accumArr)
    })
  } else {
    console.log(`This is not an array, returning ${input}`)
    accumArr.push(input)
  }
}


steamrollArray([1, {}, [3, [[4]]]])