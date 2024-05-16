import java.util.ArrayList;
import java.util.Arrays;
public class TestCafe1 {
    public static void  main(String[] args) {
        // create one instance for cafe util
        CafeUtil cafeUtil= new CafeUtil();
        // intialized goal by methode getStreakGoal (10)
        int goal=cafeUtil.getStreakGoal(10);
        // ------------------------------------  print the title of this Streak Goal test  ------------------------------------
        System.out.println("\n ----- Streak Goal Test ----- ");
        // return this result for the method 
        System.out.printf("\n Purchases needed  by week  10 : %s \n\n ",goal);


        // ------------------------------------  print the title of this Streak Goal test  ------------------------------------
        System.out.println("\n ----- Order Total Test ----- \n");
         // intialized total by methode getOrderTotal (arrayOfOrder)
        double[] arrayOfOrder={3.5,1.5,4.0,4.5};
        System.out.println("Lenght of arrays : "+arrayOfOrder.length);
        double totalOrder=cafeUtil.getOrderTotal(arrayOfOrder);
        // return this result for the method 
        System.out.printf("\n Order Total : %s \n\n ",totalOrder);

        // ------------------------------------  print the Display Menu test  ------------------------------------
        System.out.println("\n ----- Display Menu Test ----- \n");
        // return this result for the method 
         ArrayList<String> MenuItems = new ArrayList<String>();
         cafeUtil.displayMenu(MenuItems);
        


        // ------------------------------------  print AddCustomer test  ------------------------------------
        System.out.println("\n ----- Add Customer Test ----- ");
        ArrayList<String> customers = new ArrayList<String>();
        // return this result for the method 
        cafeUtil.addCustomer(customers);


        // ------------------------------------  print priceChart test  ------------------------------------
        System.out.println("\n ----- Add priceChart Test ----- ");

        // String product="";
        // double price=0.0;
        // int maxQuantity=0;

        cafeUtil.printPriceChart("Bondin", 4.5, 6);

        cafeUtil.printPriceChart1("Bondin", 2, 4);


        // ------------------------------------  print displayMenu1 test  ------------------------------------
        System.out.println("\n ----- DisplayMenu1 Test -----\n ");

        System.out.println(cafeUtil.displayMenu1(MenuItems, arrayOfOrder));

        

            
    }

}