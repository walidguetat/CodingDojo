import java.util.ArrayList;
public class arrayList {
    public static void main(String[] args){

        ArrayList<Integer> myArray = new ArrayList<Integer>();
        // before adding the value  
        System.out.println(myArray);
        myArray.add(10);
        myArray.add(120);
        // After adding the value  
        System.out.println(myArray);

        // use getter and setter 

        Integer number = myArray.get(0);
        System.out.println(number);
        Integer number1 = myArray.set(0,2);
        System.out.println(number1);

        ArrayList<String> dynamicArray = new ArrayList<String>();
        dynamicArray.add("WAlid");
        dynamicArray.add("Amine");
        dynamicArray.add("Abir");
        for (int i = 0; i < dynamicArray.size(); i++){
            System.out.println("Hello, "+dynamicArray.get(i));
        }   


    }
    
}
