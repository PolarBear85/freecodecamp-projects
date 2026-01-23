import re
def battle(my_army, opposing_army):
    my_army_size = len(my_army)
    opp_army_size = len(opposing_army)

    if my_army_size > opp_army_size:
        return "Opponent retreated"
    if my_army_size < opp_army_size:
        return "We retreated"

    my_total = 0
    opp_total = 0

    for my_char,opp_char in zip(my_army,opposing_army):
        my_score = character_score(my_char)
        opp_score = character_score(opp_char)

        if my_score > opp_score: my_total+= 1
        if opp_score > my_score: opp_total+=1

    print(my_total,opp_total)
    if my_total > opp_total: return "We won"
    if my_total < opp_total: return "We lost"

    return "It was a tie"



def character_score(char):
    special = r"[^0-9A-Za-z]"
    nums = r"[0-9]"

    if re.search(special,char): return 0
    if re.search(nums,char): return int(char)
    if char >="a" and char <="z":
        return ord(char)-96
    if char >="A" and char<="Z":
        return ord(char)-38
    
    return 0


print(battle("C@T5", "D0G$"))

'''
Character Battle
Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:

Characters a-z have a strength of 1-26, respectively.
Characters A-Z have a strength of 27-52, respectively.
Digits 0-9 have a strength of their face value.
All other characters have a value of zero.
Each character can only fight one battle.
For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:

"Opponent retreated" if your army has more characters than the opposing army.
"We retreated" if the opposing army has more characters than yours.
"We won" if your army won more battles.
"We lost" if the opposing army won more battles.
"It was a tie" if both armies won the same number of battles.

Tests
Failed:1. battle("Hello", "World") should return "We lost".
Failed:2. battle("pizza", "salad") should return "We won".
Failed:3. battle("C@T5", "D0G$") should return "We won".
Passed:4. battle("kn!ght", "orc") should return "Opponent retreated".
Passed:5. battle("PC", "Mac") should return "We retreated".
Failed:6. battle("Wizards", "Dragons") should return "It was a tie".
Failed:7. battle("Mr. Smith", "Dr. Jones") should return "It was a tie".

'''