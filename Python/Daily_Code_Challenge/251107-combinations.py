import math

def combinations(cards):

    denominator = math.factorial(cards)
    
    numerator = 1
    for number in range(53-cards,53)[::-1]:
        numerator *= number

    return numerator/denominator


combinations(5)

'''
Counting Cards

A standard deck of playing cards has 13 unique cards in each suit. Given an integer representing the number of cards to pick from the deck, return the number of unique combinations of cards you can pick.

    Order does not matter. Picking card A then card B is the same as picking card B then card A.

For example, given 52, return 1. There's only one combination of 52 cards to pick from a 52 card deck. And given 2, return 1326, There's 1326 card combinations you can end up with when picking 2 cards from the deck.
Tests

    Passed: 1. combinations(52) should return 1.
    Passed: 2. combinations(1) should return 52.
    Passed: 3. combinations(2) should return 1326.
    Passed: 4. combinations(5) should return 2598960.
    Passed: 5. combinations(10) should return 15820024220.
    Passed: 6. combinations(50) should return 1326


'''