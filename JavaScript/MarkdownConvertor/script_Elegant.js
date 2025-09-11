const markDownInput = document.querySelector("#markdown-input");
const htmlOutput = document.querySelector("#html-output");
const htmlPreview = document.querySelector("#preview");


const regexArr = {
    heading1: {regex: /^#{1}(?!#)\s*(.*)/img , replace: `<h1>$1</h1>`},
    heading2: {regex: /^#{2}(?!#)\s*(.*)/img , replace: `<h2>$1</h2>`},
    heading3: {regex: /^#{3}(?!#)\s*(.*)/img , replace: `<h3>$1</h3>`},
    bold: {regex: /(\*\*|__)(.*?)\1/igm , replace: `<strong>$2</strong>`},
    italic: {regex: /(\*|_)(.*?)\1/igm, replace: `<em>$2</em>`},
    image: {regex: /(!\[)(.*?)(\]\()(.*?)(\))/igm, replace: `<img alt="$2" src="$4">`},
    link: {regex: /(\[)(.*?)(\]\()(.*?)(\))/igm, replace:`<a href="$4">$2</a>`},
    quote: {regex: /^>{1}\s*(.*)/igm, replace:`<blockquote>$1</blockquote>`}
};



function convertMarkdown() {
    let inputText = markDownInput.value;
    for (const rule in regexArr) {
        const regexRule = regexArr[rule];
        inputText = inputText.replace(regexRule.regex, regexRule.replace)

        }
        htmlOutput.textContent = inputText;
        htmlPreview.innerHTML = inputText;
        return inputText
    }


markDownInput.addEventListener("input",()=> {
    convertMarkdown()
});

