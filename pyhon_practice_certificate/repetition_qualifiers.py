import re 
print(re.serach(r"Py.* n", "Pygmalion"))
#re.match object; span=(0, 9), match='Pygmalion'
print(re.search(r"Py.*n","Python Programming"))
#re.match object; span=(0, 17), match='Python Programmin'
#greedy


print(re.search(r"Py[a-z]*n","Python Programming"))
#re.match object; span=(0, 6), match='Python'
print(re.search(r"Py[a-z]*n","Pyn"))
#re.Match object; span=(0, 3), match='Pyn'

print(re.search(r"o+l+","goldfish"))
#re.match object; span=(1, 3), match='ol'
print(re.search(r"o+l+", "woolly"))
#re.match object; span=(1, 5), match='ooll'
print(re.search(r"o+l+", "boil"))
#None

print(re.search(r"p?each", "To each their own"))
#re.Match object; span=(3, 7), match='each'
print(re.search(r"p?each", "I like peaches"))
#re.Match object; span=(7, 12), match='peach'
