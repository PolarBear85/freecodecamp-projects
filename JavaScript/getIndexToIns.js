function getIndexToIns(arr,number) {
  arr.sort((a, b) => a-b)
  console.log(arr)

  const highIndex = arr.findIndex(index => index >= number)

  console.log(highIndex)

  return highIndex

  
}


getIndexToIns([10, 20, 30, 40, 50], 35)
getIndexToIns([10, 20, 30, 40, 50], 30)