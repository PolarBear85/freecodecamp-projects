function combinations(cards) {

  const totalOdds = pickCard(cards,0)

  const factor = factorial(cards)
  console.log(factor)
  console.log(totalOdds/factor)

  return totalOdds/factor
}

const pickCard = (card,picked) => {
  const leftCards = 52-picked
  console.log(`I have ${card} cards left to pick`)
  console.log(`There are ${leftCards} cards left`)
  if (card === 0) {
    return 1
  } else {
    console.log(`I am going to pick ${card} cards from a deck of ${leftCards} left`)
    return ((leftCards)**1)*pickCard(card-1,picked+1) 
  }
}

const factorial = card => {
  if (card === 0) {
    return 1
  } else {
    return card * factorial(card-1)
  }
}



combinations(10)




/*
Counting Cards
A standard deck of playing cards has 13 unique cards in each suit. Given an integer representing the number of cards to pick from the deck, return the number of unique combinations of cards you can pick.

Order does not matter. Picking card A then card B is the same as picking card B then card A.
For example, given 52, return 1. There's only one combination of 52 cards to pick from a 52 card deck. And given 2, return 1326, There's 1326 card combinations you can end up with when picking 2 cards from the deck.
*/