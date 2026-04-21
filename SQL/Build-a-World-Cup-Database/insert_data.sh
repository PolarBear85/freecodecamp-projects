#! /bin/bash

if [[ $1 == "test" ]]
then
  PSQL="psql --username=postgres --dbname=worldcuptest -t --no-align -c"
else
  PSQL="psql --username=freecodecamp --dbname=worldcup -t --no-align -c"
fi



# Do not change code above this line. Use the PSQL variable above to query your database.




#cat ./games.csv | while IFS="," read YEAR ROUND WINNER OPPONENT W_GOALS OPP_GOALS
#do
  #echo $YEAR $ROUND $WINNER
#done

$PSQL "CREATE TABLE teams(
  team_id SERIAL PRIMARY KEY,
  name VARCHAR(80) NOT NULL UNIQUE);"


$PSQL "CREATE TABLE games(
  game_id SERIAL PRIMARY KEY,
  year INT NOT NULL,
  winner_id INT NOT NULL REFERENCES teams(team_id) ,
  opponent_id INT NOT NULL REFERENCES teams(team_id), 
  winner_goals INT NOT NULL,
  opponent_goals INT NOT NULL, 
  round VARCHAR(80) NOT NULL );"