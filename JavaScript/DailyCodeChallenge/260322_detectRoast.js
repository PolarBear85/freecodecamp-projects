function detectRoast(beans) {

  const roastTotal = beans.split("")
  .reduce((total,bean) => {
    console.log(bean)
    if (bean == "'") return total+1
    if (bean == "-") return total +2
    if (bean == ".") return total+3
  },0)

  const roastScore = roastTotal / beans.length
  console.log(roastScore)



    if (roastScore > 2.5) return "Dark"
    if (roastScore >=1.75) return "Medium"
    if (roastScore >0) return "Light"
    return "Unknown"
  
}


detectRoast("-'-''''''..-'.''-'.'")

/*
Coffee Roast Detector
Given a string representing the beans used to make a cup of coffee, determine the roast of the cup.

The given string will contain the following characters, each representing a type of bean:

An apostrophe (') is a light roast bean worth 1 point each.
A dash (-) is a medium roast bean worth 2 points each.
A period (.) is a dark roast bean worth 3 points each.
The roast level is determined by the average of all the beans.

Return:

"Light" if the average is less than 1.75.
"Medium" if the average is 1.75 to 2.5.
"Dark" if the average is greater than 2.5.
Tests:
Passed:1. detectRoast("''-''''''-'-''--''''") should return "Light".
Passed:2. detectRoast(".'-''-''..'''.-.-''-") should return "Medium".
Passed:3. detectRoast("--.''--'-''.--..-.--") should return "Medium".
Passed:4. detectRoast("-...'-......-..-...-") should return "Dark".
Passed:5. detectRoast(".--.-..-......----.'") should return "Medium".
Passed:6. detectRoast("..-..-..-..-....-.-.") should return "Dark".
Passed:7. detectRoast("-'-''''''..-'.''-'.'") should return "Light".
*/

