function convertHTML(string) {

  const convert = {
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&apos;"
  }

  const splitString = string.split("")

  //console.log(splitString)


  const returnArr = splitString.map(letter => {
    return convert[letter] ? convert[letter]: letter
  })

  const returnString = returnArr.join("")
  return returnString

}

convertHTML("Dolce & Gabbana")
convertHTML("Hamburgers < Pizza < Tacos")

/*
Implement an HTML Entity Converter
This lab is about converting special characters in a string with their corresponding HTML entities.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a convertHTML function that accepts a string as an argument.

The convertHTML function should return a new string by converting special characters in the argument string to their corresponding HTML entities.

& should be converted to &amp;.
< should be converted to &lt;.
> should be converted to &gt;.
" should be converted to &quot;.
' should be converted to &apos;.

*/