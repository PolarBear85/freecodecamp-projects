function countBusinessDays(start, end) {

  let startDate = new Date(start);
  const endDate = new Date(end)

  let workDays = 0

  while (startDate <= endDate) {
    if (startDate.getDay()!=0 && startDate.getDay()!=6) workDays++
    startDate.setDate(startDate.getDate()+1)

  }

  console.log(workDays)


  


  return workDays;
}

countBusinessDays("2026-02-24", "2027-02-24")

/*
Business Day Count
Given a start date and an end date, return the number of business days between the two.

Given dates are in the format "YYYY-MM-DD".
Weekdays are business days (Monday through Friday).
Weekends are not business days (Saturday and Sunday).
Include both the start and end dates when counting.

Tests
Waiting:1. countBusinessDays("2026-02-24", "2026-02-26") should return 3.
Waiting:2. countBusinessDays("2026-02-24", "2026-02-28") should return 4.
Waiting:3. countBusinessDays("2026-02-21", "2026-03-01") should return 5.
Waiting:4. countBusinessDays("2026-03-08", "2026-03-17") should return 7.
Waiting:5. countBusinessDays("2026-02-24", "2027-02-24") should return 262.
*/