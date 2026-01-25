import math

def get_bingo_letter(n):
    bingo = "BINGO"
    divider = math.ceil(n/15)-1
    print(divider)

    print(bingo[divider])
    return bingo[divider]



get_bingo_letter(75)

'''
Bingo! Letter

Given a number, return the bingo letter associated with it (capitalized). Bingo numbers are grouped as follows:
Letter 	Number Range
"B" 	1-15
"I" 	16-30
"N" 	31-45
"G" 	46-60
"O" 	61-75
Tests

    Passed: 1. get_bingo_letter(75) should return "O".
    Passed: 2. get_bingo_letter(54) should return "G".
    Passed: 3. get_bingo_letter(25) should return "I".
    Passed: 4. get_bingo_letter(38) should return "N".
    Passed: 5. get_bingo_letter(11) should return "11".

'''