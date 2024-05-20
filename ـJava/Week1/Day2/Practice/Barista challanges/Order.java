import java.util.ArrayList;

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
}
