function format(seconds) {

  const givenSeconds = String(seconds % 60).padStart(2,"0")
  const totalMinutes = Math.floor(seconds/60)
  const givenMinutes = totalMinutes % 60 < 1 ? "0" : totalMinutes % 60
  const givenHours = Math.floor(totalMinutes / 60) > 0 ? Math.floor(totalMinutes / 60) : ""
  const hourSeparator = givenHours ? ":" : ""
  const formattedMinutes = givenHours && givenMinutes < 9 ? String(givenMinutes).padStart(2,"0") : givenMinutes
  

  console.log(`${givenHours}${hourSeparator}${formattedMinutes}:${givenSeconds}`)


  return `${givenHours}${hourSeparator}${formattedMinutes}:${givenSeconds}`
}


format(4000)
format(500)
format(1)

/*
Duration Formatter
Given an integer number of seconds, return a string representing the same duration in the format "H:MM:SS", where "H" is the number of hours, "MM" is the number of minutes, and "SS" is the number of seconds. Return the time using the following rules:

Seconds: Should always be two digits.
Minutes: Should omit leading zeros when they aren't needed. Use "0" if the duration is less than one minute.
Hours: Should be included only if they're greater than zero.
Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Passed:1. format(500) should return "8:20".
Passed:2. format(4000) should return "1:06:40".
Passed:3. format(1) should return "0:01".
Passed:4. format(5555) should return "1:32:35".
Passed:5. format(99999) should return "27:46:39".
*/