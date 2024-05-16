import java.util.ArrayList;

public class CafeUtil {


    // method getStreakgoal()

    public int getStreakGoal(int numWeeks){
        int sum = 0;
        for (int i = 1; i <= numWeeks; i++) {
            sum += i;
        }
        return sum;
    }

    // method getOrderTotal()


    public  double getOrderTotal(double[] prices){
        
        double sum1 = 0;
        for (int j = 0; j < prices.length; j++) {
            sum1 += prices[j];
        }
        return sum1;
    }
    
    // method displayMenu()

    public void displayMenu(ArrayList<String> MenuItems){
       MenuItems.add("Drip Coffee");
       MenuItems.add("cappuchino");
       MenuItems.add("Latte");
       MenuItems.add("mocha");
        for (int j = 0; j < MenuItems.size(); j++) {
            System.out.println(j+ " " +MenuItems.get(j));
        }
        
    }
        // method addCustomers()

    public void addCustomer(ArrayList<String> customers){
        
         for (int j = 0; j < 4; j++) {
             System.out.println("Please enter your Name : ");
             String username= System.console().readLine();
             customers.add(username);
             System.out.println("Hello ,"+username+" ! there are "+j+" people ahed of you . \n");
             System.out.println(customers);
         }
    }


        // method printPriceChart() ninja bonus 1 

        public void printPriceChart(String product,double price,int maxQuantity){
       
            System.out.println("\n"+product);
            for (int j = 1; j <= maxQuantity; j++) {
                System.out.println(j+" -  $ "+price*j);
            } 
       }


       // method printPriceChart() ninja bonnus 3

       public void printPriceChart1(String product,double price,int maxQuantity){
      
        System.out.println("\n"+product);
        for (int j = 1; j <= maxQuantity; j++) {
            int reste=j-1;
            System.out.println(j+" -  $ "+((price*j)-(reste*0.5)));
        }
   }


   // method displayMenu1() ninja bonnus 4

   public Boolean displayMenu1(ArrayList<String> MenuItems,double[] prices){
       MenuItems.add("Drip Coffee");
       MenuItems.add("cappuchino");
       MenuItems.add("Latte");
       MenuItems.add("mocha");

       if((MenuItems.size()/2)!=prices.length)
       
           {
            System.out.println(MenuItems.size());
            System.out.println(prices.length);
            return (false);
           } 
       
       else
      
        {
            
            for (int j = 0; j < prices.length; j++) {
            
                System.out.println(j+" "+MenuItems.get(j)+"  -- $"+prices[j]);
            }
            return (true);
        
          
        }
   
    }

}

//-------------------------------------------------------------------------


     // System.out.println("Please enter your Product Name : ");
            // String product= System.console().readLine();
            // System.out.println("Please enter your Price of product : ");
            // double price= System.console().readLine();
            // System.out.println("Please enter your max quantity : ");
            // int maxQuantity= System.console().readLine();