import re

def generate_slug(str):
    non_alpha = r"[^a-z0-9\s]"

    answer = str
    answer = answer.lower()
    answer = answer.strip()
    answer = re.sub(non_alpha,"",answer)
    answer = re.sub(r"\s+", "%20", answer)


    print(answer)

    return answer

generate_slug("  ?H^3-1*1]0! W[0%R#1]D  ")

'''
Slug Generator
Given a string, return a URL-friendly version of the string using the following constraints:

All letters should be lowercase.
All characters that are not letters, numbers, or spaces should be removed.
All spaces should be replaced with the URL-encoded space code %20.
Consecutive spaces should be replaced with a single %20.
The returned string should not have leading or trailing %20.

Tests
Passed:1. generate_slug("helloWorld") should return "helloworld".
Passed:2. generate_slug("hello world!") should return "hello%20world".
Passed:3. generate_slug(" hello-world ") should return "helloworld".
Passed:4. generate_slug("hello  world") should return "hello%20world".
Passed:5. generate_slug("  ?H^3-1*1]0! W[0%R#1]D  ") should return "h3110%20w0r1d".
'''