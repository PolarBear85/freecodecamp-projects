function moonPhase(dateString) {
  const datum = new Date("2000-01-06")
  const date = new Date(dateString)
  const dayMiliseconds = 86400000 
  console.log(date)
  console.log(datum)
  let diff = ((date - datum)/dayMiliseconds)%28+1

  console.log(diff)
  
  
  switch(true) {
    case (diff<=7):
      return "New";
    case (diff >7 && diff <=14):
      return "Waxing";
    case (diff >14&& diff <=21):
      return "Full";
    case (diff >21 && diff <=28):
      return "Waning"
  }



}


moonPhase("2000-01-13")


/*
Space Week Day 6: Moon Phase
For day six of Space Week, you will be given a date in the format "YYYY-MM-DD" and need to determine the phase of the moon for that day using the following rules:

Use a simplified lunar cycle of 28 days, divided into four equal phases:

"New": days 1 - 7
"Waxing": days 8 - 14
"Full": days 15 - 21
"Waning": days 22 - 28
After day 28, the cycle repeats with day 1, a new moon.

Use "2000-01-06" as a reference new moon (day 1 of the cycle) to determine the phase of the given day.
You will not be given any dates before the reference date.
Return the correct phase as a string.
*/