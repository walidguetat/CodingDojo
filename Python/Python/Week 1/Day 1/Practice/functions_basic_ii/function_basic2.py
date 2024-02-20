# Countdown
def countdown(num):
    return list(range(num, -1, -1))


# count down 
empty_list=[]
def countDown(num):
    for i in range(num,1):
        empty_list[i]=i

    return empty_list

#Print and Return
def print_and_return(arr):
    print(arr[0])
    return arr[1]

#Print and Return
def printAndReturn(list):
    print(list[0])
    return(list[1])

result=printAndReturn([4,5])
print(result)


#First Plus Length
def first_plus_length(arr):
    return arr[0] + len(arr)

#First Plus Length
sum=0
def firstPlusLength(list):
    l=len(list)-1
    sum=list[0]+list[l]
    return(sum)

print(firstPlusLength([1,2,3,100]))

#Values Greater than Second

def values_greater_than_second(arr):
    if len(arr) < 2:
        return False
    else:
        count = 0
        new_list = []
        for val in arr:
            if val > arr[1]:
                count += 1
                new_list.append(val)
        print(count)
        return new_list
    

# values greater than second


def values_greater_than_second(list):
    new_list=[]
    count=0
    second=list[1]
    for i in range(0,len(list)):
        if list[i]>second:
            count=count+1
            new_list.append(list[i])   

    print(count)     
    return (new_list)

result=values_greater_than_second([5,2,3,2,1,4])
print(result)

#This Length, That Value

def length_and_value(length,value):
    new_list=[]
    for i in range(0,length,1):
        new_list.append(value)

    return(new_list)

result=length_and_value(7,0)
print(result)



