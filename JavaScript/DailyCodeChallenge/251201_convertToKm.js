function convertToKm(miles) {

  const kmConvert = 1.60934
  
  return (miles*kmConvert).toFixed(2)

}

console.log(convertToKm(1))

/*
Miles to Kilometers
Given a distance in miles as a number, return the equivalent distance in kilometers.

The input will always be a non-negative number.
1 mile equals 1.60934 kilometers.
Round the result to two decimal places.

Passed:1. convertToKm(1) should return 1.61.
Passed:2. convertToKm(21) should return 33.8.
Passed:3. convertToKm(3.5) should return 5.63.
Passed:4. convertToKm(0) should return 0.
Passed:5. convertToKm(0.621371) should return 1.

*/