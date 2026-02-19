def to12(time_str):
    hours = int(time_str[:2])
    minutes = time_str[2:]
    
    # Determine AM or PM
    period = "AM" if hours < 12 else "PM"
    
    # Convert 0 and 13-23 to 1-12 scale
    # 0 % 12 is 0, so we use 'or 12' to catch midnight and noon
    display_hour = hours % 12 or 12
    
    return f"{display_hour}:{minutes} {period}"

# Tests
print(to12("0030")) # 12:30 AM
print(to12("1124")) # 11:24 AM
print(to12("1200")) # 12:00 PM
print(to12("1455")) # 2:55 PM

'''
24 to 12
Given a string representing a time of the day in the 24-hour format of "HHMM", return the time in its equivalent 12-hour format of "H:MM AM" or "H:MM PM".

The given input will always be a four-digit string in 24-hour time format, from "0000" to "2359".

Tests
Passed:1. to12("1124") should return "11:24 AM".
Passed:2. to12("0900") should return "9:00 AM".
Passed:3. to12("1455") should return "2:55 PM".
Passed:4. to12("2346") should return "11:46 PM".
Passed:5. to12("0030") should return "12:30 AM".
'''