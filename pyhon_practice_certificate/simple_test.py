#cat rearrange.py
#!/usr/bin/env python3

import re 

def rearrange_name(name):
    result = re.search(r"^([\w.]*),([\w.]*)$", name)
    if result is None:
        return name
    return"{} {}".format(result[2], result[1])


    #python3
    #python 3.7.3(default, Apr 3 2019, 05:39:12)
    #[GCC 8.3.0] on linux
    #type "help", "copyright", "credits" or "license" for more information.
    #from rearrange import rearrange_name
    #rearrange_name("Lovelace,Ada")
    #'Ada lovelace'


#!/usr/bin/env python3

#rearrange_test.py


#from rearrange import rearrange_name
import unittest

class TestRearrange(unittest.TestCase):
    def test_basic(self):
        testcase = "Lovelace, Ada"
        expected = "Ada lovelace"
        self.assertEqual(rearrange_name(testcase),expected)

    def test_empty(self):
        testcase = ""
        expected = ""
        self.assertEqual(rearrange_name(testcase), expected)

    def test_double_name(self):
        testcase ="Hopper, Grace M."
        expected = "Grace M. Hopper"
        self.assertEqual(rearrange_name)
        self.assertEqual(rearrange_name(testcase), expected)
    
    def test_one_name(self):
        testcase = "Voltaire"
        expected = "Voltaire"
        self.assertEqual(rearrange_name(testcase), expected)

unittest.main()

#make test executable and run
#chmod +x rearrange_test.py
#./rearrange_test.py
#......................
#ran 1 test in 0.000s

#OK


#./rearrange_test.py
#.E
#......................
#ERROR: test_empty(_main_.TestReanrrange)
#ran 2 test in 0.001s

#FAILED (errors=1)



#update rearrange_test with None case
#make test executable and run
#chmod +x rearrange_test.py
#./rearrange_test.py
#......................
#ran 2 test in 0.000s

#OK



#chmod +x rearrange_test.py
#./rearrange_test.py
#......................
#ran 3 test in 0.000s

#OK

#chmod +x rearrange_test.py
#./rearrange_test.py
#...F
#......................
#ran 3 test in 0.000s

#FAIL: test_one_name (_main_TestRearrange)


#chmod +x rearrange_test.py
#./rearrange_test.py
#......................
#ran 4 test in 0.000s

#OK




