function getWeekday(dateString) {
  const date = new Date(dateString)
  const day = date.getUTCDay()
  const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  return dayNames[day]
}


console.log(getWeekday("1111-11-11"))


/*
Weekday Finder
Given a string date in the format YYYY-MM-DD, return the day of the week.

Valid return days are:

"Sunday"
"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
Be sure to ignore time zones.

*/