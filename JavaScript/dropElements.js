function dropElements(arr,func) {

  let firstIndex = -1

  for (let i = 0; i<arr.length; i++) {
    if (func(arr[i])) {
      console.log(`Found true at ${i}`)
      firstIndex = i
      break
    }
  }
  if (firstIndex=== -1) {
    return []
  }
  const returnArr = arr.slice(firstIndex)
  console.log(returnArr)
  return returnArr


}


dropElements([0, 1, 0, 1], function(n) {return n === 1;})
dropElements([1, 2, 3, 4], function(n) {return n > 5;})