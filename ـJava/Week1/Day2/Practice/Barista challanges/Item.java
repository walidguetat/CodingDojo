import java.util.ArrayList;
public class Item {
    private String name;
    private double price;
    private ArrayList<Item> items;
    public Item(String name,double price){
        this.name=name;
        this.price=price;
    }
     // getname()
    public String getName(){
        return name;
    }
    // setname()
    public void setName(String name){
        this.name=name;
    }

     // getPrice()
     public double getPrice(){
        return price;
    }
    // setPrice()
    public void setPrice(double price){
        this.price=price;
    }

    // addItem
    public void addItem(Item item) {
        this.items.add(item);
    }

    
}
