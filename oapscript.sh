#!/bin/bash

while [ true ]
do 
  html=$(python3 getoaphtml.py | grep "linktr.ee" | wc -l)
  if [ $html -lt 1 ]
  then
    echo "Bio link was changed!! Check insta here: https://www.instagram.com/openairpub/"
    node notifyslack.js "Bio link was changed!! Check insta here: https://www.instagram.com/openairpub/"
    break
  else 
    echo "linktr is still there"
  fi
  sleep 1
done 
