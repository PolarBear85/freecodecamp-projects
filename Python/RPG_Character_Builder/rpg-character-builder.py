full_dot = '●'
empty_dot = '○'

def create_character(name,stren,intel,chari):

    if not isinstance(name,str):
        return 'The character name should be a string'
    if not name:
        return 'The character should have a name'
    if len(name)>10:
        return 'The character name is too long'
    if ' ' in name:
        return 'The character name should not contain spaces'



    if not isinstance(stren,int) or not isinstance(intel,int) or not isinstance(chari,int):
        return 'All stats should be integers'


    if stren < 1 or intel <1 or chari < 1:
        return 'All stats should be no less than 1'

    if stren > 4 or intel > 4 or chari > 4:
        return 'All stats should be no more than 4'

    if stren+intel+chari != 7:
        return 'The character should start with 7 points'
    
    rem_stren = 10 - stren
    rem_intel = 10 - intel
    rem_chari = 10 - chari

    return_string = f'{name}\nSTR {(stren*full_dot)+(rem_stren*empty_dot)}\nINT {(intel*full_dot)+(rem_intel*empty_dot)}\nCHA {(chari*full_dot)+(rem_chari*empty_dot)}'
    print (return_string)
    return return_string



create_character('ren', 4, 2, 1)


'''
Build an RPG Character
In this lab you will practice the basics of Python by building a small app that creates a character for an RPG adventure.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named create_character.
The function should accept, in order, a character name followed by three stats: strength, intelligence, and charisma.
The character name should be validated:
If the character name is not a string, the function should return The character name should be a string.
If the character name is an empty string, the function should return The character should have a name.
If the character name is longer than 10 characters, the function should return The character name is too long.
If the character name contains spaces, the function should return The character name should not contain spaces.
The stats should also be validated:
If one or more stats are not integers, the function should return All stats should be integers.
If one or more stats are less than 1, the function should return All stats should be no less than 1.
If one or more stats are more than 4, the function should return All stats should be no more than 4.
If the sum of all stats is different than 7, the function should return The character should start with 7 points.
If all values pass the verification, the function should return a string with four lines:
the first line should contain the character name
lines 2-4 should start with the stat abbreviation, STR, INT or CHA (in this order), then a space, and then a number of full dots (●) equal to the value of the stat, and a number of empty dots (○) to reach 10. Example: if the value of strength is 3 there must be 3 full dots followed by 7 empty dots. The dots are given in the editor.
Here's the string that should be returned by create_character('ren', 4, 2, 1):

ren
STR ●●●●○○○○○○
INT ●●○○○○○○○○
CHA ●○○○○○○○○○
NOTE: while str and int are common abbreviations for the stats, remember that those are reserved keywords in Python and should not be used as variable names.


Tests
Passed:1. You should have a function named create_character.
Passed:2. When create_character is called with a first argument that is not a string it should return The character name should be a string.
Passed:3. When create_character is called with a first argument that is an empty string, it should return The character should have a name.
Passed:4. When create_character is called with a first argument that is longer than 10 characters it should return The character name is too long.
Passed:5. The create_character function should not say that the character is too long when it's not longer than 10 characters.
Passed:6. When create_character is called with a first argument that contains a space it should return The character name should not contain spaces.
Passed:7. When create_character is called with a second, third or fourth argument that is not an integer it should return All stats should be integers.
Passed:8. When create_character is called with a second, third or fourth argument that is lower than 1 it should return All stats should be no less than 1.
Passed:9. When create_character is called with a second, third or fourth argument that is higher than 4 it should return All stats should be no more than 4.
Passed:10. When create_character is called with a second, third or fourth argument that do not sum to 7 it should return The character should start with 7 points.
Passed:11. create_character('ren', 4, 2, 1) should return ren\nSTR ●●●●○○○○○○\nINT ●●○○○○○○○○\nCHA ●○○○○○○○○○.
Passed:12. When create_character is called with valid values it should output the character stats as required.
'''
