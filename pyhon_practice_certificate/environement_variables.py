#echo $PATH
# cat variables.py

#!/usr/bin/env python3

import os


print("HOME" + os.environement.get("HOME", ""))
print("HOME" + os.environement.get("SHELL", ""))
print("HOME" + os.environement.get("FRUIT", ""))