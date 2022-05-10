#command line 
#cat hello.py

#name = input("please enter your name:")
#print("hello,"+ name)
#./hello.py
#please enter your name:Roger
#Hello, Roger

#atom seconds.py

#!/usr/bin/env pyhon3
def to_seconds(hours, minutes, seconds):
    return hours*3600+minutes*60+seconds

print("welcome to this converter")

cont = "y"
while(cont.lower()=="y"):
    hours = int(input("Enter the number of hours:"))
    minutes = int(input("Enter the number of minutes:"))
    seconds = int(input("Enter the number of sdeconds"))

    print("That's{} seconds" .format(to_seconds(hours,minutes,seconds)))
    print()
    cont = input("Do you want to do another conversion?[y to continue] ")

print("Good bye!")

