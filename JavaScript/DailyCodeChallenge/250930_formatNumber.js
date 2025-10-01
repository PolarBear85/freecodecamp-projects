function formatNumber(number) {
  const numArr = number.split("");
  console.log(numArr)

  numArr.splice(7,0,"-")
  numArr.splice(4,0,") ")
  numArr.splice(1,0," (")
  numArr.splice(0,0,"+")
  const output = numArr.join("")
  console.log(output)
  


  return numArr.join("")
}


formatNumber("05552340182")
formatNumber("15554354792")

/*
Phone Number Formatter
Given a string of ten digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".
*/