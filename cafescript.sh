#!/bin/bash

while [ true ]
do 
  node gethtml.js > page.html
  linesWithAvailable=$(grep "Nous sommes désolés, tous les billets disponibles en ligne pour cet événement ont été vendus" page.html | wc -l) 
  if [ $linesWithAvailable -gt 0 ]
  then
    echo "Tickets not available"
  else 
    echo "Tickets available"
    node notifyslack.js "Found Tickets on https://lepointdevente.com/tickets/cafe-campus-danse-club-discotheque-vendredi-x-large-29-avril"
    break
  fi
done 
