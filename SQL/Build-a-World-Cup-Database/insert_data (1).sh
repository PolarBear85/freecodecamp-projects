#! /bin/bash

if [[ $1 == "test" ]]
then
  PSQL="psql --username=postgres --dbname=worldcuptest -t --no-align -c"
else
  PSQL="psql --username=freecodecamp --dbname=worldcup -t --no-align -c"
fi

# Do not change code above this line. Use the PSQL variable above to query your database.
$PSQL "TRUNCATE TABLE teams,games;"

cat ./games.csv | while IFS="," read YEAR ROUND WINNER OPPONENT W_GOALS OPP_GOALS
do
  echo $WINNER $YEAR $ROUND $WINNER $W_GOALS $OPPONENT $OPP_GOALS
  #check to see if title line
  if [[ $YEAR != 'year' ]]
  then
    #Retrieve winner ID from teams table
    WINNER_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$WINNER'")
    echo $WINNNER_ID
    if [[ -z $WINNER_ID ]]
    #If not present
    then
      #insert winner ID
      WINNER_INSERT=$($PSQL "INSERT INTO teams(name) VALUES('$WINNER')")
      #Set winner ID
      WINNER_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$WINNER'")
    fi
    #retrieve oppo ID from teams table
    OPP_ID=$($PSQL "SELECT team_id FROM teams where name='$OPPONENT'")
    if [[ -z $OPP_ID ]]
    #if not present
    then
      #insert opp ID
      OPP_INSERT=$($PSQL "INSERT INTO teams(name) VALUES('$OPPONENT')")
      #Set opponent ID
      OPP_ID=$($PSQL "SELECT team_id FROM teams where name='$OPPONENT'")
    fi

    echo $WINNER_ID $OPP_ID
    #Retrieve game ID based on year, round, winner, and opponent
    GAME_ID=$($PSQL "SELECT game_id FROM games WHERE year=$YEAR AND round='$ROUND' AND winner_id=$WINNER_ID AND opponent_id=$OPP_ID")
    #if no game id
    if [[ -z $GAME_ID ]]
    #add game in
    then
      GAME_INSERT=$($PSQL "INSERT INTO games(
        year,
        winner_id,
        opponent_id,
        winner_goals,
        opponent_goals,
        round)
        VALUES(
        $YEAR,
        $WINNER_ID,
        $OPP_ID,
        $W_GOALS,
        $OPP_GOALS,
        '$ROUND')")
      echo $GAME_INSERT
    fi
  fi

done