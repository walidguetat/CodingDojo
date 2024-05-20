import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
    
        
        // Menu items
        
        Item item1= new Item();
        item1.name="Mocha";
        item1.price=2.6;
        Item item2= new Item();
        item2.name="Latte";
        item2.price=3.5;
        Item item3= new Item();
        item3.name="Drip Coffee";
        item3.price=5;
        Item item4= new Item();
        item4.name="Cappuchino";
        item4.price=4.5;
        // Order variables -- order1                                                , order2 etc.
        Order order1=new Order();
        order1.name="Cindhuri";
        order1.ready=false;
        order1.total=250.02;
        order1.items.add(item1);
        order1.items.add(item2);
        order1.items.add(item3);
        order1.items.add(item4);
        // Order variables -- order2
        Order order2=new Order();
        order2.ready=false;
        order2.name="Jimmy";
        order2.total=100;
        order2.items.add(item1);
        order2.items.add(item2);
        order2.items.add(item3);
        order2.items.add(item4);
        // Order variables -- order3
        Order order3=new Order();
        order3.ready=false;
        order3.name="Noah";
        order3.total=150;
        order3.items.add(item1);
        order3.items.add(item2);
        order3.items.add(item3);
        
         // Order variables -- order4
         Order order4=new Order();
         order4.ready=true;
         order4.name="Sam";
         order4.total=50.65;
         order4.items.add(item1);
         order4.items.add(item2);
         order4.items.add(item3);
         order4.items.add(item4);
        // Application Simulations
        // Use this example code to test various orders' updates
        System.out.printf("Name: %s\n", order1.name);
        // it will output the value of the 'total' attribute of the 'order1' object
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);
        System.out.printf("List of Items : %s\n", order1.items);
        // Add item1 to order2's item list and increment the order's total.
        System.out.printf("Total: %s\n", order1.total+order2.total);

        // add a new item Cappuchino
        order3.items.add(item4);

        // sam add a latte 
        order4.items.add(item2);
        
        // cindhury is now ready
        order1.ready=true;

        // sam add a  two latte 
        order4.items.add(item2);
        order4.items.add(item2);

        // jimmy is now ready
        order2.ready=true;

    }
}
