
count=1
while [ true ]
do
  numberlines=$(node useoapcookies.js| grep linktr | wc -l ) 
  echo $numberlines
  if [ $numberlines -lt 3 ]
  then
    node notifyslack.js "OAP removed their linktr, go Check their instagram! https://www.instagram.com/openairpub/"
    break
  else
    echo "Linktr still there"
    echo $(date)
    sleep 5
  fi
done
