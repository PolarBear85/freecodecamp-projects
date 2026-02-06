function getFlag(code) {
  
  const flagCode = code
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt())

    return String.fromCodePoint(...flagCode)



}


console.log(getFlag("AL"))

/*
2026 Winter Games Day 1: Opening Day
Today marks the start of the 2026 Winter Games. The next 17 days will bring you coding challenges inspired by them.

For the first one, you are given a two-letter country code and need to return the flag emoji for that country.

Use this list:

Country	Code	Flag
Albania	"AL"	"🇦🇱"
Andorra	"AD"	"🇦🇩"
Argentina	"AR"	"🇦🇷"
Armenia	"AM"	"🇦🇲"
Australia	"AU"	"🇦🇺"
Austria	"AT"	"🇦🇹"
Azerbaijan	"AZ"	"🇦🇿"
Belgium	"BE"	"🇧🇪"
Benin	"BJ"	"🇧🇯"
Bolivia	"BO"	"🇧🇴"
Bosnia and Herzegovina	"BA"	"🇧🇦"
Brazil	"BR"	"🇧🇷"
Bulgaria	"BG"	"🇧🇬"
Canada	"CA"	"🇨🇦"
Chile	"CL"	"🇨🇱"
China	"CN"	"🇨🇳"
Colombia	"CO"	"🇨🇴"
Croatia	"HR"	"🇭🇷"
Cyprus	"CY"	"🇨🇾"
Czech Republic	"CZ"	"🇨🇿"
Denmark	"DK"	"🇩🇰"
Ecuador	"EC"	"🇪🇨"
Eritrea	"ER"	"🇪🇷"
Estonia	"EE"	"🇪🇪"
Finland	"FI"	"🇫🇮"
France	"FR"	"🇫🇷"
Georgia	"GE"	"🇬🇪"
Germany	"DE"	"🇩🇪"
Great Britain	"GB"	"🇬🇧"
Greece	"GR"	"🇬🇷"
Guinea-Bissau	"GW"	"🇬🇼"
Haiti	"HT"	"🇭🇹"
Hong Kong	"HK"	"🇭🇰"
Hungary	"HU"	"🇭🇺"
Iceland	"IS"	"🇮🇸"
India	"IN"	"🇮🇳"
Iran	"IR"	"🇮🇷"
Ireland	"IE"	"🇮🇪"
Israel	"IL"	"🇮🇱"
Italy	"IT"	"🇮🇹"
Jamaica	"JM"	"🇯🇲"
Japan	"JP"	"🇯🇵"
Kazakhstan	"KZ"	"🇰🇿"
Kenya	"KE"	"🇰🇪"
Kosovo	"XK"	"🇽🇰"
Kyrgyzstan	"KG"	"🇰🇬"
Latvia	"LV"	"🇱🇻"
Lebanon	"LB"	"🇱🇧"
Liechtenstein	"LI"	"🇱🇮"
Lithuania	"LT"	"🇱🇹"
Luxembourg	"LU"	"🇱🇺"
Madagascar	"MG"	"🇲🇬"
Malaysia	"MY"	"🇲🇾"
Malta	"MT"	"🇲🇹"
Mexico	"MX"	"🇲🇽"
Moldova	"MD"	"🇲🇩"
Monaco	"MC"	"🇲🇨"
Mongolia	"MN"	"🇲🇳"
Montenegro	"ME"	"🇲🇪"
Morocco	"MA"	"🇲🇦"
Netherlands	"NL"	"🇳🇱"
New Zealand	"NZ"	"🇳🇿"
Nigeria	"NG"	"🇳🇬"
North Macedonia	"MK"	"🇲🇰"
Norway	"NO"	"🇳🇴"
Pakistan	"PK"	"🇵🇰"
Philippines	"PH"	"🇵🇭"
Poland	"PL"	"🇵🇱"
Portugal	"PT"	"🇵🇹"
Puerto Rico	"PR"	"🇵🇷"
Romania	"RO"	"🇷🇴"
San Marino	"SM"	"🇸🇲"
Saudi Arabia	"SA"	"🇸🇦"
Serbia	"RS"	"🇷🇸"
Singapore	"SG"	"🇸🇬"
Slovakia	"SK"	"🇸🇰"
Slovenia	"SI"	"🇸🇮"
South Africa	"ZA"	"🇿🇦"
South Korea	"KR"	"🇰🇷"
Spain	"ES"	"🇪🇸"
Sweden	"SE"	"🇸🇪"
Switzerland	"CH"	"🇨🇭"
Thailand	"TH"	"🇹🇭"
Trinidad & Tobago	"TT"	"🇹🇹"
Turkey	"TR"	"🇹🇷"
Ukraine	"UA"	"🇺🇦"
United Arab Emirates	"AE"	"🇦🇪"
United States	"US"	"🇺🇸"
Uruguay	"UY"	"🇺🇾"
Uzbekistan	"UZ"	"🇺🇿"
Venezuela	"VE"	"🇻🇪"

Tests
Passed:1. getFlag("AL") should return "🇦🇱".
Passed:2. getFlag("AD") should return "🇦🇩".
Passed:3. getFlag("AR") should return "🇦🇷".
Passed:4. getFlag("AM") should return "🇦🇲".
Passed:5. getFlag("AU") should return "🇦🇺".
Passed:6. getFlag("AT") should return "🇦🇹".
Passed:7. getFlag("AZ") should return "🇦🇿".
Passed:8. getFlag("BE") should return "🇧🇪".
Passed:9. getFlag("BJ") should return "🇧🇯".
Passed:10. getFlag("BO") should return "🇧🇴".
Passed:11. getFlag("BA") should return "🇧🇦".
Passed:12. getFlag("BR") should return "🇧🇷".
Passed:13. getFlag("BG") should return "🇧🇬".
Passed:14. getFlag("CA") should return "🇨🇦".
Passed:15. getFlag("CL") should return "🇨🇱".
Passed:16. getFlag("CN") should return "🇨🇳".
Passed:17. getFlag("CO") should return "🇨🇴".
Passed:18. getFlag("HR") should return "🇭🇷".
Passed:19. getFlag("CY") should return "🇨🇾".
Passed:20. getFlag("CZ") should return "🇨🇿".
Passed:21. getFlag("DK") should return "🇩🇰".
Passed:22. getFlag("EC") should return "🇪🇨".
Passed:23. getFlag("ER") should return "🇪🇷".
Passed:24. getFlag("EE") should return "🇪🇪".
Passed:25. getFlag("FI") should return "🇫🇮".
Passed:26. getFlag("FR") should return "🇫🇷".
Passed:27. getFlag("GE") should return "🇬🇪".
Passed:28. getFlag("DE") should return "🇩🇪".
Passed:29. getFlag("GB") should return "🇬🇧".
Passed:30. getFlag("GR") should return "🇬🇷".
Passed:31. getFlag("GW") should return "🇬🇼".
Passed:32. getFlag("HT") should return "🇭🇹".
Passed:33. getFlag("HK") should return "🇭🇰".
Passed:34. getFlag("HU") should return "🇭🇺".
Passed:35. getFlag("IS") should return "🇮🇸".
Passed:36. getFlag("IN") should return "🇮🇳".
Passed:37. getFlag("IR") should return "🇮🇷".
Passed:38. getFlag("IE") should return "🇮🇪".
Passed:39. getFlag("IL") should return "🇮🇱".
Passed:40. getFlag("IT") should return "🇮🇹".
Passed:41. getFlag("JM") should return "🇯🇲".
Passed:42. getFlag("JP") should return "🇯🇵".
Passed:43. getFlag("KZ") should return "🇰🇿".
Passed:44. getFlag("KE") should return "🇰🇪".
Passed:45. getFlag("XK") should return "🇽🇰".
Passed:46. getFlag("KG") should return "🇰🇬".
Passed:47. getFlag("LV") should return "🇱🇻".
Passed:48. getFlag("LB") should return "🇱🇧".
Passed:49. getFlag("LI") should return "🇱🇮".
Passed:50. getFlag("LT") should return "🇱🇹".
Passed:51. getFlag("LU") should return "🇱🇺".
Passed:52. getFlag("MG") should return "🇲🇬".
Passed:53. getFlag("MY") should return "🇲🇾".
Passed:54. getFlag("MT") should return "🇲🇹".
Passed:55. getFlag("MX") should return "🇲🇽".
Passed:56. getFlag("MD") should return "🇲🇩".
Passed:57. getFlag("MC") should return "🇲🇨".
Passed:58. getFlag("MN") should return "🇲🇳".
Passed:59. getFlag("ME") should return "🇲🇪".
Passed:60. getFlag("MA") should return "🇲🇦".
Passed:61. getFlag("NL") should return "🇳🇱".
Passed:62. getFlag("NZ") should return "🇳🇿".
Passed:63. getFlag("NG") should return "🇳🇬".
Passed:64. getFlag("MK") should return "🇲🇰".
Passed:65. getFlag("NO") should return "🇳🇴".
Passed:66. getFlag("PK") should return "🇵🇰".
Passed:67. getFlag("PH") should return "🇵🇭".
Passed:68. getFlag("PL") should return "🇵🇱".
Passed:69. getFlag("PT") should return "🇵🇹".
Passed:70. getFlag("PR") should return "🇵🇷".
Passed:71. getFlag("RO") should return "🇷🇴".
Passed:72. getFlag("SM") should return "🇸🇲".
Passed:73. getFlag("SA") should return "🇸🇦".
Passed:74. getFlag("RS") should return "🇷🇸".
Passed:75. getFlag("SG") should return "🇸🇬".
Passed:76. getFlag("SK") should return "🇸🇰".
Passed:77. getFlag("SI") should return "🇸🇮".
Passed:78. getFlag("ZA") should return "🇿🇦".
Passed:79. getFlag("KR") should return "🇰🇷".
Passed:80. getFlag("ES") should return "🇪🇸".
Passed:81. getFlag("SE") should return "🇸🇪".
Passed:82. getFlag("CH") should return "🇨🇭".
Passed:83. getFlag("TH") should return "🇹🇭".
Passed:84. getFlag("TT") should return "🇹🇹".
Passed:85. getFlag("TR") should return "🇹🇷".
Passed:86. getFlag("UA") should return "🇺🇦".
Passed:87. getFlag("AE") should return "🇦🇪".
Passed:88. getFlag("US") should return "🇺🇸".
Passed:89. getFlag("UY") should return "🇺🇾".
Passed:90. getFlag("UZ") should return "🇺🇿".
Passed:91. getFlag("VE") should return "🇻🇪".

*/