#!/bin/bash
PSQL="psql --username=freecodecamp --dbname=periodic_table -t --no-align -c"

#check to see if argument provided
if [[ -z $1 ]]
then
  echo Please provide an element as an argument.
  exit 0
else
  ELEMENT_PROPERTIES=$($PSQL "SELECT * FROM elements INNER JOIN properties USING(atomic_number) INNER JOIN types USING(type_id)
    WHERE atomic_number::text='$1'
    OR symbol='$1'
    OR name='$1'")

  if [[ -z $ELEMENT_PROPERTIES ]]
  then
    echo -e "I could not find that element in the database."
  else
    IFS='|' read TYPE_ID ATOMIC_NUM SYMBOL NAME MASS MELT BOIL TYPE<<< $ELEMENT_PROPERTIES 

    echo -e "The element with atomic number $ATOMIC_NUM is $NAME ($SYMBOL). It's a $TYPE, with a mass of $MASS amu. $NAME has a melting point of $MELT celsius and a boiling point of $BOIL celsius."

  fi

fi





