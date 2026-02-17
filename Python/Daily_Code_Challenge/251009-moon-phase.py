import datetime

def moon_phase(date_string):

    phases = [
        (22,"Waning"),
        (15,"Full"),
        (8,"Waxing"),
        (1,"New"),
    ]

    datum = datetime.datetime(2000,1,6)

    today = datetime.datetime.fromisoformat(date_string)
    phase_day = ((today - datum).days % 28)+1
    print(phase_day)

    for day,phase in phases:
        if phase_day>= day:
            print(phase)
            return phase

moon_phase("2000-01-13")

'''
Space Week Day 6: Moon Phase
For day six of Space Week, you will be given a date in the format "YYYY-MM-DD" and need to determine the phase of the moon for that day using the following rules:

Use a simplified lunar cycle of 28 days, divided into four equal phases:

"New": days 1 - 7
"Waxing": days 8 - 14
"Full": days 15 - 21
"Waning": days 22 - 28
After day 28, the cycle repeats with day 1, a new moon.

Use "2000-01-06" as a reference new moon (day 1 of the cycle) to determine the phase of the given day.
You will not be given any dates before the reference date.
Return the correct phase as a string.
Note: Day 1 represents the day of the new moon, meaning 0 days have passed since the last new moon.

Tests
Passed:1. moon_phase("2000-01-12") should return "New".
Failed:2. moon_phase("2000-01-13") should return "Waxing".
Passed:3. moon_phase("2014-10-15") should return "Full".
Passed:4. moon_phase("2012-10-21") should return "Waning".
Passed:5. moon_phase("2022-12-14") should return "New".
'''