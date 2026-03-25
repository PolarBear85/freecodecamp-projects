function getShadow(time) {


 const half = parseInt(time.slice(3)) == 30?0.5 : 0

 const hours = parseInt(time.slice(0,2)) + half
 console.log(hours)
 const fromNoon = Math.abs(12 - hours)
 console.log(fromNoon)
 const distance = fromNoon*fromNoon*fromNoon
 
 

 const dayTime = hours>12 ? "east": "west"


  if (hours < 6 || hours >=18 || hours == 12) return "No shadow"

  return `${distance}ft ${dayTime}`

}


console.log(getShadow("10:00"))

/*
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
Passed:1. getShadow("10:00") should return "8ft west".
Passed:2. getShadow("15:00") should return "27ft east".
Passed:3. getShadow("12:00") should return "No shadow".
Passed:4. getShadow("17:30") should return "166.375ft east".
Passed:5. getShadow("05:00") should return "No shadow".
Passed:6. getShadow("06:00") should return "216ft west".
Passed:7. getShadow("18:00") should return "No shadow".
Passed:8. getShadow("07:30") should return "91.125ft west".
Passed:9. getShadow("00:00") should return "No shadow"
*/