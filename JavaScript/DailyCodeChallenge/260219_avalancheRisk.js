function avalancheRisk(snowDepth, slope) {

  const snow = [
    ["Safe","Safe","Safe"],
    ["Safe","Risky","Risky"],
    ["Safe","Risky","Risky"]
  ]

  console.log(snow)

  const slopeGrade= ["Gentle","Steep","Very Steep"]
  const depthGrade = ["Shallow","Moderate","Deep"]

  const depthRate = depthGrade.indexOf(snowDepth)
  const slopeRate = slopeGrade.indexOf(slope)
  console.log(depthRate)
  console.log(slopeRate)

  return snow[slopeRate][depthRate]

}

avalancheRisk("Moderate", "Very Steep")

/*
2026 Winter Games Day 14: Ski Mountaineering
Given the snow depth and slope of a mountain, determine if there's an avalanche risk.

The snow depth values are "Shallow", "Moderate", or "Deep".
Slope values are "Gentle", "Steep", or "Very Steep".
Return "Safe" or "Risky" based on this table:

"Shallow"	"Moderate"	"Deep"
"Gentle"	"Safe"	"Safe"	"Safe"
"Steep"	"Safe"	"Risky"	"Risky"
"Very Steep"	"Safe"	"Risky"	"Risky"

Tests
Passed:1. avalancheRisk("Shallow", "Gentle") should return "Safe".
Passed:2. avalancheRisk("Shallow", "Steep") should return "Safe".
Passed:3. avalancheRisk("Shallow", "Very Steep") should return "Safe".
Passed:4. avalancheRisk("Moderate", "Gentle") should return "Safe".
Passed:5. avalancheRisk("Moderate", "Steep") should return "Risky".
Passed:6. avalancheRisk("Moderate", "Very Steep") should return "Risky".
Passed:7. avalancheRisk("Deep", "Gentle") should return "Safe".
Passed:8. avalancheRisk("Deep", "Steep") should return "Risky".
Passed:9. avalancheRisk("Deep", "Very Steep") should return "Risky".
*/