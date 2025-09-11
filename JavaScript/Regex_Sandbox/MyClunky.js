** start of index.html **

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Regex Sandbox</title>

</head>

<body>
    <h1>Regex Sandbox</h1>
    <main>
        <div id="regex-container">
            <label for="pattern">Regex Pattern:
                <div id="pattern-container">/<input type="text" id="pattern" name="pattern"
                        placeholder="Enter your regex pattern">/</div>
            </label>
            <div id="flags-container">
                <p>Flags: </p>
                <label for="i">
                    <input type="checkbox" name="flags" id="i"> i
                </label>
                <label for="g">
                    <input type="checkbox" name="flags" id="g"> g
                </label>
            </div>
        </div>
        <div id="test-container">
            <p>Test String:</p>
            <div id="test-string" placeholder="Enter your test string" contenteditable="true"></div>
        </div>
        <button class="btn" id="test-btn" type="button">Test Regex</button>
        <div id="result-container">
            <h2>Result:</h2>
            <p id="result">
            </p>
        </div>

    </main>
    <script src="script.js"></script>
</body>

</html>

** end of index.html **

** start of styles.css **

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --dark-grey: #1b1b32;
    --light-grey: #f5f6f7;
    --golden-yellow: #fecc4c;
    --yellow: #ffcc4c;
    --gold: #feac32;
    --orange: #ffac33;
    --dark-orange: #f89808;
    --border: 0.2rem solid darkgrey;
    --padding: 0.3rem;
}

body {
    background-color: var(--dark-grey);
    color: var(--light-grey);
    font-size: 20px;
    font-family: "Lato", Helvetica, Arial, sans-serif;
    padding: 5px;
}

h1 {
    margin: 5rem auto 2rem;
    text-align: center;
}

p {
    padding: var(--padding);
}

#regex-container {
    max-width: 680px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: var(--border);
}

#regex-container>label {
    padding: var(--padding);
    flex: 1 1 auto;
}

#pattern-container {
    display: inline-block;
    color: var(--dark-grey);
    background-color: var(--light-grey);
    margin: 5px;
    border: var(--border);
}

#pattern {
    margin: 0.2rem;
    border: 0;
    font-size: 1rem;
    width: calc(100% - 1.2rem);
}

#pattern:focus {
    outline: none;
}

#flags-container {
    display: flex;
    align-items: center;
    flex: 1 1 auto;
}

#flags-container>label {
    padding: var(--padding);
    margin-right: 0.3rem;
}

#test-container {
    max-width: 680px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    border: var(--border);
}

#test-string {
    background-color: var(--light-grey);
    min-height: 5rem;
    color: var(--dark-grey);
    border-top: var(--border);
    font-size: 1.2rem;
}

[contenteditable=true]:empty:before {
    content: attr(placeholder);
    pointer-events: none;
    color: var(--dark-grey);
}

::placeholder {
    color: var(--dark-grey);
}


button {
    display: block;
    cursor: pointer;
    width: 8rem;
    margin: 0.2rem auto;
    color: var(--dark-grey);
    background-color: var(--gold);
    background-image: linear-gradient(var(--golden-yellow), var(--orange));
    border-color: var(--gold);
    border-width: 0.2rem;
    font-size: 1.1rem;
}

.btn:hover {
    background-image: linear-gradient(var(--yellow), var(--dark-orange));
}

#result-container {
    max-width: 680px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

h2 {
    align-self: flex-start;
    margin: 0.4rem 0.2rem 0.2rem;
    flex: 0 1 auto;
}

#result {
    color: var(--dark-grey);
    background-color: var(--light-grey);
    font-size: 1.5rem;
    flex: 1 1 auto;
    margin: 0.2rem;
    border: var(--border);
    min-height: 3rem;
}

.highlight {
    background-color: lightgreen;
}

** end of styles.css **

** start of script.js **

const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");



function getFlags() {
    let flagString = "";
    if (caseInsensitiveFlag.checked) {
        flagString +="i"
    }
    if (globalFlag.checked) {
        flagString += "g"
    }

    return flagString
}


function testRegex() {
    const startTag = `<span class="highlight">`
    const endTag = `</span>`
    const hasFlags = getFlags();
    let regexString = new RegExp(regexPattern.value, hasFlags)
    let testingString = stringToTest.textContent;
    const matchArr = [];
    let returnString;
    const splitString = testingString.split("");
    const resultArr = [];

    let matchResult;

    let matchFound = regexString.test(testingString);
    if (matchFound === false) {
        testResult.innerHTML = "no match"
        return
    }

    regexString.lastIndex = 0;



    while ((matchResult = regexString.exec(testingString)) != null) {
        console.log(matchResult, matchResult.index, matchResult[0].length)
        matchArr.push (
            {location: matchResult.index,
            length: matchResult[0].length}
        );
        resultArr.push(matchResult[0]);
        console.log(matchArr)
        if(!regexString.global) {
            break;
        }

        
    }

    for (let i = matchArr.length-1; i>-1; i--) {
        let matchLocation = matchArr[i].location;
        let matchLength = matchArr[i].length;

        splitString.splice(matchLocation+matchLength,0,endTag);
        splitString.splice(matchLocation,0,startTag)
    }

    testResult.textContent = resultArr.join(", ");
    stringToTest.innerHTML = splitString.join("");
}





testButton.addEventListener("click",testRegex)

** end of script.js **

