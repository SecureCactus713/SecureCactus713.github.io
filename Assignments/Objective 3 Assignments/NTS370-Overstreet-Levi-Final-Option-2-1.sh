#!/bin/bash

# The following script will pull out the lines that contain the trigger and print them for the user.
# Code by Levi Overstreet <levovers@uat.edu>

# Ansi color code variables
red="\e[0;31m"
blue="\e[0;34m"
white="\e[0;37m"
bold="\e[1;37m"
reset="\e[0m"

# This is to help seperate from the previous output.
echo " "
echo -e "${blue}========================================================${reset}"
echo " "

# This command pulls and prints any line that contains the search string from the hard coded file.
grep "authentication failure" ./Linux_2k.log

# This is a while loop set up to run continuously until an option is selected. Color is added to parts of the menu to help break up what the user is reading and highlight important options.
two_menu()
{

while :
do
	echo " "
	echo -e "${blue}========================================================${reset}"
	echo " "
	echo "  [1] Return to Main Menu"
	echo -e "  [2] ${red}Exit${reset}"
	echo " "
	echo -e "${blue}========================================================${reset}"
	echo " "
	echo "Enter option: "
	read o_menu
	
	# This links the option choices to functions
	case "$o_menu" in
	
		1) one;;
		2) kill 0;;
	esac
done
}

# This function launches the first script option.
one()
{
	/bin/bash ./Overstreet-Levi-Final-Project.sh
}

two_menu
