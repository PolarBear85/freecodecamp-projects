def check_eligibility(athlete_weights, sled_weight):
    total_weight_limit = {
    1:247,
    2:390,
    4:630
    }
    team_sled_weight = {
    1:162,
    2:170,
    4:210
  }
    team_size = len(athlete_weights)
    if sled_weight < team_sled_weight[team_size]:
        return "Not Eligible"

    total_weight = sum(athlete_weights) + sled_weight
    print(total_weight)

    if total_weight > total_weight_limit[team_size]:
        return "Not Eligible"
    else:
        return "Eligible"



check_eligibility([106, 99, 103, 96], 227)

'''
2026 Winter Games Day 12: Bobsled
Given an array representing the weights of the athletes on a bobsled team and a number representing the weight of the bobsled, determine whether the team is eligible to race.

The length of the array determines the team size: 1, 2 or 4 person teams.
All given weight values are in kilograms (kg).
The bobsled (sled by iteself) must have a minimum weight of:

162 kg for a 1-person team
170 kg for a 2-person team
210 kg for a 4-person team
The total weight of the bobsled (athletes plus sled) must not exceed:

247 kg for a 1-person team
390 kg for a 2-person team
630 kg for a 4-person team
Return "Eligible" if the team meets all the requirements, or "Not Eligible" if the team fails to meet one or more of the requirements.

Tests
Passed:1. check_eligibility([78], 165) should return "Eligible".
Passed:2. check_eligibility([80], 160) should return "Not Eligible".
Passed:3. check_eligibility([80], 170) should return "Not Eligible".
Passed:4. check_eligibility([85, 90], 170) should return "Eligible".
Passed:5. check_eligibility([85, 95], 168) should return "Not Eligible".
Passed:6. check_eligibility([112, 97], 185) should return "Not Eligible".
Passed:7. check_eligibility([110, 102, 90, 106], 222) should return "Eligible".
Passed:8. check_eligibility([106, 99, 90, 88], 205) should return "Not Eligible".
'''