#!/bin/bash

while [ true ]
do 
  node gethtml.js > page.html
  linesWithAvailable=$(grep "Nous sommes désolés, tous les billets disponibles en ligne pour cet événement ont été vendus" page.html | wc -l) 
  if [ $linesWithAvailable -gt 0 ]
  then
    echo "Tickets not available"
    echo $linesWithAvailable
    echo $(date)
  else 
    echo "Tickets available"
    echo $linesWithAvailable
    node notifyslack.js "Found Tickets on https://lepointdevente.com/tickets/cafe-campus-danse-club-discotheque-mardi-retro-26-avril-2022" 
    break
  fi
done 
