function getLongestWord(sentence) {
    const regex = /[^0-9a-zA-Z\s]/gi
    let longWord = ""
    const sentArr = sentence.replace(regex,"").split(" ")

    
    sentArr.forEach(word => {
        if (word.length > longWord.length) {
        longWord = word
        console.log(longWord.length, word)
        }

    })
    return longWord;
}


getLongestWord("coding is fun")
getLongestWord("Coding challenges are fun and educational.")
getLongestWord("This sentence has multiple long words.")

/*
Longest Word
Given a sentence, return the longest word in the sentence.

Ignore periods (.) when determining word length.
If multiple words are ties for the longest, return the first one that occurs.
*/