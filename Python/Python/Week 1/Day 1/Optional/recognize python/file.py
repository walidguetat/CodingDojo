
num1 = 42  #variable declaration data type primitive int 
num2 = 2.3  #variable declaration data type primitive float 
boolean = True #variable declaration data type primitive boolean 
string = 'Hello World'  #variable declaration data type strings 
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']  #variable declaration data type composite list 
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #variable declaration data type composite dictionary 
fruit = ('blueberry', 'strawberry', 'banana') #variable declaration data type composite tuples
print(type(fruit))  #check type of this varriable fruit
print(pizza_toppings[1]) # print the first items in this list of pizza_toppings
pizza_toppings.append('Mushrooms') # add the new item in this list of pizza_toppings 
print(person['name']) #print the name of this dictionnary of person
person['name'] = 'George' # modified the name of this person by a new name george
person['eye_color'] = 'blue' #insert a new keys in this dictionary
print(fruit[2]) # print the second value of this tupls

if num1 > 45:  #num is equal 42 then 42 is less of 45 print this message it's lower 
    print("It's greater")
else:
    print("It's lower") #print the seccond 

if len(string) < 5:  # len(string) is equal 11 then 11 is greater of 5 pass of the second if
    print("It's a short word!")
elif len(string) > 15:  # len(string) is equal 11 then 11 is less of 15 pass to elif
    print("It's a long word!")
else:
    print("Just right!") # print this message just right

for x in range(5): 
    print(x)  # print 0 1 2 3 4
for x in range(2,5):
    print(x) # print 2 3 4
for x in range(2,10,3):
    print(x) # print 2 5 8
x = 0
while(x < 5):
    print(x) # print 0 1 2 3 4
    x += 1

pizza_toppings.pop()  #pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese']
pizza_toppings.pop(1) #pizza_toppings = ['Pepperoni','Jalepenos', 'Cheese']

print(person)  #{'name': 'george', 'location': 'Salt Lake', 'age': 37, 'is_balding': False ,'eye_color':'blue'}
person.pop('eye_color') #{'name': 'george', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}
print(person)  #{'name': 'george', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}

for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement') # print this 3 message 
    if topping == 'Olives':
        break

def print_hello_ten_times(): # print hello hello hello hello hello hello hello hello hello hello 
    for num in range(10):
        print('Hello') 

print_hello_ten_times() # print hello hello hello hello hello hello hello hello hello hello 

def print_hello_x_times(x):
    for num in range(x):
        print('Hello')

print_hello_x_times(4) # print hello 4 fois

def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times() # print hello in  the screen 10 fois 
print_hello_x_or_ten_times(4) # print hello in  the screen 4 fois 


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)