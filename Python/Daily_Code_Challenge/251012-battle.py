def get_word_value(word):
    total = 0
    for char in word:
        # ord() gives the ASCII value
        # For 'a'-'z' (97-122), we subtract 96 to get 1-26
        # For 'A'-'Z' (65-90), we subtract 64 to get 1-26, then multiply by 2
        if char.isupper():
            total += (ord(char) - 64) * 2
        else:
            total += (ord(char) - 96)
    return total

def battle(my_team, opposing_team):
    # Split sentences into lists of words
    my_words = my_team.split()
    opp_words = opposing_team.split()
    
    my_wins = 0
    opp_wins = 0
    
    # zip() lets us iterate through both lists at the same time
    for my_word, opp_word in zip(my_words, opp_words):
        my_val = get_word_value(my_word)
        opp_val = get_word_value(opp_word)
        
        if my_val > opp_val:
            my_wins += 1
        elif opp_val > my_val:
            opp_wins += 1
            
    # Final result check
    if my_wins > opp_wins:
        return "We win"
    elif opp_wins > my_wins:
        return "We lose"
    else:
        return "Draw"


'''
Battle of Words
Given two sentences representing your team and an opposing team, where each word from your team battles the corresponding word from the opposing team, determine which team wins using the following rules:

The given sentences will always contain the same number of words.
Words are separated by a single space and will only contain letters.
The value of each word is the sum of its letters.
Letters a to z correspond to the values 1 through 26. For example, a is 1, and z is 26.
A capital letter doubles the value of the letter. For example, A is 2, and Z is 52.
Words battle in order: the first word of your team battles the first word of the opposing team, and so on.
A word wins if its value is greater than the opposing word's value.
The team with more winning words is the winner.
Return "We win" if your team is the winner, "We lose" if your team loses, and "Draw" if both teams have the same number of wins.

Tests
Passed:1. battle("hello world", "hello word") should return "We win".
Passed:2. battle("Hello world", "hello world") should return "We win".
Passed:3. battle("lorem ipsum", "kitty ipsum") should return "We lose".
Passed:4. battle("hello world", "world hello") should return "Draw".
Passed:5. battle("git checkout", "git switch") should return "We win".
Passed:6. battle("Cheeseburger with fries", "Cheeseburger with Fries") should return "We lose".
Passed:7. battle("We must never surrender", "Our team must win") should return "Draw".
'''