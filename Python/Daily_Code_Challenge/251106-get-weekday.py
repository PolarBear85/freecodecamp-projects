from datetime import date

def get_weekday(date_string):

    days = {
        0:"Monday",
        1:"Tuesday",
        2:"Wednesday",
        3:"Thursday",
        4:"Friday",
        5:"Saturday",
        6:"Sunday"
    }

    date_split = date_string.split("-")
    the_date = date(int(date_split[0]),int(date_split[1]),int(date_split[2]))
    the_day = date.weekday(the_date)

    return days[the_day]

print(get_weekday("2025-11-06"))

'''
Weekday Finder

Given a string date in the format YYYY-MM-DD, return the day of the week.

Valid return days are:

    "Sunday"
    "Monday"
    "Tuesday"
    "Wednesday"
    "Thursday"
    "Friday"
    "Saturday"

Be sure to ignore time zones.
Tests

    Passed: 1. get_weekday("2025-11-06") should return Thursday.
    Passed: 2. get_weekday("1999-12-31") should return Friday.
    Passed: 3. get_weekday("1111-11-11") should return Saturday.
    Passed: 4. get_weekday("2112-12-21") should return Wednesday.
    Passed: 5. get_weekday("2345-10-01") should return Monday.
'''