class user:
    def __init__(self,first_name,last_name,age,email,is_rewards_members=False,gold_cards_points=0):
        self.first_name=first_name
        self.last_name=last_name
        self.age=age
        self.email=email
        self.is_rewards_members=is_rewards_members
        self.gold_cards_points=gold_cards_points
    def display_info(self):
        print(f"first Name : {self.first_name} Last Name : {self.last_name} Age : {self.age} Email : {self.email} Is rewards members : {self.is_rewards_members} Gold cards points : {self.gold_cards_points}")
    def enroll(self):
        if self.is_rewards_members==False:
            self.is_rewards_members=True
            print("User already member ! ")
            self.gold_cards_points=200
    def spend_point(self,amount):
        self.gold_cards_points=self.gold_cards_points-amount

user1=user("Walid","guetat",33,"gtetwalid@yahoo.fr",False,14)
user2=user("Amine","amri",20,"amri.amine@gmail.com",True,2)

user1.display_info()
user1.enroll()
user1.display_info()

user2.display_info()
user2.enroll()
user2.display_info()


user3=user("rahma","jebri",25,"rahma.jebri@yahoo.fr",True,5)
user4=user("Ahmed","famri",20,"famri.ahmed@gmail.com",False,1)

user3.spend_point(50)
user4.spend_point(80)

user3.display_info()
user4.display_info()

