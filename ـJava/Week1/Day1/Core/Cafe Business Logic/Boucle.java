public class Boucle {
    public static void main(String[] args){
        int[] myArray;
        
        myArray=new int[10];
        for(int i=0;i<myArray.length;i++){
            myArray[i]=i;
            System.out.println(i+10);
        }

        //  String[] listOfAnimals = new String[5];
        String[] listOfAnimals = {"Dog","Cat","Elephant","Lion","Tiger"};
        System.out.println("Lenght of list of animals is : "+listOfAnimals.length);
        for(int i=0;i<listOfAnimals.length;i++){
            System.out.println("Animal "+i+" Name is : "+listOfAnimals[i]);
        }
    } 
    
}
