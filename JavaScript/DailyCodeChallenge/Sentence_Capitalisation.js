function capitalize(paragraph) {
    const sentRegex = /(?<=^|[\.!?]+\s*)[a-z]/gi;

    return paragraph.replace(sentRegex, (match) => {
        return match.toUpperCase();
    });
}


/*
Sentence Capitalizer
Given a paragraph, return a new paragraph where the first letter of each sentence is capitalized.

All other characters should be preserved.
Sentences can end with a period (.), one or more question marks (?), or one or more exclamation points (!).
*/