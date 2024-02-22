
# create a class bankAccount

class BankAccount:
    # don't forget to add some default values for these parameters!
    # create one instance 
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

    @classmethod
    def clsAllAccounts(cls, int_rate, balance): 
        return cls(int_rate,balance)
    def printAllAccounts(self): 
        print(self.int_rate," ",self.balance)
        
    
# create two accounts 
            
account1=BankAccount(4,100)
account2=BankAccount(10,250)


# make 3 deposits and 1 withdraw and yield_interst then display info at account 1
print("\n Account 1 ")
account1.deposit(50)
account1.deposit(200)
account1.deposit(120)
account1.withdraw(20)
account1.yield_interest()
account1.display_account_info()
# used chaining 
account1.deposit(50).deposit(200).deposit(120).withdraw(20).yield_interest().display_account_info()

# make 3 deposits and 1 withdraw and yield_interst then display info at account 2

print("\n Account 2 ")
account2.deposit(50)
account2.deposit(200)
account2.withdraw(100)
account2.withdraw(50)
account2.withdraw(600)
account2.withdraw(5)
account2.yield_interest()
account2.display_account_info()

# used chaining 
account2.deposit(50).deposit(200).withdraw(100).withdraw(50).withdraw(600).yield_interest().display_account_info()

