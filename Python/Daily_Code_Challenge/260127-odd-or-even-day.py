from datetime import datetime 
def odd_or_even_day(timestamp):
    seconds = timestamp/1000
    date = datetime.utcfromtimestamp(seconds)
    print(date)

    return "odd" if date.day % 2 != 0 else "even"


odd_or_even_day(6739456780000)

'''
Odd or Even Day
Given a timestamp (number of milliseconds since the Unix epoch), return:

"odd" if the day of the month for that timestamp is odd.
"even" if the day of the month for that timestamp is even.
For example, given 1769472000000, a timestamp for January 27th, 2026, return "odd" because the day number (27) is an odd number.

Tests
Passed:1. odd_or_even_day(1769472000000) should return "odd".
Passed:2. odd_or_even_day(1769444440000) should return "even".
Passed:3. odd_or_even_day(6739456780000) should return "odd".
Passed:4. odd_or_even_day(1) should return "odd".
Passed:5. odd_or_even_day(86400000) should return "even".

'''