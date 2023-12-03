#!/bin/bash 

# The following is a menu script.
# Code by Levi Overstreet <levovers@uat.edu>

# Ansi color code variables
red="\e[0;31m"
blue="\e[0;34m"
white="\e[0;37m"
bold="\e[1;37m"
reset="\e[0m"


# This is a while loop set up to run continuously until an option is selected. Color is added to parts of the menu to help break up what the user is reading and highlight important options.
main_menu()
{

while :
do
	echo " "
	echo -e "${blue}========================================================${reset}"
	echo -e "                       ${white}${bold}Hello!${reset}"
	echo -e "    ${white}${bold}Please select which option you would like to run.${reset}   "
	echo -e "${blue}========================================================${reset}"
	echo " "
	echo "  [1] List accounts from /etc/passwd on this system."
	echo "  [2] Check logs for failed login attempts."
	echo "  [3] Check a web server for version number."
	echo -e "  [4] ${red}Exit${reset}"
	echo " "
	echo -e "${blue}========================================================${reset}"
	echo " "
	echo "Enter option: "
	read m_menu
	
	# This links the option choices to functions
	case "$m_menu" in
	
		1) one;;
		2) two;;
		3) three;;
		4) kill 0;;
	esac
done
}

# This function launches the first script option.
one()
{
	/bin/bash ./Overstreet-Levi-Final-Option-1.sh
}

# This function launches the second script option.
two()
{
	/bin/bash ./Overstreet-Levi-Final-Option-2.sh
}

# This function launches the thrid script option.
three()
{
	/bin/bash ./Overstreet-Levi-Final-Option-3.sh
}

main_menu