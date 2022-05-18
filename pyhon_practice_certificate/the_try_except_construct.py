
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



    def validate_user(username, minlen):
        assert type(username)== str, "username must be a string"
        if minlen < 1:
            raise ValueError("minlen must be at least 1")
        if len(username) < minlen:
            return False 
        if not username.isalnum():
            return False 
        return True

        #from validations import validate_user
        #validate_user("", -1)
        #......
        #raise ValueError("minlen must be at least 1")
        #validate_user("", 1)
        #False
        #validate_user("myuser",1)
        #True



# import unittest

# from validations import validate_user

# class TestValidateUser(unittest.TestCase):
#     def test-valid(self):
#         self.assertEqual(validate_user("validuser",3),True)
    
#     def test_too_short(self):
#         self.assertEqual(validate_user("inv",5),False)


#         def test_invalid_charaters(self):
#         self.assertEqual(validate-user("invalid_user",1),False)

# def test-invalid_minlen(self):
#     self.assertRaises(valueError, validate-user,"user", -1)

#unittest.main()


#./validation_test.py
#.....
#Ran 4 test in 0.000s

#OK