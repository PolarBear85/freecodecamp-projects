def get_milestone(years):

    milestones = [
        (70, "Platinum"),
        (60, "Diamond"),
        (50, "Gold"),
        (40, "Ruby"),
        (25, "Silver"),
        (10, "Tin"),
        (5, "Wood"),
        (1, "Paper")
    ]

    match = next((name for threshold, name in milestones if years >= threshold), "Newlyweds")

    return match

'''
Anniversary Milestones
Given an integer representing the number of years a couple has been married, return their most recent anniversary milestone according to this chart:

Years Married	Milestone
1	"Paper"
5	"Wood"
10	"Tin"
25	"Silver"
40	"Ruby"
50	"Gold"
60	"Diamond"
70	"Platinum"
If they haven't reached the first milestone, return "Newlyweds".
Tests:
Waiting:1. get_milestone(0) should return "Newlyweds".
Waiting:2. get_milestone(1) should return "Paper".
Waiting:3. get_milestone(8) should return "Wood".
Waiting:4. get_milestone(10) should return "Tin".
Waiting:5. get_milestone(26) should return "Silver".
Waiting:6. get_milestone(45) should return "Ruby".
Waiting:7. get_milestone(50) should return "Gold".
Waiting:8. get_milestone(64) should return "Diamond".
Waiting:9. get_milestone(71) should return "Platinum".

'''