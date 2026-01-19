function compareEnergy(caloriesBurned, wattHoursUsed) {

  const kcalToJoule = 4184
  const wattToJoule = 3600

  const jouleHours = wattHoursUsed * wattToJoule
  const joulekCal = kcalToJoule * caloriesBurned

  console.log(jouleHours,joulekCal)

  switch (true) {
    case (jouleHours > joulekCal): return "Devices"
    case (jouleHours < joulekCal): return "Workout"
    default: return "Equal"


  }
}


compareEnergy(100,200)

/*
Energy Consumption
Given the number of Calories burned during a workout, and the number of watt-hours used by your electronic devices during that workout, determine which one used more energy.

To compare them, convert both values to joules using the following conversions:

1 Calorie equals 4184 joules.
1 watt-hour equals 3600 joules.
Return:

"Workout" if the workout used more energy.
"Devices" if the device used more energy.
"Equal" if both used the same amount of energy.

Tests
Passed:1. compareEnergy(250, 50) should return "Workout".
Passed:2. compareEnergy(100, 200) should return "Devices".
Passed:3. compareEnergy(450, 523) should return "Equal".
Passed:4. compareEnergy(300, 75) should return "Workout".
Passed:5. compareEnergy(200, 250) should return "Devices".
Passed:6. compareEnergy(900, 1046) should return "Equal".

*/