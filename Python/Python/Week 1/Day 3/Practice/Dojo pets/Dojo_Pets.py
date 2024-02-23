# create class Ninja 

class Ninja:
    def __init__(self,first_name,last_name,treats,pet_food,pet) :
        self.first_name=first_name
        self.last_name=last_name
        self.treats=treats
        self.pet_food=pet_food
        self.pet=pet

# impliment walk(),feed(),badhe() methods in Ninja class

    def walk(self):
        Pet.play()
        return self
        
    def feed(self):
        Pet.eat()
        return self
        
    def badhe(self):
        Pet.noise()
        return self

# create class Pet
    
class Pet:
    def __init__(self,name,type,tricks,health,energy) :
        self.name=name
        self.type=type
        self.tricks=tricks
        self.health=health
        self.energy=energy

# impliment sleep(),eat(),play() and noise() methods in Pet class

    def sleep(self):
            
            self.energy+=25
            return self
        
    def eat(self):
            
            self.energy+=5
            self.health+=10
            return self
        
    def play(self):
            self.health+=5
            return self
    
    def noise(self):
            print("Oh no !! you need more pet food")
            return self
    
# make one instance pet 1 of a pet 
    pet1=Pet("nkkkkkk","dsgdhgh","dgxfgg",1,2)

# make one instance ninja1 of a ninja 
    
    ninja1=Ninja("Walid","Guetat","ddd","chat",4)

    
