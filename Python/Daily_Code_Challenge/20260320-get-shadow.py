def get_shadow(time):

    half = 0.5 if time[3:] == '30' else 0

    hours = int(time[0:2]) + half

    if hours < 6 or hours == 12 or hours >=18: return "No shadow"

    distance = abs(12-hours)**3
    direction = "east" if hours > 12 else "west"
    print(f"{distance}ft {direction}")


    return f"{distance}ft {direction}"


get_shadow("17:30")

'''
Equinox Shadows
Today is the equinox, when the sun is directly above the equator and perfectly overhead at noon. Given a time, determine the shadow cast by a 4-foot vertical pole.

The time will be a string in "HH:MM" 24-hour format (for example, "15:00" is 3pm).
You will only be given a time in 30 minute increments.
Rules:

The sun rises at 6am directly "east", and sets at 6pm directly "west".
A shadow always points opposite the sun.
The shadow's length (in feet) is the number of hours away from noon, cubed.
There is no shadow before sunrise (before 6am), after sunset (6pm or later), or at noon.
Return:

If a shadow exists, return "(length)ft (direction)". For example, "8ft west".
Otherwise, return "No shadow".
For example, given "10:00", return "8ft west" because 10am is 2 hours from noon, so 23 = 8 feet, and the shadow points west because the sun is in the east at 10am.

Tests:
Passed:1. get_shadow("10:00") should return "8ft west".
Passed:2. get_shadow("15:00") should return "27ft east".
Passed:3. get_shadow("12:00") should return "No shadow".
Passed:4. get_shadow("17:30") should return "166.375ft east".
Passed:5. get_shadow("05:00") should return "No shadow".
Passed:6. get_shadow("06:00") should return "216ft west".
Passed:7. get_shadow("18:00") should return "No shadow".
Passed:8. get_shadow("07:30") should return "91.125ft west".
Passed:9. get_shadow("00:00") should return "No shadow"
'''