import re

print(re.search(r"[Pp]ython","Python"))
#re.Match object; span=(0,6), match='Python'

print(re.search(r"[a-z]way", "The end of the highway"))
#re.Match object; span=(18,22), match='hway'
print(re.search(r"[a-z]way", "What a way to go"))
#[A-Z] upper range
#[0-9] number range
#None

print(re.search("cloud[a-zA-Z0-9]","cloudy"))
#re.Match object; span=(0,6), match='cloudy'

print(re.search("cloud[a-zA-Z0-9]", "cloud9"))
#re.Match obect; span(0, 6) match='cloud9'
#[^]notin the string 
print(re.search(r"[^a-zA-Z]","This is a sentence with spaces"))
#re.Match object; span=(4,5), match=''


