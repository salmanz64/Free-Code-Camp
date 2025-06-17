#! /bin/bash

if [[ $1 == "test" ]]
then
  PSQL="psql --username=postgres --dbname=worldcuptest -t --no-align -c"
else
  PSQL="psql --username=freecodecamp --dbname=worldcup -t --no-align -c"
fi

# Do not change code above this line. Use the PSQL variable above to query your database.
cat games.csv | while IFS=',' read YEAR ROUND WINNER OPPONENT WINNER_GOALS OPPONENT_GOALS
do
  if [[ $WINNER != 'winner' && $OPPONENT != 'opponent' ]]
  then
    #check if the team is already there
    WINNER_ID=$($PSQL "select team_id from teams where name='$WINNER'")
    OPPONENT_ID=$($PSQL "select team_id from teams where name='$OPPONENT'")
    #if winner id is not obtained insert it
    if [[ -z $WINNER_ID ]]
    then
      INSERT_WINNER=$($PSQL "insert into teams(name) values('$WINNER')")
      #again obtain the id for further usage
      WINNER_ID=$($PSQL "select team_id from teams where name='$WINNER'")
    fi
 

    #if opponent id is not obtained
    if [[ -z $OPPONENT_ID ]]
    then
      INSERT_OPPONENT=$($PSQL "insert into teams(name) values('$OPPONENT')")
      OPPONENT_ID=$($PSQL "select team_id from teams where name='$OPPONENT'")
    fi

  #To add the game to the db games()
  if [[ $YEAR != 'year' && $ROUND != 'round' && $WINNER_GOALS != 'winner_goals' && $OPPONENT_GOALS != 'opponent_goals' ]]
  then  
    INSERT_GAME=$($PSQL "insert into games(year,round,winner_id,opponent_id,winner_goals,opponent_goals) values($YEAR,'$ROUND',$WINNER_ID,$OPPONENT_ID,$WINNER_GOALS,$OPPONENT_GOALS)")
  fi
  fi
done