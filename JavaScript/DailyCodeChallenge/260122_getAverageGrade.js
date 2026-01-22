function getAverageGrade(scores) {

  const scoreTable = [
    {threshold:97, grade:"A+"},
    {threshold:93, grade:"A"},
    {threshold:90, grade:"A-"},
    {threshold:87, grade:"B+"},
    {threshold:83, grade:"B"},
    {threshold:80, grade:"B-"},
    {threshold:77, grade:"C+"},
    {threshold:73, grade:"C"},
    {threshold:70, grade:"C-"},
    {threshold:67, grade:"D+"},
    {threshold:63, grade:"D"},
    {threshold:60, grade:"D-"},
    {threshold:0, grade:"F"}
  ]

  const avgScore = Math.round(scores.reduce((accumulator,score) => {
    return accumulator + score
  },0)/scores.length)

  console.log(avgScore)


  const returnGrade = scoreTable.find(item => {
    return avgScore >= item.threshold;
  })

  console.log(returnGrade)
  return returnGrade.grade;
}

getAverageGrade([75, 100, 88, 79, 80, 78, 64, 60])

/*
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
Passed:1. getAverageGrade([92, 91, 90, 94, 89, 93]) should return "A-".
Passed:2. getAverageGrade([84, 89, 85, 100, 91, 88, 79]) should return "B+".
Passed:3. getAverageGrade([63, 69, 65, 66, 71, 64, 65]) should return "D".
Passed:4. getAverageGrade([97, 98, 99, 100, 96, 97, 98, 99, 100]) should return "A+".
Passed:5. getAverageGrade([75, 100, 88, 79, 80, 78, 64, 60]) should return "C+".
Passed:6. getAverageGrade([45, 48, 50, 52, 100, 54, 56, 58, 59]) should return "F".
*/