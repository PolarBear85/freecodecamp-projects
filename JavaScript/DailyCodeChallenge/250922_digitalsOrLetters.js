function digitsOrLetters(str) {

    const numRegex = /[0-9]/gi
    const alphaRegex = /[a-zA-Z]/gi

    const foundNum = Array.from(str.matchAll(numRegex)).length
    const foundAlpha = Array.from(str.matchAll(alphaRegex)).length

    if (foundNum > foundAlpha) {
        return "digits"
    } else if (foundNum < foundAlpha) {
        return "letters"
    } else {
        return "tie"
    }

}


digitsOrLetters("abc123")

/*
Digits vs Letters
Given a string, return "digits" if the string has more digits than letters, "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.

Digits consist of 0-9.
Letters consist of a-z in upper or lower case.
Ignore any other characters.
*/