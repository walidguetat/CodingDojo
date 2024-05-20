import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
    
        Item item1 = new Item("Drip Coffee", 2.5);
        Item item2 = new Item("Cafe latte", 1.5);
        Item item3 = new Item("Cafe Espresso", 1.5);
        // Menu items
        Order order1 = new Order(24,false,item1);
        Order order2 = new Order(24,false,item2);


        Order order3 = new Order(24, false, item1, "Drip Coffee");
        Order order4 = new Order(25, true, item2, "Cafe latte");
        Order order5 = new Order(26, false, item3, "Cafe Espresso");

        item1.addItem(item1);
        item2.addItem(item2);

        order1.setReady(true);
        order2.setName("Cafe latte");

       System.out.println(order1.getStatusMessage());
       System.out.println(order2.getStatusMessage());
       System.out.println(order1.getTotal());
       System.out.println(order2.getTotal());
       order1.displayMenu();
       order2.displayMenu();
       order3.displayMenu();
       
       

    }
}
