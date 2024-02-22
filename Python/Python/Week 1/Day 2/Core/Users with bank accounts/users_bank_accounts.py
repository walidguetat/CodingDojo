

# create a class bankAccount

class BankAccount:
   
    # create one instance by default varriable int_rate=0 and balance=0
    def __init__(self, int_rate=0, balance=0): 
        self.int_rate=int_rate
        self.balance=balance
    # create a methode to deposit
    def deposit(self, amount):
        self.balance+=amount
        return self
    # create a methode to withdraw
    def withdraw(self, amount):
        if self.balance<=0:
            print('Insufficient funds: Charging a $5 fee and deduct $5')
        else:
            self.balance-=amount
        return self
    # create a methode to print info accounts
    def display_account_info(self):
        print(f"Balance : {self.balance}")
        return self
    # create a methode yield interest to add 
    def yield_interest(self):
        if self.balance>0:
            self.balance=self.balance*0.19
        return self


# create a class User

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)
    
    # other methods
    # create a new method make_deposit()
    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self
    # create a new method withdraw()
    def withdraw_user(self, amount):
        self.account.withdraw(amount)
        return self
    # create a new method display_info_users()
    def display_info_users(self):
        self.account.display_account_info()
        return self
    

user2=User("Omar","omar@gmail.com") 
user1=User("Walid","gtetwalid@yahoo.fr")

# user 1

print("\nUser 1 ")
user1.make_deposit(50)
user1.display_info_users()

# user 2

print("\nUser 2 ")
user2.make_deposit(150)
user2.display_info_users()