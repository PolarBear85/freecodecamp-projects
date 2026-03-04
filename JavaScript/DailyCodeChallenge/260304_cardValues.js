function cardValues(cards) {

  const valueCards = cards.map(card => {
    const cardValue = card.slice(0,-1)
    console.log(cardValue)
    console.log(!parseInt(cardValue,10))
    if (!parseInt(cardValue,10)) {
      return (cardValue == "A") ? 1 : 10
    } else {
      return parseInt(cardValue,10)
    }
  })

  console.log(valueCards)
  return valueCards;
}

cardValues(["3H", "4D", "5S"])

/*
Playing Card Values
Given an array of playing cards, return a new array with the numeric value of each card.

Card Values:

An Ace ("A") has a value of 1.
Numbered cards ("2" - "10") have their face value: 2 - 10, respectively.
Face cards: Jack ("J"), Queen ("Q"), and King ("K") are each worth 10.
Suits:

Each card has a suit: Spades ("S"), Clubs ("C"), Diamonds ("D"), or Hearts ("H").
Card Format:

Each card is represented as a string: "valueSuit". For Example: "AS" is the Ace of Spades, "10H" is the Ten of Hearts, and "QC" is the Queen of Clubs.

Tests
Passed:1. cardValues(["3H", "4D", "5S"]) should return [3, 4, 5].
Passed:2. cardValues(["AS", "10S", "10H", "6D", "7D"]) should return [1, 10, 10, 6, 7].
Passed:3. cardValues(["8D", "QS", "2H", "JC", "9C"]) should return [8, 10, 2, 10, 9].
Passed:4. cardValues(["AS", "KS"]) should return [1, 10].
Passed:5. cardValues(["10H", "JH", "QH", "KH", "AH"]) should return [10, 10, 10, 10, 1].
*/