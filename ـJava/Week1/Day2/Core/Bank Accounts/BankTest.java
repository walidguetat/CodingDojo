public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts

        BankAccount account1 = new BankAccount(250, 100, 0, 0);
        BankAccount account2 = new BankAccount(4850, 500, 0, 0);
        BankAccount account3 = new BankAccount(150, 100, 0, 0);


        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney

        account1.depositOfMoney(500);
        account2.depositOfMoney(105);
        account3.depositOfMoney(50);

        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney
       
        account2.withdrawOfMoney(10);
        account3.withdrawOfMoney(105);
        account1.withdrawOfMoney(30);
        // Static Test (print the number of bank accounts and the totalMoney)

        account1.displayAccounts();
        account2.displayAccounts();
        account3.displayAccounts();
        
    }
}
