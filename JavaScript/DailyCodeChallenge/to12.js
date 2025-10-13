function to12(time) {

  let hours = Number(time.slice(0,2))
  let minutes = time.slice(2,4)

  if ((hours - 12)>0) {
    const period = "PM"

    return `${hours-12}:${minutes} ${period}`
  } else {
    const period = "AM"
    
    if (hours ===0) {
      hours = 12
    }
    return `${hours}:${minutes} ${period}`
  }

}


to12("1124")
to12("0900")
to12("1455")
to12("0030")

/*
24 to 12
Given a string representing a time of the day in the 24-hour format of "HHMM", return the time in its equivalent 12-hour format of "H:MM AM" or "H:MM PM".

The given input will always be a four-digit string in 24-hour time format, from "0000" to "2359".
*/