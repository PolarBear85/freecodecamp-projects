def mile_pace(miles, duration):

    minutes_str, seconds_str = duration.split(":")
    print(minutes_str)
    print(seconds_str)

    total_seconds = (int(minutes_str)*60) + int(seconds_str)
    print(total_seconds)

    avg_seconds_per_mile = total_seconds / miles
    print(avg_seconds_per_mile)

    pace_mins = int(avg_seconds_per_mile // 60)
    print(pace_mins)
    pace_secs = int(avg_seconds_per_mile % 60)
    print(pace_secs)

    print(f"{pace_mins:02}:{pace_secs:02}")
    return f"{pace_mins:02}:{pace_secs:02}"


mile_pace(26.2, "120:35")

'''
Mile Pace
Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format "MM:SS".

Add leading zeros when needed.

Tests
Passed:1. mile_pace(3, "24:00") should return "08:00".
Passed:2. mile_pace(1, "06:45") should return "06:45".
Passed:3. mile_pace(2, "07:00") should return "03:30".
Passed:4. mile_pace(26.2, "120:35") should return "04:36".
'''