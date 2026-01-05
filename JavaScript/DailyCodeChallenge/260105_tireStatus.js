function tireStatus(pressuresPSI, rangeBar) {

  const convert = 14.5038

  const [low,high] = rangeBar.map(bar => bar*convert)

  const returnArr = pressuresPSI.map(tyre => {
    if (tyre < low) {
      return "Low"
    } else if (tyre > high) {
      return "High"
    } else {
      return "Good"
    }
  })

  console.log(returnArr)

  return returnArr;
}

tireStatus([30, 28, 30, 29], [1.9, 2.1])

/*
Tire Pressure
Given an array with four numbers representing the tire pressures in psi of the four tires in your vehicle, and another array of two numbers representing the minimum and maximum pressure for your tires in bar, return an array of four strings describing each tire's status.

1 bar equal 14.5038 psi.
Return an array with the following values for each tire:

"Low" if the tire pressure is below the minimum allowed.
"Good" if it's between the minimum and maximum allowed.
"High" if it's above the maximum allowed.

Tests
Passed:1. tireStatus([32, 28, 35, 29], [2, 3]) should return ["Good", "Low", "Good", "Low"].
Passed:2. tireStatus([32, 28, 35, 30], [2, 2.3]) should return ["Good", "Low", "High", "Good"].
Passed:3. tireStatus([29, 26, 31, 28], [2.1, 2.5]) should return ["Low", "Low", "Good", "Low"].
Passed:4. tireStatus([31, 31, 30, 29], [1.5, 2]) should return ["High", "High", "High", "Good"].
Passed:5. tireStatus([30, 28, 30, 29], [1.9, 2.1]) should return ["Good", "Good", "Good", "Good"].

*/