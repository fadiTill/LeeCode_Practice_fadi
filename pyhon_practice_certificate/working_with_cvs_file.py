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


    #generating csv file
    #create a list
    #machine name and ip adresse
    hosts =[["workstation.local", "192.168.25.46"],["webserver.cloud","10.2.5.6"]]
    #open file write mode 
    with open('host.csv','w') as hosts_csv:
        writer = csv.writer(hosts_csv)
        writer.writerows(hosts)

