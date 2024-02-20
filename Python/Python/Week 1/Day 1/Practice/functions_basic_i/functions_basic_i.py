#1
def number_of_food_groups():
    return 5
print(number_of_food_groups())

#1 result is 5 function number_of_food_groups() no parameters  return 5 


#2
def number_of_military_branches():
    return 5
print(number_of_days_in_a_week_silicon_or_triangle_sides() + number_of_military_branches())

#2 name 'number_of_days_in_a_week_silicon_or_triangle_sides' is not defined


#3
def number_of_books_on_hold():
    return 5
    return 10
print(number_of_books_on_hold())

#3 return 5 function return the first value return


#4
def number_of_fingers():
    return 5
    print(10)
print(number_of_fingers())

#4 function number of fingers is return 5 

#5
def number_of_great_lakes():
    print(5)
x = number_of_great_lakes()
print(x)

#5 this function print 5 and none function is minez return by default is return none


#6
def add(b,c):
    print(b+c)
print(add(1,2) + add(2,3))

#6  TypeError: unsupported operand type(s) for +: 'NoneType' and 'NoneType' 

#7
def concatenate(b,c):
    return str(b)+str(c)
print(concatenate(2,5))

#7 dosen't return value because two varriables band c not in (str(b)+str(c))

#8
def number_of_oceans_or_fingers_or_continents():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(number_of_oceans_or_fingers_or_continents())

#8 function dosen't return nothing because exist more values of returns 
#  if delete return 7 this program is run and return this result 100 10 values of return

#9
def number_of_days_in_a_week_silicon_or_triangle_sides(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3))
print(number_of_days_in_a_week_silicon_or_triangle_sides(5,3))
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3) + number_of_days_in_a_week_silicon_or_triangle_sides(5,3))

#9 function dosen't return nothing because exist more values of returns 
#  if delete return 3 this program is run and return this result 
# number_of_days_in_a_week_silicon_or_triangle_sides(2,3)  return 7
# number_of_days_in_a_week_silicon_or_triangle_sides(5,3)  return 14
# number_of_days_in_a_week_silicon_or_triangle_sides(2,3) + number_of_days_in_a_week_silicon_or_triangle_sides(5,3) return 7 + 14 = 21 

#10
def addition(b,c):
    return b+c
    return 10
print(addition(3,5))

#10 doesen't return nothing first exist two return values 

#11
b = 500
print(b)
def foobar():
    b = 300
    print(b)
print(b)
foobar()
print(b)

#11 

#12
b = 500
print(b)
def foobar():
    b = 300
    print(b)
    return b
print(b)
foobar()
print(b)


#13
b = 500
print(b)
def foobar():
    b = 300
    print(b)
    return b
print(b)
b=foobar()
print(b)


#14
def foo():
    print(1)
    bar()
    print(2)
def bar():
    print(3)
foo()


#15
def foo():
    print(1)
    x = bar()
    print(x)
    return 10
def bar():
    print(3)
    return 5
y = foo()
print(y)