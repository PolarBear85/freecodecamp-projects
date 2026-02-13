
function generateSlug(str) {

  const nonAlphaNumeric = /[^A-Z0-9\s]/gi

 const answer = str.toLowerCase()
                    .replace(nonAlphaNumeric,"")
                    .trim()
                    .replace(/\s+/g,"%20")

  console.log(answer)
  return answer;
}

generateSlug("  ?H^3-1*1]0! W[0%R#1]D  ")




// OLD CODE FROM FIRST TRY
function generateSlug(str) {

    const trimString = str.trim().toLowerCase();
    console.log(trimString)
    const charDel = /[^a-z0-9 ]/gi
    const spaceDel = /(\s+)/gi
    let returnStr = trimString.replace(charDel,"");
    returnStr = returnStr.replace(spaceDel,"%20")
    

    console.log(returnStr)


    return returnStr;
}

//generateSlug("helloWorld")
//generateSlug("hello world!")
generateSlug("hello  world")
//generateSlug("  ?H^3-1*1]0! W[0%R#1]D  ")

/*
Given a string, return a URL-friendly version of the string using the following constraints:

All letters should be lowercase.
All characters that are not letters, numbers, or spaces should be removed.
All spaces should be replaced with the URL-encoded space code %20.
Consecutive spaces should be replaced with a single %20.
The returned string should not have leading or trailing %20.
*/