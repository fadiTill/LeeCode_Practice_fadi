



#regular expression, search QRY
log = "July 31 07:51:48 mycomputer bad_process[12345]: ERROR Performing package upgrade"
index = log.index("[ ")
print(log[index+1:index+6])
#12345


from importlib.machinery import WindowsRegistryFinder
import re
log = "July 31 07:51:48 mycomputer bad_process[12345]: ERROR Performing package upgrade"
regex = "r\[(\d+)\]"
result = re.search(regex, log)
print(result[1])
#12345

#Basic Matching

#grep thong /usr/share/dict/words 
#return string with "thong" case sensitive 

#grep -i python /usr/share/dict/words 
#not case sensitive 



#. can be replace by any caractere
#grep l.rts /usr/share/dict/words
#alerts
#blurts
#flirts

# match start line 
#grep ^fruit /usr/share/dict/words
#fruit
#fruit 's
#fruit cake


#match end line 
#grep cat$  /usr/share/dict/words
#Muscat
#bobcat
#cat 


