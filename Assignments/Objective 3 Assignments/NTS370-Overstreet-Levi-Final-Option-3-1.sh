#!/bin/bash

# The following script will run nmap on port 80 at a designated target.
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

# This is informing the user of what the scan will do and what the target is.
echo -e "${white}${bold}The scan of port 80 will be conducted on scanme.nmap.org${reset}"

# This is the nmap command that scans port 80. It is set with an aggressive test set and enabled for a faster scan.
nmap -p 80 -A -T4 scanme.nmap.org

# This is a while loop set up to run continuously until an option is selected. Color is added to parts of the menu to help break up what the user is reading and highlight important options.
three_menu()
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
	
	case "$o_menu" in
	
		1) one;;
		2) kill 0;;
	esac
done
}

one()
{
	/bin/bash ./Overstreet-Levi-Final-Project.sh
}

three_menu
