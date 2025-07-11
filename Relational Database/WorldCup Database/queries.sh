#! /bin/bash

PSQL="psql --username=freecodecamp --dbname=worldcup --no-align --tuples-only -c"

# Do not change code above this line. Use the PSQL variable above to query your database.

echo -e "\nTotal number of goals in all games from winning teams:"
echo "$($PSQL "SELECT SUM(winner_goals) FROM games")"

echo -e "\nTotal number of goals in all games from both teams combined:"
echo -e "$($PSQL "select sum(winner_goals) + sum(opponent_goals) from games")"

echo -e "\nAverage number of goals in all games from the winning teams:"
echo -e "$($PSQL "select avg(winner_goals) from games")"

echo -e "\nAverage number of goals in all games from the winning teams rounded to two decimal places:"
echo -e "$($PSQL "select round(avg(winner_goals),2) from games")"

echo -e "\nAverage number of goals in all games from both teams:"
echo -e "$($PSQL "select avg( winner_goals + opponent_goals ) from  games")"

echo -e "\nMost goals scored in a single game by one team:"
echo -e "$($PSQL "select max(winner_goals) from games")"

echo -e "\nNumber of games where the winning team scored more than two goals:"
echo -e "$($PSQL "select count(winner_goals) from games where winner_goals > 2")"

echo -e "\nWinner of the 2018 tournament team name:"
echo -e "$($PSQL "select name from teams where team_id=(select winner_id from games where round='Final' and year = 2018)")"

echo -e "\nList of teams who played in the 2014 'Eighth-Final' round:"
echo -e "$($PSQL "(SELECT t.name FROM teams t JOIN games g ON t.team_id = g.winner_id WHERE g.round = 'Eighth-Final' AND g.year = 2014 UNION SELECT t.name FROM teams t JOIN games g ON t.team_id = g.opponent_id WHERE g.round = 'Eighth-Final' AND g.year = 2014) order by name")"

echo -e "\nList of unique winning team names in the whole data set:"
echo -e "$($PSQL "select distinct(t.name) from teams t join games g on t.team_id = g.winner_id order by t.name")"

echo -e "\nYear and team name of all the champions:"
echo -e "$($PSQL "select g.year,t.name from teams t join games g on t.team_id = g.winner_id where round='Final' order by g.year")"

echo -e "\nList of teams that start with 'Co':"
echo -e "$($PSQL "select name from teams where name like 'Co%'")"
