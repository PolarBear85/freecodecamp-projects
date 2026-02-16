def get_difficulty(track):

    score = 0

    for i in range(len(track)):
        section = track[i]
        previous = track[i-1] if i > 0 else None

        if section != "S":
            if section == "L" and previous == "R":
                score += 15
                pass
            elif section =="R" and previous == "L":
                score += 15
                pass
            else :
                score += 5

    print(score)

    if score <= 100:
        return "Easy"
    elif score <= 200:
        return "Medium"
    else:
        return "Hard"

get_difficulty("SLSLLSRRLSRLRL")

'''
2026 Winter Games Day 9: Skeleton

Given a string representing the curves on a skeleton track, determine the difficulty of the track.

    The given string will only consist of the letters:
        "L" for a left turn
        "R" for a right turn
        "S" for a straight segment

    Each direction change adds 15 points (an "L" followed by an "R" or vice versa).

    All other curves add 5 points each (all other "L" or "R" characters).

    Straight segments add 0 points.

The difficulty of the track is based on the total score. Return:

    "Easy" if the total is 0 - 100
    "Medium" if the total is 101-200
    "Hard" if the total is over 200

Tests

    Passed: 1. get_difficulty("SLSLLSRRLSRLRL") should return "Easy".
    Passed: 2. get_difficulty("LLRSLRLRSLLRLRSLRRLRSRLLS") should return "Hard".
    Passed: 3. get_difficulty("SRRRRLSLLRLRSSRLSRL") should return "Medium".
    Passed: 4. get_difficulty("LSRLRLSRLRLSLRSLRLLRLSRLRLRSL") should return "Hard".
    Passed: 5. get_difficulty("SLLSSLRLSLSLRSLSSLRL") should return "Medium".
    Passed: 6. get_difficulty("SRSLSRSLSRRSLSRSRSLSRLSRSR") should return "Easy".

'''