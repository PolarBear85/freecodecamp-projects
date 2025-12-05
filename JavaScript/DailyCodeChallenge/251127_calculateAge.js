function calculateAge(birthday) {

  const thisDate = new Date("2025-11-27")
  console.log(thisDate)
  const birthDate = new Date (birthday)
  console.log(birthDate)

  const thisYear = thisDate.getFullYear()
  const birthYear = birthDate.getFullYear()

  const thisMonth = thisDate.getMonth()
  const birthMonth = birthDate.getMonth()

  const thisDay = thisDate.getDate()
  const birthDay = birthDate.getDate()

  const yearDiff = thisYear - birthYear
  console.log(yearDiff)

  /*
  if this month is less than the birth month then age -1
  if this month is the same as birth month, but today is less than birth day then age -1
  if this month is the same as birth month, but today is greater than birth day, then age
  if this month is greater than birth month, then age

  */

  switch (true) {
    case thisMonth < birthMonth: 
      return yearDiff -1
    case thisMonth === birthMonth && thisDay < birthDay:
      return yearDiff -1
    case thisMonth === birthMonth && thisDay >=birthDay:
      return yearDiff
    case thisMonth > birthMonth:
      return yearDiff
  }



}

calculateAge("2000-11-20")

/*
What's My Age Again?
Given the date of someone's birthday in the format YYYY-MM-DD, return the person's age as of November 27th, 2025.

Assume all birthdays are valid dates before November 27th, 2025.
Return the age as an integer.
Be sure to account for whether the person has already had their birthday in 2025.

Tests
Passed:1. calculateAge("2000-11-20") should return 25.
Passed:2. calculateAge("2000-12-01") should return 24.
Passed:3. calculateAge("2014-10-25") should return 11.
Passed:4. calculateAge("1994-01-06") should return 31.
Passed:5. calculateAge("1994-12-14") should return 30.
*/
