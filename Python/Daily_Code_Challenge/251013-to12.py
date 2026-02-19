def to_12(time):
    hours = int(time[:2])

    minutes = time[2:]

    period = "AM" if hours < 12 else "PM"

    display_hour = hours % 12 or 12
    
    return f"{display_hour}:{minutes} {period}"

to_12("0030")
to_12("1124")
to_12("1200")
to_12("1455")

'''
24 to 12
Given a string representing a time of the day in the 24-hour format of "HHMM", return the time in its equivalent 12-hour format of "H:MM AM" or "H:MM PM".

The given input will always be a four-digit string in 24-hour time format, from "0000" to "2359".

Tests
Failed:1. to_12("1124") should return "11:24 AM".
Failed:2. to_12("0900") should return "9:00 AM".
Failed:3. to_12("1455") should return "2:55 PM".
Failed:4. to_12("2346") should return "11:46 PM".
Failed:5. to_12("0030") should return "12:30 AM".
'''
