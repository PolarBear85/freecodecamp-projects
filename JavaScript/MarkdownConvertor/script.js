const markDownInput = document.querySelector("#markdown-input");
const htmlOutput = document.querySelector("#html-output");
const htmlPreview = document.querySelector("#preview");




function convertMarkdown() {
    let inputText = markDownInput.value;
    
        inputText = inputText.replace(/^#{1}(?!#)\s*(.*)/i, `<h1>$1</h1>`)
        inputText = inputText.replace(/^#{2}(?!#)\s*(.*)/i, `<h2>$1</h2>`)
        inputText = inputText.replace(/^#{3}(?!#)\s*(.*)/i, `<h3>$1</h3>`)
        inputText = inputText.replace(/(\*\*|__)(.*?)\1/ig, `<strong>$2</strong>`)
        inputText = inputText.replace(/(\*|_)(.*?)\1/ig, `<em>$2</em>`)
        inputText = inputText.replace(/(!\[)(.*?)(\]\()(.*?)(\))/ig, `<img alt="$2" src="$4">`)
        inputText = inputText.replace(/(\[)(.*?)(\]\()(.*?)(\))/ig, `<a href="$4">$2</a>`)
        inputText = inputText.replace(/^>{1}\s*(.*)/i, `<blockquote>$1</blockquote>`)


        return inputText
}


markDownInput.addEventListener("input",()=> {
    convertMarkdown()
});

