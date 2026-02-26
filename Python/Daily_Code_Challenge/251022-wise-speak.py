def wise_speak(sentence):
    key_words = ["have", "must", "are", "will", "can"]
    last_char = sentence[-1]
    print(last_char)
    wise_split = sentence[0:-1].lower().split(" ")
    print(wise_split)

    for index,word in enumerate(wise_split):
        if word in key_words:
            move = wise_split[0:index+1]
            wise_split[0:index+1] = []
            wise_split.append(",")
            wise_split.extend(move)
            break
    print(wise_split)

    answer = " ".join(wise_split).replace(" ,",",").replace(" .",".")

    print(answer[0].upper()+answer[1:]+last_char)


    return answer[0].upper()+answer[1:]+last_char

wise_speak("You can do it!")

'''
Speak Wisely, You Must
Given a sentence, return a version of it that sounds like advice from a wise teacher using the following rules:

Words are separated by a single space.
Find the first occurrence of one of the following words in the sentence: "have", "must", "are", "will", "can".
Move all words before and including that word to the end of the sentence and:
Preserve the order of the words when you move them.
Make them all lowercase.
And add a comma and space before them.
Capitalize the first letter of the new first word of the sentence.
All given sentences will end with a single punctuation mark. Keep the original punctuation of the sentence and move it to the end of the new sentence.
Return the new sentence, make sure there's a single space between each word and no spaces at the beginning or end of the sentence.
For example, given "You must speak wisely." return "Speak wisely, you must."

Tests
Passed:1. wise_speak("You must speak wisely.") should return "Speak wisely, you must."
Passed:2. wise_speak("You can do it!") should return "Do it, you can!"
Passed:3. wise_speak("Do you think you will complete this?") should return "Complete this, do you think you will?"
Passed:4. wise_speak("All your base are belong to us.") should return "Belong to us, all your base are."
Passed:5. wise_speak("You have much to learn.") should return "Much to learn, you have."
'''