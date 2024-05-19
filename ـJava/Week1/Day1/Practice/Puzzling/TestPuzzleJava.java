import java.util.ArrayList;
import java.util.Random;
public class TestPuzzleJava {
    
	public static void main(String[] args) {

        // message to welcome in my app 
        System.out.println("hello java ");
        System.out.println("--------------------------------------\n");

        // // i use methods from the random library 
        // Random randMchine = new Random();
        // randMchine.setSeed(35679);
        // System.out.println(randMchine);

        // create instance generator 
		PuzzleJava generator = new PuzzleJava();

        // print all random rolls

        ArrayList<Integer> randomRolls = generator.getTenRolls();
		System.out.println("Get Ten Rolls \n "+randomRolls);

        System.out.println("-------------------- --------------- ------------- -----------------------\n");

        // print one random lettres 
        
        char randomLettres = generator.getRandomLetter();
		System.out.println("Get one charcter \n "+randomLettres);
		
        System.out.println("-------------------- --------------- ------------- -----------------------\n");

        // print a random password 
        
        String randomPassword = generator.getRandomPassword();
		System.out.println("Get random Password \n "+randomPassword);

        System.out.println("-------------------- --------------- ------------- -----------------------\n");

        // print a new password set  
        
        ArrayList<String> listOfPassword = generator.getNewPasswordSet(5);
		System.out.println("List of Password  \n [ "+listOfPassword+" ] \n");     




		
		
		
   
    }



}

