function daysUntilWeekend(dateString) {
  const date = new Date(dateString)
  const day = date.getDay()
  const days = 6 - day

  switch (true) {
    case (day === 0 || day === 6) :
      return "It's the weekend!"
    case (day === 5) :
      return `${days} day until the weekend.`
    default:
      return `${days} days until the weekend.`
  }

}

console.log (daysUntilWeekend("2026-11-29"))

/*
Is It the Weekend?
Given a date in the format "YYYY-MM-DD", return the number of days left until the weekend.

The weekend starts on Saturday.
If the given date is Saturday or Sunday, return "It's the weekend!".
Otherwise, return "X days until the weekend.", where X is the number of days until Saturday.
If X is 1, use "day" (singular) instead of "days" (plural).
Make sure the calculation ignores your local timezone.

*/