function permuteString (string,prefix="",array=[]) {


  const length = string.length
  if (length=== 0) {
    array.push(prefix)
    return array
  }

  for (let x = 0; x< length; x++) {
    let newPrefix = prefix + string.slice(x,x+1)

    const newString = string.slice(0,x)+string.slice(x+1,string.length)


    permuteString(newString,newPrefix,array)

  }


  if (prefix === "") {
    const newSet = new Set(array)

    return Array.from(newSet)
  }
  
  return array
}


console.log(permuteString("walk"))