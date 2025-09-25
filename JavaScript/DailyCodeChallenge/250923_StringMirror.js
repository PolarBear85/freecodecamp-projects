function isMirror(str1, str2) {

    const regex = /[^a-zA-Z]/gi

    const cleanedStr1 = str1.replace(regex,"")
    console.log(cleanedStr1)

    const flipped = str2
    .split("")
    .reverse()
    .join("")
    .replace(regex,"")
    console.log(flipped)

    return cleanedStr1 === flipped;
}


isMirror("Hello World", "!dlroW !olleH")
console.log(isMirror("Hello World", "!dlroW !olleH"))
isMirror("Hello World", "dlroW-olleH")