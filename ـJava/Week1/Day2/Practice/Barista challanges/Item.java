import java.util.ArrayList;
public class Item {
    private String name;
    private double price;
    private int index;
    private ArrayList<Item> items;
    public Item(String name,double price,int index){
        this.name=name;
        this.price=price;
        this.index=index;
    }
     // getname()
    public String getName(){
        return name;
    }
    // setname()
    public void setName(String name){
        this.name=name;
    }
    
    // getIndex()
    public int getIndex(){
        return index;
    }
    // setnamIndex()
    public void setIndex(int index){
        this.index=index;
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
