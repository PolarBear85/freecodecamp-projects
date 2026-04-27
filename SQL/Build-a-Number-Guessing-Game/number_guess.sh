#!/bin/bash

#DB query variable
PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

#Generate random number
TARGET=$((1+RANDOM % 1000))
echo $TARGET


#Ask for user to input name
echo -e "Enter your username: "
read PLAYER_NAME

#check to see if name is suitable length - 22 chars

while [[ ${#PLAYER_NAME} -lt 0 || ${#PLAYER_NAME} -gt 22 ]]
do
  #name too long - Ask for new input
  echo -e "\nName must be between 1 and 22 characters, try again:"
  read PLAYER_NAME
done

#IDEA - Name as subfunction and loop round it

#check to see if user exists in database
PLAYER_DETAILS=$($PSQL "SELECT name, player_id,COUNT(game_id),MIN(guesses) 
FROM players 
INNER JOIN games USING(player_id) 
WHERE name='$PLAYER_NAME' 
GROUP BY player_id;")

if [[ -z $PLAYER_DETAILS ]]
then
#user doesn't exist
  #display alternative welcome message
  #Insert player into database
  PLAYER_INSERT=$($PSQL "INSERT INTO players(name) VALUES ('$PLAYER_NAME')")
  #failed insertion error handling
  if [[ -z $PLAYER_INSERT ]]
  then
    echo -e "Player insertion failed, exit"
    exit 0
  fi
  echo -e "\nWelcome, $PLAYER_NAME! It looks like this is your first time here.\n"
  #Select player ID from the max to identify the last input player of that name
  PLAYER_ID=$($PSQL "SELECT MAX(player_id) FROM players WHERE name='$PLAYER_NAME';")
  echo Player ID is $PLAYER_ID
else
  #user exists
  #read name, best guess, and number of games into variables
  IFS='|' read PLAYER_NAME PLAYER_ID NUM_OF_GAMES BEST_GUESS <<< $PLAYER_DETAILS
  #display welcome message
  echo -e "Welcome back, $PLAYER_NAME! You have played $NUM_OF_GAMES games, and your best game took $BEST_GUESS guesses."
fi

PLAYER_TURNS=0
#debug message
echo $PLAYER_TURNS

GUESS_LOOP () {
#Increment player guesses
PLAYER_TURNS=$(($PLAYER_TURNS +1))
#Check if anything other than a number was entered
if [[ $1 =~ ^[^0-9]+$  ]]
then
  echo "That is not an integer, guess again:"
  read PLAYER_GUESS
  GUESS_LOOP $PLAYER_GUESS
  return
fi
#if input higher
if [[ $1 -gt $TARGET ]]
then
  #Info message - Too high
  echo "It's lower than that, guess again:"
  #Wait for input
  read PLAYER_GUESS
  #Re-run function with new input
  GUESS_LOOP $PLAYER_GUESS
  return
elif [[ $1 -lt $TARGET ]]
then  #Info message - too lower
  echo "It's higher than that, guess again:"
  read PLAYER_GUESS
  GUESS_LOOP $PLAYER_GUESS
  return
elif [[ $1 -eq $TARGET ]]
then

  echo -e "You guessed it in $PLAYER_TURNS tries. The secret number was $TARGET. Nice job!"
  #Add game to database
  GAME_INSERT=$($PSQL "INSERT INTO games(player_id,guesses) 
  VALUES($PLAYER_ID,$PLAYER_TURNS);")
  exit 0
fi
}

#display game opening message
echo -e "Guess the secret number between 1 and 1000:"

#ask for user input
read PLAYER_GUESS


#Trigger guessing loop
GUESS_LOOP $PLAYER_GUESS
#Guess loop finished



