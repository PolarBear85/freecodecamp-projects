def count_characters(sentence):

    count = {}

    for letter in sentence:
        if letter.isalpha():
            this_letter = letter.lower()

            if this_letter in count:
                count[this_letter]+= 1
            else:
                count[this_letter] = 1

        else:
            continue

    sort_dict = sorted(count.items())
    print(sort_dict)

    answer = [f"{key} {item}" for key,item in sort_dict]
    print(answer)


    return answer


count_characters("I love coding challenges!")

'''
Character Count
Given a sentence string, return an array with a count of each character in alphabetical order.

Treat upper and lowercase letters as the same letter when counting.
Ignore numbers, spaces, punctuation, etc.
Return the count and letter in the format "letter count". For instance, "a 3".
All returned letters should be lowercase.
Do not return a count of letters that are not in the given string.
Tests:
Passed:1. count_characters("hello world") should return ["d 1", "e 1", "h 1", "l 3", "o 2", "r 1", "w 1"].
Passed:2. count_characters("I love coding challenges!") should return ["a 1", "c 2", "d 1", "e 3", "g 2", "h 1", "i 2", "l 3", "n 2", "o 2", "s 1", "v 1"].
Passed:3. count_characters("// TODO: Complete this challenge ASAP!") should return ["a 3", "c 2", "d 1", "e 4", "g 1", "h 2", "i 1", "l 3", "m 1", "n 1", "o 3", "p 2", "s 2", "t 3"]

'''