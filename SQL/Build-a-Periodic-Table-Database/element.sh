#!/bin/bash
PSQL="psql --username=freecodecamp --dbname=<database_name> -t --no-align -c"

#check to see if argument provided
if [[ -z $1 ]]
then
  echo Please provide an element as an argument
  exit 1
fi

ATOMIC_NUMBER