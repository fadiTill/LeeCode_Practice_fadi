
import re 


print(re.search(r".com", "welcome"))
#re.Match object; span=(2,6), match='lcom'
#to match . use escape char
print(re.search(r"\.com", "welcome"))
#None
print(re.search(r"\.com", "mydomain.com"))
#re.Match object; span=(8,12), match='.com'
print(re.search(r"\w*", "This is an example"))
#re.Match object; span=(0, 4), match='This'
print(re.search(r"\w*", "And_this_is_another"))
#letter,number, underscore
#\d digit
#\s space, tab , new line 
#\b bondaries

#re.Match object; span=(0, 19), match='And_this_is_another'




