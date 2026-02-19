def avalanche_risk(snow_depth, slope):

    risk_table = {
        "Gentle":{"Shallow":"Safe","Moderate":"Safe","Deep":"Safe"},
        "Steep":{"Shallow":"Safe","Moderate":"Risky","Deep":"Risky"},
        "Very Steep":{"Shallow":"Safe","Moderate":"Risky","Deep":"Risky"}
    }

    print(risk_table[slope][snow_depth])

    return risk_table[slope][snow_depth]

avalanche_risk("Deep", "Very Steep")

'''
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
Passed:1. avalanche_risk("Shallow", "Gentle") should return "Safe".
Passed:2. avalanche_risk("Shallow", "Steep") should return "Safe".
Passed:3. avalanche_risk("Shallow", "Very Steep") should return "Safe".
Passed:4. avalanche_risk("Moderate", "Gentle") should return "Safe".
Passed:5. avalanche_risk("Moderate", "Steep") should return "Risky".
Passed:6. avalanche_risk("Moderate", "Very Steep") should return "Risky".
Passed:7. avalanche_risk("Deep", "Gentle") should return "Safe".
Passed:8. avalanche_risk("Deep", "Steep") should return "Risky".
Passed:9. avalanche_risk("Deep", "Very Steep") should return "Risky".
'''