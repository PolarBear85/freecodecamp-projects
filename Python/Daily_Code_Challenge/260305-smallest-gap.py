def smallest_gap(s):

    last_seen = {}

    smallest_gap = len(s)+1
    smallest_str = None

    for index,letter in enumerate(s):
        if letter in last_seen:
            start_index = last_seen[letter]
            gap_content = s[start_index+1:index]
            gap_length = len(gap_content)

            if gap_length < smallest_gap:
                smallest_str = gap_content
                smallest_gap = gap_length
        last_seen[letter] = index

    print(smallest_str)



    return smallest_str

smallest_gap("A{5e^SD*F4i!o#q6e&rkf(po8|we9+kr-2!3}=4")

'''
Smallest Gap
Given a string, return the substring between the two identical characters that have the smallest number of characters between them (smallest gap).

There will always be at least one pair of matching characters.
The returned substring should exclude the matching characters.
If two or more gaps are the same length, return the characters from the first one.
For example, given "ABCDAC", return "DA".

Only "A" and "C" repeat in the string.
The number of characters between the two "A" characters is 3, and between the "C" characters is 2.
So return the string between the two "C" characters.

Tests
Passed:1. smallest_gap("ABCDAC") should return "DA".
Passed:2. smallest_gap("racecar") should return "e".
Passed:3. smallest_gap("A{5e^SD*F4i!o#q6e&rkf(po8|we9+kr-2!3}=4") should return "#q6e&rkf(p".
Passed:4. smallest_gap("Hello World") should return "".
Passed:5. smallest_gap("The quick brown fox jumps over the lazy dog.") should return "fox".
'''