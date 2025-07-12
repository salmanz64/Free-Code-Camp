#! /bin/bash

PSQL="psql -X --username=freecodecamp --dbname=salon --tuples-only -c"

echo -e "\n~~~~~ MY SALON ~~~~~\n"

echo -e "Welcome to My Salon, how can I help you?\n"


SERVICES_MENU(){
  if [[ $1 ]]
  then
    echo -e "\n$1"
  fi 

  SERVICES=$($PSQL "select * from services")
  echo  "$SERVICES" | while read SERVICE_ID BAR SERVICE_NAME
  do
    echo "$SERVICE_ID) $SERVICE_NAME"
  done
  }

CHECK_IF_LOGGED(){
  echo -e "\nWhat's your phone number?"
  read CUSTOMER_PHONE
  FIND_USER=$($PSQL "select customer_id,name from customers where phone='$CUSTOMER_PHONE'")
  if [[ -z $FIND_USER ]]
  then
    echo -e "\nI don't have a record for that phone number, what's your name?"
    read CUSTOMER_NAME
    ADD_THE_CUSTOMER=$($PSQL "INSERT INTO customers(phone,name) values('$CUSTOMER_PHONE','$CUSTOMER_NAME')")
    CUSTOMER_ID=$($PSQL "select customer_id from customers where phone='$CUSTOMER_PHONE'")

    echo -e "\nWhat time would you like your cut, $CUSTOMER_NAME?"
    read SERVICE_TIME
    ADD_THE_APPOINTMENT=$($PSQL "INSERT INTO appointments(customer_id,service_id,time) values($CUSTOMER_ID,$1,'$SERVICE_TIME')")
    SERVICE_NAME=$($PSQL "select name from services where service_id=$1")

    echo -e "\nI have put you down for a$SERVICE_NAME at $SERVICE_TIME, $CUSTOMER_NAME.\n"
  fi

}


SERVICES_MENU
read SERVICE_ID_SELECTED

SERVICE_ID=$($PSQL "select service_id from services where service_id=$SERVICE_ID_SELECTED")
if [[ -z $SERVICE_ID ]]
then
  SERVICES_MENU "I could not find that service. What would you like today?"
else
  CHECK_IF_LOGGED $SERVICE_ID
fi