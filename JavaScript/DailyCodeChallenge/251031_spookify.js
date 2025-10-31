function spookify(boo) {


  let switchCase = true
  const regex = /[_-]/gi
  const booNew = boo.replace(regex,"~")
  console.log(booNew)

  const sentArr = booNew.split("").map(letter => {
    console.log(letter)
    if (letter==="~") {
      return letter
    }
    const returnLetter =  switchCase ? letter.toUpperCase() : letter.toLowerCase()
    switchCase = !switchCase
    return returnLetter
  })

console.log(sentArr.join(""))

  return sentArr.join("")
}

spookify("TRICK-or-TREAT")

/*
SpOoKy~CaSe
Given a string representing a variable name, convert it to "spooky case" using the following constraints:

Replace all underscores (_), and hyphens (-) with a tilde (~).
Capitalize the first letter of the string, and every other letter after that, ignore the tilde character when counting.
For example, given hello_world, return HeLlO~wOrLd.


*/