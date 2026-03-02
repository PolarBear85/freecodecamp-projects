import re

def add_punctuation(sentences):

    regex = r"\s(?=[A-Z]+)"

    answer = re.sub(regex,". ",sentences)
    print(answer)

    return f"{answer}."

add_punctuation("A b c D e F g h I J k L m n o P Q r S t U v w X Y Z")

'''
Add Punctuation
Given a string of sentences with missing periods, add a period (".") in the following places:

Before each space that comes immediately before an uppercase letter
And at the end of the string
Return the resulting string.

Tests
Passed:1. add_punctuation("Hello world") should return "Hello world."
Passed:2. add_punctuation("Hello world It's nice today") should return "Hello world. It's nice today."
Passed:3. add_punctuation("JavaScript is great Sometimes") should return "JavaScript is great. Sometimes."
Passed:4. add_punctuation("A b c D e F g h I J k L m n o P Q r S t U v w X Y Z") should return "A b c. D e. F g h. I. J k. L m n o. P. Q r. S t. U v w. X. Y. Z."
Passed:5. add_punctuation("Wait.. For it") should return "Wait... For it."

'''