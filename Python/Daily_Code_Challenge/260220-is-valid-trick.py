def is_valid_trick(trick_name):

    first_trick = [
    "Misty",
    "Ghost",
    "Thunder",
    "Solar",
    "Sky",
    "Phantom",
    "Frozen",
    "Polar",
  ]

    second_trick = [
    "Twister",
    "Icequake",
    "Avalanche",
    "Vortex",
    "Snowstorm",
    "Frostbite",
    "Blizzard",
    "Shadow",
  ]

    split_trick = trick_name.split()

    return split_trick[0] in first_trick and split_trick[1] in second_trick



is_valid_trick("Thunder Blizzard")

'''
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
Passed:1. is_valid_trick("Polar Vortex") should return True.
Passed:2. is_valid_trick("Solar Icequake") should return True.
Passed:3. is_valid_trick("Thunder Blizzard") should return True.
Passed:4. is_valid_trick("Phantom Frostbite") should return True.
Passed:5. is_valid_trick("Ghost Avalanche") should return True.
Passed:6. is_valid_trick("Snowstorm Shadow") should return False.
Passed:7. is_valid_trick("Solar Sky") should return False.

'''