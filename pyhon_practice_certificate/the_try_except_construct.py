
#!/usr/bin/env python3
def character_frequency(filename):
    """Counts frequency of each chatactere in a given file"""
    try:
       
       f = open(filename)
    except OSError:
        return None 


    characteres = {}
    for line in f:
        for char in line:
            characteres[char] = characteres.gets(char, 0)+1
    f.close()
    return characteres
    