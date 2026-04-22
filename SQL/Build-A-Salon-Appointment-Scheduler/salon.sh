#!/bin/bash

PSQL="psql -X --username=freecodecamp --dbname=salon --tuples-only -c"

echo -e "\n~~~~~ Hair Today, Gone Tomorrow ~~~~~\n"

MAIN_MENU() {
  #Check to see if any return message provided
  if [[ $1 ]] 
  then
    echo -e "\n$1"
  fi

  
  #Present main menu
  echo -e "\nPlease select a service\n"

  #retrieve services
  SERVICES=$($PSQL "SELECT * FROM services ORDER BY service_id")
  echo "$SERVICES" | while read SERVICE_ID BAR SERVICE_NAME
  do
    echo "$SERVICE_ID) $SERVICE_NAME"
  done
  #Wait for user input
  read SERVICE_ID_SELECTED

  #check to see if selection is valid
  if [[ ! $SERVICE_ID_SELECTED =~ ^[0-9]+$ ]] 
  then
    #Invalid service selected
    MAIN_MENU "That is not a valid service selection"
  fi

  case $SERVICE_ID_SELECTED in
    1) SERVICE ;;
    2) SERVICE ;;
    3) SERVICE ;;
    *) MAIN_MENU "Please enter a valid option."
  esac
}
  
SERVICE() {
  #Retrieve the service name
  SERVICE_NAME=$($PSQL "SELECT name FROM services WHERE service_id=$SERVICE_ID_SELECTED")

  #Valid service selected
  #Request customers phone number
  echo -e "\nPlease enter your phone number\n"

  #Receive phone number
  read CUSTOMER_PHONE

  #find customer's name with phone number
  read CUSTOMER_NAME <<< $($PSQL "SELECT name FROM customers WHERE phone='$CUSTOMER_PHONE';")
  
  #If can't find customer using phone number
  if [[ -z $CUSTOMER_NAME ]]
  then
  #Prompt for input
    echo -e "\nPlease enter your name\n"
    #read input
    read CUSTOMER_NAME
    #customer message
    echo "Hello $CUSTOMER_NAME, adding you to our customer database"
    #add customer and phone to database
    CUSTOMER_ADD=$($PSQL "INSERT INTO customers(name,phone) VALUES ('$CUSTOMER_NAME','$CUSTOMER_PHONE')")
  fi

  #Retrieve the customer ID using the phone number
  CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone='$CUSTOMER_PHONE';" | sed 's/ //g')

  #Prompt to select service time
  echo -e "\n Ok $CUSTOMER_NAME, when would you like your appointment to be?"
  #Receive service time
  read SERVICE_TIME

  #Add appointment to DB
  APPOINTMENT_ADDED=$($PSQL "INSERT INTO appointments(customer_id,service_id,time) VALUES('$CUSTOMER_ID','$SERVICE_ID_SELECTED','$SERVICE_TIME')")

  if [[ -z $APPOINTMENT_ADDED ]]
  then
    MAIN_MENU "I'm sorry $CUSTOMER_NAME, your appointment for a $SERVICE_NAME at $SERVICE_TIME could not be completed at this time"
  else
    echo -e "I have put you down for a $SERVICE_NAME at $SERVICE_TIME, $CUSTOMER_NAME."
  fi


}



MAIN_MENU