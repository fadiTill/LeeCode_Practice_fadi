
 
# 
# def hint_username(username):
#     if len(username) < 3:
#         print("invalid username. must be a leats 3 characters long")


# The is_positive function should return True if the number received 
# is positive, otherwise it returns None. Can you fill in the gaps to make that happen?
def is_positive(number):
   if number > 0:
    return True
   else:
    return False

    is_positive(5)



   def hint_username(username):
       if len(username) < 3:
           print("Invalid username. Must be at least 3 characteres long")
  
       elif len(username) > 15:
            print("invalid useraname. Must be at most 15 characters long")
       else:
           print("valid username")
        

def is_even(number):
    if number % 2 == 0:
        return True
    return False

    def num_group(number):
        if number > 0:
           return "Positive"
        elif number < 0:
           return "Negative"
        else:
           return "Zero"
    
    print(num_group(10))




def calculate_storage(filesize):
    block_size = 4096
    # Use floor division to calculate how many blocks are fully occupied
    full_blocks = filesize // block_size
    # Use the modulo operator to check whether there's any remainder
    partial_block_remainder = filesize % block_size
    # Depending on whether there's a remainder or not, return
    # the total number of bytes required to allocate enough blocks
    # to store your data.
    if partial_block_remainder > 0:
        return   ((( filesize // block_size )+1 )* block_size)
    return  block_size * full_blocks 
       

    print(calculate_storage(1))    # Should be 4096
    print(calculate_storage(4096)) # Should be 4096
    print(calculate_storage(4097)) # Should be 8192
    print(calculate_storage(6000)) # Should be 8192