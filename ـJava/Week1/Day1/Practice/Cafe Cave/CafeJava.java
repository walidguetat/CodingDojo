public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffeePrice =5;
        double lattePrice = 2.6;
        double cappuccinoPrice = 6;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting+customer1+mochaPrice); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        if(customer1=="Cindhuri"){
        System.out.println(generalGreeting+customer1+isReadyOrder1);
         }
         else{
            System.out.println(customer1+pendingMessage);
         }

        if(isReadyOrder4){
            System.out.println(isReadyOrder4);
            System.out.println(customer4+displayTotalMessage+cappuccinoPrice);
        }
        else{
            System.out.println(pendingMessage);
        }

        double total = lattePrice*2;

        if(isReadyOrder2){
            System.out.println(customer2+readyMessage);
            System.out.println(displayTotalMessage+total);
        }
        else{
            System.out.println(customer2+pendingMessage);
        }

        if(isReadyOrder3){
            total-=dripCoffeePrice;
            System.out.println(customer3+readyMessage);
            System.out.println(displayTotalMessage+total);
        }
        else{
            System.out.println(customer3+pendingMessage);
        }
    }
}
