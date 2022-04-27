values = [1,2,3,4,5]
sum = 0
length = 0
for value in values:
    sum+=value
    length+=1
print("Total sum"+ str(sum)+ "-Average:"+str(sum/length))

toy = 1
for number in range(1,12):
 toy = toy * number
print(toy)


print(str(7+9)+ str("hello"), end=",,")


def factorial(n):
   if n < 2:  
      return 1
      return n * factorial(n-1)
