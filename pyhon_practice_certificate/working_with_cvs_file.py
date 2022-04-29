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
        #cat host_csv


    #Reading and Writing CSV files with dictionaries
    with open('software.csv') as software:
        reader = csv.DictReader(software)
    for row in reader:
        print(("{}has{} users").format(row["name"], row["users"]))



        users = [{"name": "sol Mansi", "username":"solm", "department":"IT infrastructure"},
                {"name": "Lio Nelson", "username":"lion", "department":"User Experirnce research"}]

        keys = ["name","username","departement"]
    with open('by_departement.csv','w') as by_departement:
        writer = csv.DictWriter(by_departement, fieldnames=keys)
        #write first line bases on keys 
        writer.writeheader()
        writer.writerows(users)