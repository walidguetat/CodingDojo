
# 1 . Update Values in Dictionaries and Lists
x = [ [5,2,3], [10,8,9] ] 

# change value 10 by 15

x[1][0]=15
print(x)


students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]

# Change the last_name of the first student from 'Jordan' to 'Bryant'

students[0]["last_name"]="Bryant"
print(students)

# change messi to Andreas

sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}

sports_directory["soccer"][0]="Andreas"
print(sports_directory)

#Change the value 20 in z to 30

z = [ {'x': 10, 'y': 20} ]

z[0]["y"]=30
print(z)

# 2. Iterate Through a List of Dictionaries

def iterateDictionary(students):
    for i in range(0,len(students),1):
       print("\n")
       for key in students[i]:
           print(f"{key} - {students[i][key]},",end="")

students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

iterateDictionary(students)

# Get Values From a List of Dictionaries

# iterateDictionary2('first_name', students)

def getKeyName(key_name,students):
    for i in range(0,len(students),1):
       print("\n") 
       print(f"{students[i][key_name]}",end="")

students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

# iterateDictionary2('last_name', students)

getKeyName('first_name',students)
print("\n")
print("-"*10)
getKeyName('last_name',students)

# Iterate Through a Dictionary with List Values

dojo = {'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}


def printInfo(dojo):
    for i in dojo:
        print(len(dojo[i]),i,"\n")
        for j in dojo[i]:
            print(j,"\n")


print("\n")
printInfo(dojo)

