function reverseString(strInput) {
    let splitString = strInput.split("");
    splitString.reverse();
    console.log(strInput);
    console.log(splitString);
    
    let backString = splitString.join("");
    console.log(backString);
    return backString;

}



reverseString("hello");
