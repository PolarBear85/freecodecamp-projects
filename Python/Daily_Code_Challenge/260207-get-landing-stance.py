

def get_landing_stance(start_stance, rotation):

    if abs(rotation)  < 180:
        return start_stance

    flips = abs(rotation) / 180
    print(flips,flips%2)

    if flips % 2 != 0:
        if start_stance == "Goofy":
            return "Regular"
        elif start_stance == "Regular":
            return "Goofy"
    
    if flips % 2 == 0:
        return start_stance


print (get_landing_stance("Regular",2160))

'''
2026 Winter Games Day 2: Snowboarding

Given a snowboarder's starting stance and a rotation in degrees, determine their landing stance.

    A snowboarder's stance is either "Regular" or "Goofy".
    Trick rotations are multiples of 90 degrees. Positive indicates clockwise rotation, and negative indicate counter-clockwise rotation.
    The landing stance flips every 180 degrees of rotation.

For example, given "Regular" and 90, return "Regular". Given "Regular" and 180 degrees, return "Goofy".
Tests

    Passed: 1. get_landing_stance("Regular", 90) should return "Regular".
    Passed: 2. get_landing_stance("Regular", 180) should return "Goofy".
    Passed: 3. get_landing_stance("Goofy", -270) should return "Regular".
    Passed: 4. get_landing_stance("Regular", 2340) should return "Goofy".
    Passed: 5. get_landing_stance("Goofy", 2160) should return "Goofy".
    Passed: 6. get_landing_stance("Goofy", -540) should return "Regular"

'''