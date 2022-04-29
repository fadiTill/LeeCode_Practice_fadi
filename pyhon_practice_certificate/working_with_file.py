import os
import datetime

os.remove("novel.txt")
os.rename("first_draft.txt","finished_masterpiece.txt")

os.path.exists("finished_masterpiece.txt")
os.path.exists("userlist.txt")
os.path.getsize("spider.txt")
os.path.getmtime("spider.txt")


timestamp = os.path.getmtime("spider.txt")
datetime.datetime.fromtimestamp(timestamp)

os.path.abspath("spider.txt")

#Reading files 
file = open("spider.txt")
print(file.readline())
#The itsy bitsy spider climbed up the waterspout
#update current position
print(file.readline())
#down came the rain
print(file.read())
#start from current line until end 
#and washed the spider out.
#out came the sun 
#and dried up all the rain 
#and the itsy bitsy spider climbed up the spout again
file.close()

# file will close itself 
with open("spider.txt") as file:
    print(file.readline())
    # The itsy bitsy spider climbed up the waterspout



 #iterating trough files
with open("spider.txt") as file:
    for line in file:
            print(line.upper())

#THE ITSY BITSY SPIDER .....

#.....UP THE SPOUT AGAIN.


# remove tab and new line 
with open("spider.txt") as file:
    for line in file:
             print(line.strip().upper())
#THE ITSY BITSY SPIDER .....
#.....UP THE SPOUT AGAIN.

#read file line into a list
with open("spider.txt") as file:
    lines = file.readlines()
    file.close()
    lines.sort()
    print(lines)
#['Down came the rain\n','Out came the sun\n'.....'and washed the spider out.\n']
# ex \t (tab)



#writing files
with open("nove.txt","w") as file:
    file.write("It was dark  and stormy night")
    # 30 char


   #"r" read only default ne need to pass argument
   #"w" writing only 
   # "a" append 
   # "r+" read-write