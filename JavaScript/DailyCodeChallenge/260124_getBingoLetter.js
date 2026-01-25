function getBingoLetter(n) {

  const bingo = [
    {threshold:61, letter:"O"},
    {threshold:46, letter:"G"},
    {threshold:31, letter:"N"},
    {threshold:16, letter:"I"},
    {threshold:1, letter:"B"}
  ]

    const letter = bingo.find(item => {
      return n >= item.threshold
    })

    console.log(letter)
  return letter.letter;
}

getBingoLetter(38)

/*
Bingo! Letter

Given a number, return the bingo letter associated with it (capitalized). Bingo numbers are grouped as follows:
Letter 	Number Range
"B" 	1-15
"I" 	16-30
"N" 	31-45
"G" 	46-60
"O" 	61-75
Tests

    Passed: 1. getBingoLetter(75) should return "O".
    Passed: 2. getBingoLetter(54) should return "G".
    Passed: 3. getBingoLetter(25) should return "I".
    Passed: 4. getBingoLetter(38) should return "N".
    Passed: 5. getBingoLetter(11) should return "11".

*/