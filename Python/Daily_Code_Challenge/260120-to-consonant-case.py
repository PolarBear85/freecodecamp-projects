import re

def to_consonant_case(s):

    regex = r"([aeiou])|(-)|([^aeiou])"

    def handle_match(match):
        if (match.group(1)):
            return match.group(1).lower()
        elif(match.group(2)):
            return "_"
        else:
            return match.group(3).upper()

    return re.sub(regex, handle_match, s, flags=re.IGNORECASE)

'''
Consonant Case
Given a string representing a variable name, convert it to consonant case using the following rules:

All consonants should be converted to uppercase.
All vowels (a, e, i, o, u in any case) should be converted to lowercase.
All hyphens (-) should be converted to underscores (_).
Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Passed:1. to_consonant_case("helloworld") should return "HeLLoWoRLD".
Passed:2. to_consonant_case("HELLOWORLD") should return "HeLLoWoRLD".
Passed:3. to_consonant_case("_hElLO-WOrlD-") should return "_HeLLo_WoRLD_".
Passed:4. to_consonant_case("_~-generic_~-variable_~-name_~-here-~_") should return "_~_GeNeRiC_~_VaRiaBLe_~_NaMe_~_HeRe_~_"
'''