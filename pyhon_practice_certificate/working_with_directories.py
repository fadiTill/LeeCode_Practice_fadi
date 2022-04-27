print(os.getcwd())
os.mkdir("new_dir")
os.chdir("new_dir")
os.getcwd()


os.mkdir("newer_dir")
#work only if empty
os.rmdir("newer_dir")


import os
os.listdir("website")
# os.path.join()

dir = "website"
#['images', 'index.html','favicon.ico']
for name in os.listdir(dir):
    #join is crossplatform
    fullname = os.path.join(dir,name)
    if os.path.isdir(fullname):
         print("{}is a directory".format(fullname))
    else:
        print("{}is a file".format(fullname))

        #return 
        #website/images is a directory
        #website/index.html is a file
        #website/favicon.ico is a file
