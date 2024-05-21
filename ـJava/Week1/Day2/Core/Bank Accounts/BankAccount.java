public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts=0;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    // Be sure to increment the number of accounts
    public BankAccount(double checkingBalance,double savingsBalance,int accounts,double totalMoney){
        this.checkingBalance=checkingBalance;
        this.savingsBalance=savingsBalance;
        this.accounts=accounts;
        this.totalMoney=totalMoney;
        accounts++;

    }

    // GETTERS
    // for checking, savings, accounts, and totalMoney
    private double getChekingBalabce(){
        return checkingBalance;
    }

    private double getSavingsBalabce(){
        return savingsBalance;
    }

    private int getNumberOfAccounts(){
        return accounts;
    }

    private double getTotalOfMoney(){
        return totalMoney;
    }

    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings account
    
    public static double depositOfMoney(double savingsBalance){
        return totalMoney+=savingsBalance;
    }
    
    // withdraw 
    // - users should be able to withdraw money from their checking or savings account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
    // getBalance
    // - display total balance for checking and savings of a particular bank account

    public static double withdrawOfMoney(double checkingBalance){
        if ((totalMoney<=0) && (totalMoney<savingsBalance))
        {
            System.out.println("Your total Money is less than saving Balance !!!");
        }
        else
        {
            totalMoney-=checkingBalance;
            System.out.println("Total Balance : ",(checkingBalance+savingsBalance));
            return(totalMoney);
        }
        
    }

    // display the number of banks and the total of money 

    public static void displayAccounts(){  
        System.out.println("Number of this accounts : "+accounts);
        System.out.println("The total of money is : "+totalMoney);
    }

}
