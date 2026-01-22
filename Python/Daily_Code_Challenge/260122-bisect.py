import bisect

def get_average_grade(scores):

    avg_score = round(sum(scores) / len(scores))
    print(avg_score)
    
    thresholds = [60, 63, 67, 70, 73, 77, 80, 83, 87, 90, 93, 97]
    grades = ["F", "D-", "D", "D+", "C-", "C", "C+", "B-", "B", "B+", "A-", "A", "A+"]
    index = bisect.bisect_right(thresholds, avg_score)
    return grades[index]



get_average_grade([75, 100, 88, 79, 80, 78, 64, 60])

'''
Class Average
Given an array of exam scores (numbers), return the average score in form of a letter grade according to the following chart:

Average Score	Letter Grade
97-100	"A+"
93-96	"A"
90-92	"A−"
87-89	"B+"
83-86	"B"
80-82	"B-"
77-79	"C+"
73–76	"C"
70-72	"C-"
67-69	"D+"
63-66	"D"
60–62	"D-"
below 60	"F"
Calculate the average by adding all scores in the array and dividing by the total number of scores.


Tests
Passed:1. get_average_grade([92, 91, 90, 94, 89, 93]) should return "A-".
Passed:2. get_average_grade([84, 89, 85, 100, 91, 88, 79]) should return "B+".
Passed:3. get_average_grade([63, 69, 65, 66, 71, 64, 65]) should return "D".
Passed:4. get_average_grade([97, 98, 99, 100, 96, 97, 98, 99, 100]) should return "A+".
Passed:5. get_average_grade([75, 100, 88, 79, 80, 78, 64, 60]) should return "C+".
Passed:6. get_average_grade([45, 48, 50, 52, 100, 54, 56, 58, 59]) should return "F".
'''