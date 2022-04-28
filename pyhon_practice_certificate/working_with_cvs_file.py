# cat csv_file.txt
#read csv file
import csv
f = open("csv_file.txt")
csv_f = csv.reader(f)
for row in csv_f:
    name,phone,role = row
    #unpaking name variables 
    print("Name:{},Phone:{},Role:{}".format(name,phone,role))
    f.close()