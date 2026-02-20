function isValidTrick(trickName) {

  const firstTrick = [
    "Misty",
    "Ghost",
    "Thunder",
    "Solar",
    "Sky",
    "Phantom",
    "Frozen",
    "Polar",
  ]

  const secondTrick = [
    "Twister",
    "Icequake",
    "Avalanche",
    "Vortex",
    "Snowstorm",
    "Frostbite",
    "Blizzard",
    "Shadow",
  ]

  const splitTrick = trickName.split(" ")

  return firstTrick.includes(splitTrick[0]) && secondTrick.includes(splitTrick[1])

}
console.log(isValidTrick("Polar Vortex"))
/*
2026 Winter Games Day 15: Freestyle Skiing
Given a trick name consisting of two words, determine if it is a valid freestyle skiing trick name.

A trick is valid if the first word is in the list of valid first words, and the second word is in the list of valid second words.

The two words will be separated by a single space.
Valid first words:

"Misty"
"Ghost"
"Thunder"
"Solar"
"Sky"
"Phantom"
"Frozen"
"Polar"
Valid second words:

"Twister"
"Icequake"
"Avalanche"
"Vortex"
"Snowstorm"
"Frostbite"
"Blizzard"
"Shadow"

Tests
Passed:1. isValidTrick("Polar Vortex") should return true.
Passed:2. isValidTrick("Solar Icequake") should return true.
Passed:3. isValidTrick("Thunder Blizzard") should return true.
Passed:4. isValidTrick("Phantom Frostbite") should return true.
Passed:5. isValidTrick("Ghost Avalanche") should return true.
Failed:6. isValidTrick("Snowstorm Shadow") should return false.
Failed:7. isValidTrick("Solar Sky") should return false.

*/