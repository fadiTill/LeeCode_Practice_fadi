
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
#re.Match object; span=(0, 19), match='And_this_is_another'


#letter,number, underscore
#\d digit
#\s space, tab , new line 
#\b bondaries

print(re.search(r"A.a","Argentina"))
#re.Match object; span=(0,9), match='Argentina'
print(re.search(r"A.a","Azerbaijan"))
#re.Match object; span=(0, 9), match='Azerbaija'
print(re.search(r"^A.a$","Azerbaijan"))
#begin and end with a 
#None
print(re.search(r"^A.a$","Australia"))
#re.Match object; span=(0, 9), match='Australia'

pattern = r"^[a-zA-Z_][a-zA-Z0-9_]*$"
#start with all letter and underscore, end with all caractere, numbers and underscore
print(re.search(pattern, "_this_is_a_valid_varaiable_name"))
#re.Match object; span=(0, 30), match='_this_is_a_valid_variable_name'
print(re.search(pattern,"this isn 't a valid variable"))
# space not includes as valid char
#None
print(re.search(pattern,"my_variable1"))
#re.Match object; span=(0, 12), match='my_variable1'




