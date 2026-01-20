function milePace(miles, duration) {

  const splitTime = duration.split(":")

  const minsToSecs = Number(splitTime[0]*60)
  console.log(minsToSecs)
  const totalTime = minsToSecs+Number(splitTime[1])
  console.log(totalTime)

  const avgSecs = totalTime / miles
  console.log(avgSecs)

  const avgMins = Math.floor(avgSecs/60).toString().padStart(2,"0")
  console.log(avgMins)
  const remainSecs = Math.floor(avgSecs%60).toString().padStart(2,"0")
  
  console.log(remainSecs)


  return `${avgMins}:${remainSecs}`;
}

milePace(26.2, "120:35")

/*
Mile Pace
Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format "MM:SS".

Add leading zeros when needed.

Tests
Passed:1. milePace(3, "24:00") should return "08:00".
Passed:2. milePace(1, "06:45") should return "06:45".
Passed:3. milePace(2, "07:00") should return "03:30".
Passed:4. milePace(26.2, "120:35") should return "04:36".
*/