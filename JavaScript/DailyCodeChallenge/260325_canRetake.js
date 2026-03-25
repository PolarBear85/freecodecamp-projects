function canRetake(finishTime, currentTime) {

  const current = new Date(currentTime)
  const finish = new Date(finishTime)

  const timeDiff = current - finish
  const hoursCalc = 1000*3600

  

  return timeDiff / hoursCalc >= 48 ? true : false

}


canRetake("2026-03-23T08:00:00", "2026-03-25T14:00:00")

/*
Cooldown Time
Given two timestamps, the first representing when a user finished an exam, and the second representing the current time, determine whether the user can take an exam again.

Both timestamps will be given the format: "YYYY-MM-DDTHH:MM:SS", for example "2026-03-25T14:00:00". Note that the time is 24-hour clock.
A user must wait at least 48 hours before retaking an exam.
Tests:
Passed:1. canRetake("2026-03-23T08:00:00", "2026-03-25T14:00:00") should return true.
Passed:2. canRetake("2026-03-24T14:00:00", "2026-03-25T10:00:00") should return false.
Passed:3. canRetake("2026-03-23T09:25:00", "2026-03-25T09:25:00") should return true.
Passed:4. canRetake("2026-03-23T11:50:00", "2026-03-25T11:49:59") should return false.

*/