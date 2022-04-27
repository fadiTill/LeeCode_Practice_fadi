import os
import datetime
from sqlite3 import Timestamp
os.remove("novel.txt")
os.rename("first_draft.txt","finished_masterpiece.txt")

os.path.exists("finished_masterpiece.txt")
os.path.exists("userlist.txt")
os.path.getsize("spider.txt")
os.path.getmtime("spider.txt")


timestamp = os.path.getmtime("spider.txt")
datetime.datetime.fromtimestamp(timestamp)

os.path.abspath("spider.txt")



