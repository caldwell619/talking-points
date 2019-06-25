#!/bin/sh

quiet=false
pass=true
failures=()
# Regular Colors
Black="\033[0;30m"        # Black
Red="\033[0;31m"          # Red
Green="\033[0;32m"        # Green
Yellow="\033[0;33m"       # Yellow
Blue="\033[0;34m"         # Blue
Purple="\033[0;35m"       # Purple
Cyan="\033[0;36m"         # Cyan
BICyan="\033[1;96m"       # Bold Cyan
White="\033[0;37m"        # White
# Reset
Color_Off="\033[0m"       # Text Reset

# Finds the -q or --quiet flag
while [ ! $# -eq 0 ]
do
	case "$1" in
		--quiet | -q)
			quiet=true
			;;
	esac
	shift
done


function search() {
  printf "\nLooking for $BICyan$(echo "$1")$Color_Off";
  printf "\n"
  grep -r "$1" -w ../ \
    --exclude-dir={scripts,node_modules,.git,build} \
    -q
  if [ $? == 0 ]
  then
  printf "\n$Red$(echo "Locations of $1")$Color_Off";
  printf "\n"
    grep -r "$1" -w . \
    --exclude-dir={scripts,node_modules,.git,build} | \
    cut -d':' -f1  
    failures+=("$1")
    pass=false
  else 
    printf "\n$Green$(echo 'Not Found')$Color_Off";
    printf "\n";
  fi
}

function quiet_search() {
  grep -r "$1" -w ../ \
    --exclude-dir={scripts,node_modules,.git,build} \
    -q
  if [ $? == 0 ] 
  then
    pass=false
    failures+=($1)
  fi
}

printf "\n"
if [ $quiet = true ] 
then
# Add as many search terms as you wish here
  quiet_search "var"

else
  search "ascpects"
  printf "\n"
fi

if [ "$pass" = true ]
then
  printf "\nAll tests pass!"
  printf "\n\n"
else
  printf "\nThese values were found:"
  for failure in ${failures[*]}; do
    printf "\n- $Red$(echo "${failure}")$Color_Off"
  done
  printf "\n\n"
  exit 1
fi
  