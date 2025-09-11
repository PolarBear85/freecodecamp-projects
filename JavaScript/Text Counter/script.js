const inputText = document.querySelector("#text-input");
const outputLabel = document.querySelector("#char-count");

function textCount(inputText) {
    return inputText.value.length;
}

inputText.addEventListener("input", ()=> {
    let textLength = inputText.value.length;
    if (textLength>=50) {
        inputText.value = inputText.value.slice(0,49);
    }

    if (textLength>=50) {
        outputLabel.classList.add("overfilled");
        inputText.classList.add("overfilled");
    } else {
        outputLabel.classList.remove("overfilled")
        inputText.classList.remove("overfilled");
    }
    outputLabel.textContent= `Character Count: ${textLength}/50`
})