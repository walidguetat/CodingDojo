import java.util.ArrayList;
import java.util.Scanner;

public class Order{
    private String name;
    private double total;
    private boolean ready;
    private ArrayList<Item> items;
    public Order(String name,double total,boolean ready,ArrayList<Item> items){
        this.name=name;
        this.total=total;
        this.ready=ready;
        this.items=new ArrayList<Item>();

    }
     // getname()
     public String getName(){
        return name;
    }
    // setname()
    public void setName(String name){
        this.name=name;
    }

     // getTotal()
     public double getTotal(){
        return total;
    }
    // setTotal()
    public void setTotal(double total){
        this.total=total;
    }

    // getReady()
    public boolean getReady(){
        return ready;
    }
    // setReady()
    public void setReady(boolean ready){
        this.ready=ready;
    }

    // getItems()
    public ArrayList<Item> getItems(){
        return items;
    }
    // setItems()
    public void setItems(ArrayList<Item> items){
        this.items=items;
    }


    // getStatusMessages
    public String getStatusMessage(){
        String isReady="Your order is ready.";
        String isNotReady="Thank you for waiting. \n Your order will be ready soon.";
            if(this.ready==true)
                {
                    return isReady;
                }
            else
                {
                    return isNotReady;
                }
    }


    // getTotalOrders
    public double getTotalOrders(){
        double sum=0;
        for(int i=0;i<this.items.size();i++)
        {
            sum+=this.items.get(i).getPrice();
        }     
        this.total=sum;
        return this.total;
    }

    // displayMenu
    public void displayMenu(){
        System.out.println("Customer Name : "+this.name);
        for(int i=0;i<items.size();i++){

        System.out.println(this.items.get(i).getName()+" - "+this.items.get(i).getPrice());

        }
        System.out.println("Customer Name : "+this.total);  
    }

    public void newOrder() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Please enter customer name for new order:");
        String name = scanner.nextLine();

        System.out.println("Hello, " + name + "!");

        displayMenu();

        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = scanner.nextLine();

        while (!itemNumber.equals("q")) {
            try {
                int index = Integer.parseInt(itemNumber);
                if (index >= 0 && index < menu.size()) {
                    Item item = menu.get(index);
                    order.add(item);
                    System.out.println(item.getName() + " added to your order.");
                } else {
                    System.out.println("Invalid item index. Please try again.");
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a valid item number or 'q' to quit.");
            }

            System.out.println("Please enter a menu item index or q to quit:");
            itemNumber = scanner.nextLine();
        }

        System.out.println("Order summary for " + name + ":");
        double total = 0;
        for (Item item : order) {
            System.out.println(item);
            total += item.getPrice();
        }
        System.out.println("Total: $" + total);
    }

    public void addMenuItemByInput() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the name of the new menu item:");
        String name = scanner.nextLine();
        System.out.println("Enter the price of the new menu item:");
        double price = scanner.nextDouble();
        addMenuItem(name, price);
        System.out.println("Item added successfully.");
    }
}

}
