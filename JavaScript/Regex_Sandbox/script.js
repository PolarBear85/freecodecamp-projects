const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");



function getFlags() {
    const caseInsensitive = caseInsensitiveFlag.checked ? "i" : "";
    const global = globalFlag.checked ? "g":"";
    return caseInsensitive + global;
}



function testRegex() {
    
    const hasFlags = getFlags();
    let regexString = new RegExp(regexPattern.value, hasFlags)
    let testingString = stringToTest.textContent;
    const matchArr = [];
    let returnString;
    const splitString = testingString.split("");
    

    const startTag = `<span class="highlight">`
    const endTag = `</span>`
    const resultArr = [];

    const matchedStrings = testingString.match(regexString);
    console.log(`these are the ${matchedStrings}`)

    if (matchedStrings) {
        resultArr.push(...matchedStrings);
        console.log(resultArr)
        stringToTest.innerHTML = testingString.replaceAll(regexString,match => {
            return startTag + match + endTag;
        });
    } else {
        stringToTest.innerHTML = testingString;
    }

    if (resultArr.length === 0) {
        testResult.textContent = "no match";
    } else {
        testResult.textContent = resultArr.join(", ");
    }




}





testButton.addEventListener("click",testRegex)