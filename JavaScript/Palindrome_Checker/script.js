const textInput = document.querySelector("#text-input")
const checkBtn = document.querySelector("#check-btn");
const resultText = document.querySelector("#result")




checkBtn.addEventListener("click", () => {
    const inputString = textInput.value;
    if (inputString == "") {
        alert("Please input a value");
    } else {
        let checkResult = checkPalindrome(inputString);
        if (checkResult) {
            resultText.textContent = `${inputString} is a palindrome`;
            } else {
                resultText.textContent = `${inputString} is not a palindrome`;
            }
    }
});



function checkPalindrome(inputText) {
    let cleanText = inputText
        .toLowerCase()
        .replace(/[^A-Za-z0-9]/g,"")
    let backText = cleanText
        .split("")
        .reverse()
        .join("");

    return cleanText === backText;

}
