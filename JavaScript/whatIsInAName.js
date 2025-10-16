function whatIsInAName(array,source) {

  const sourceKeys = Object.keys(source)
  //console.log(sourceKeys)

  const returnArr = array.filter(object => {
    //console.log("the object is: ")
    //console.log(object)
    return sourceKeys.every(key => {
      //console.log(`does the object have the key: ${key}`)
      //console.log(object.hasOwnProperty(key))
      //console.log(`Does the object have the value of ${source[key]}`)
      //console.log(object[key]===source[key])
      
      

      return object.hasOwnProperty(key) && object[key]===source[key]
    })
    //console.log("------------------------------")
  })

return returnArr

}



whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })