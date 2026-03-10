from datetime import date

def days_until_weekend(date_string):
    days = {
        0:"Monday",
        1:"Tuesday",
        2:"Wednesday",
        3:"Thursday",
        4:"Friday",
        5:"Saturday",
        6:"Sunday"
    }

    the_date = date.fromisoformat(date_string)
    the_day = date.weekday(the_date)
    print(the_day)

    if the_day == 5 or the_day==6:
        return "It's the weekend!"
    else:
        gap = 5 - the_day
        print(gap)
        if gap == 1:
           return f"{gap} day until the weekend."
        else:
            return f"{gap} days until the weekend."


days_until_weekend("2026-01-27") #should return "4 days until the weekend."


'''
Is It the Weekend?
Given a date in the format "YYYY-MM-DD", return the number of days left until the weekend.

The weekend starts on Saturday.
If the given date is Saturday or Sunday, return "It's the weekend!".
Otherwise, return "X days until the weekend.", where X is the number of days until Saturday.
If X is 1, use "day" (singular) instead of "days" (plural).
Make sure the calculation ignores your local timezone.

Tests
Passed:1. days_until_weekend("2025-11-14") should return "1 day until the weekend.".
Passed:2. days_until_weekend("2025-01-01") should return "3 days until the weekend.".
Passed:3. days_until_weekend("2025-12-06") should return "It's the weekend!".
Passed:4. days_until_weekend("2026-01-27") should return "4 days until the weekend.".
Passed:5. days_until_weekend("2026-09-07") should return "5 days until the weekend.".
Passed:6. days_until_weekend("2026-11-29") should return "It's the weekend!".
'''