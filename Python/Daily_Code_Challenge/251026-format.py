def format(seconds):

    hours = seconds // 3600
    minutes = str((seconds % 3600)//60)
    seconds = str(seconds % 60).rjust(2,"0")

    if hours < 1:
        print(f"{minutes}:{seconds}")
        return f"{minutes}:{seconds}"
    else:
        print(f"{hours}:{minutes.rjust(2,'0')}:{seconds}")
        return f"{hours}:{minutes.rjust(2,'0')}:{seconds}"


format(500)
format(4000)
format(1)

'''
Duration Formatter
Given an integer number of seconds, return a string representing the same duration in the format "H:MM:SS", where "H" is the number of hours, "MM" is the number of minutes, and "SS" is the number of seconds. Return the time using the following rules:

Seconds: Should always be two digits.
Minutes: Should omit leading zeros when they aren't needed. Use "0" if the duration is less than one minute.
Hours: Should be included only if they're greater than zero.

Tests
Passed:1. format(500) should return "8:20".
Passed:2. format(4000) should return "1:06:40".
Passed:3. format(1) should return "0:01".
Passed:4. format(5555) should return "1:32:35".
Passed:5. format(99999) should return "27:46:39".

'''