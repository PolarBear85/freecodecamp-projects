function speedCheck(speedMph, speedLimitKph) {

  const convert = 1.60934

  const kphSpeed = speedMph * convert
  console.log(kphSpeed)

  switch (true) {
    case kphSpeed < speedLimitKph: return "Not Speeding"
    case kphSpeed < speedLimitKph + 5: return "Warning"
    case kphSpeed + 5> speedLimitKph + 5: return "Ticket"
  }


}


 speedCheck(88, 40)

 /*
 Speed Check
Given the speed you are traveling in miles per hour (MPH), and a speed limit in kilometers per hour (KPH), determine whether you are speeding and if you will get a warning or a ticket.

1 mile equals 1.60934 kilometers.
If you are travelling less than or equal to the speed limit, return "Not Speeding".
If you are travelling 5 KPH or less over the speed limit, return "Warning".
If you are travelling more than 5 KPH over the speed limit, return "Ticket".

Tests
Passed:1. speedCheck(30, 70) should return "Not Speeding".
Passed:2. speedCheck(40, 60) should return "Warning".
Passed:3. speedCheck(40, 65) should return "Not Speeding".
Passed:4. speedCheck(60, 90) should return "Ticket".
Passed:5. speedCheck(65, 100) should return "Warning".
Passed:6. speedCheck(88, 40) should return "Ticket".

*/