def get_flag(code):

    offset = 127397

    return "".join(chr(ord(char) + offset) for char in code.upper())

    return code



get_flag("AL")

'''
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
Passed:1. get_flag("AL") should return "🇦🇱".
Passed:2. get_flag("AD") should return "🇦🇩".
Passed:3. get_flag("AR") should return "🇦🇷".
Passed:4. get_flag("AM") should return "🇦🇲".
Passed:5. get_flag("AU") should return "🇦🇺".
Passed:6. get_flag("AT") should return "🇦🇹".
Passed:7. get_flag("AZ") should return "🇦🇿".
Passed:8. get_flag("BE") should return "🇧🇪".
Passed:9. get_flag("BJ") should return "🇧🇯".
Passed:10. get_flag("BO") should return "🇧🇴".
Passed:11. get_flag("BA") should return "🇧🇦".
Passed:12. get_flag("BR") should return "🇧🇷".
Passed:13. get_flag("BG") should return "🇧🇬".
Passed:14. get_flag("CA") should return "🇨🇦".
Passed:15. get_flag("CL") should return "🇨🇱".
Passed:16. get_flag("CN") should return "🇨🇳".
Passed:17. get_flag("CO") should return "🇨🇴".
Passed:18. get_flag("HR") should return "🇭🇷".
Passed:19. get_flag("CY") should return "🇨🇾".
Passed:20. get_flag("CZ") should return "🇨🇿".
Passed:21. get_flag("DK") should return "🇩🇰".
Passed:22. get_flag("EC") should return "🇪🇨".
Passed:23. get_flag("ER") should return "🇪🇷".
Passed:24. get_flag("EE") should return "🇪🇪".
Passed:25. get_flag("FI") should return "🇫🇮".
Passed:26. get_flag("FR") should return "🇫🇷".
Passed:27. get_flag("GE") should return "🇬🇪".
Passed:28. get_flag("DE") should return "🇩🇪".
Passed:29. get_flag("GB") should return "🇬🇧".
Passed:30. get_flag("GR") should return "🇬🇷".
Passed:31. get_flag("GW") should return "🇬🇼".
Passed:32. get_flag("HT") should return "🇭🇹".
Passed:33. get_flag("HK") should return "🇭🇰".
Passed:34. get_flag("HU") should return "🇭🇺".
Passed:35. get_flag("IS") should return "🇮🇸".
Passed:36. get_flag("IN") should return "🇮🇳".
Passed:37. get_flag("IR") should return "🇮🇷".
Passed:38. get_flag("IE") should return "🇮🇪".
Passed:39. get_flag("IL") should return "🇮🇱".
Passed:40. get_flag("IT") should return "🇮🇹".
Passed:41. get_flag("JM") should return "🇯🇲".
Passed:42. get_flag("JP") should return "🇯🇵".
Passed:43. get_flag("KZ") should return "🇰🇿".
Passed:44. get_flag("KE") should return "🇰🇪".
Passed:45. get_flag("XK") should return "🇽🇰".
Passed:46. get_flag("KG") should return "🇰🇬".
Passed:47. get_flag("LV") should return "🇱🇻".
Passed:48. get_flag("LB") should return "🇱🇧".
Passed:49. get_flag("LI") should return "🇱🇮".
Passed:50. get_flag("LT") should return "🇱🇹".
Passed:51. get_flag("LU") should return "🇱🇺".
Passed:52. get_flag("MG") should return "🇲🇬".
Passed:53. get_flag("MY") should return "🇲🇾".
Passed:54. get_flag("MT") should return "🇲🇹".
Passed:55. get_flag("MX") should return "🇲🇽".
Passed:56. get_flag("MD") should return "🇲🇩".
Passed:57. get_flag("MC") should return "🇲🇨".
Passed:58. get_flag("MN") should return "🇲🇳".
Passed:59. get_flag("ME") should return "🇲🇪".
Passed:60. get_flag("MA") should return "🇲🇦".
Passed:61. get_flag("NL") should return "🇳🇱".
Passed:62. get_flag("NZ") should return "🇳🇿".
Passed:63. get_flag("NG") should return "🇳🇬".
Passed:64. get_flag("MK") should return "🇲🇰".
Passed:65. get_flag("NO") should return "🇳🇴".
Passed:66. get_flag("PK") should return "🇵🇰".
Passed:67. get_flag("PH") should return "🇵🇭".
Passed:68. get_flag("PL") should return "🇵🇱".
Passed:69. get_flag("PT") should return "🇵🇹".
Passed:70. get_flag("PR") should return "🇵🇷".
Passed:71. get_flag("RO") should return "🇷🇴".
Passed:72. get_flag("SM") should return "🇸🇲".
Passed:73. get_flag("SA") should return "🇸🇦".
Passed:74. get_flag("RS") should return "🇷🇸".
Passed:75. get_flag("SG") should return "🇸🇬".
Passed:76. get_flag("SK") should return "🇸🇰".
Passed:77. get_flag("SI") should return "🇸🇮".
Passed:78. get_flag("ZA") should return "🇿🇦".
Passed:79. get_flag("KR") should return "🇰🇷".
Passed:80. get_flag("ES") should return "🇪🇸".
Passed:81. get_flag("SE") should return "🇸🇪".
Passed:82. get_flag("CH") should return "🇨🇭".
Passed:83. get_flag("TH") should return "🇹🇭".
Passed:84. get_flag("TT") should return "🇹🇹".
Passed:85. get_flag("TR") should return "🇹🇷".
Passed:86. get_flag("UA") should return "🇺🇦".
Passed:87. get_flag("AE") should return "🇦🇪".
Passed:88. get_flag("US") should return "🇺🇸".
Passed:89. get_flag("UY") should return "🇺🇾".
Passed:90. get_flag("UZ") should return "🇺🇿".
Passed:91. get_flag("VE") should return "🇻🇪".
'''