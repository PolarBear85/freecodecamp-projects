function oddOrEvenDay(timestamp) {

  const day = new Date(timestamp).getUTCDate()

  return day % 2 ? "odd":"even"
}

oddOrEvenDay(6739456780000)

/*
Odd or Even Day
Given a timestamp (number of milliseconds since the Unix epoch), return:

"odd" if the day of the month for that timestamp is odd.
"even" if the day of the month for that timestamp is even.
For example, given 1769472000000, a timestamp for January 27th, 2026, return "odd" because the day number (27) is an odd number.

Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Passed:1. oddOrEvenDay(1769472000000) should return "odd".
Passed:2. oddOrEvenDay(1769444440000) should return "even".
Passed:3. oddOrEvenDay(6739456780000) should return "odd".
Passed:4. oddOrEvenDay(1) should return "odd".
Passed:5. oddOrEvenDay(86400000) should return "even".

*/