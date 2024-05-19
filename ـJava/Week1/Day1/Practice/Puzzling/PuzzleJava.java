import java.util.ArrayList;
import java.util.Random;
public class PuzzleJava{

  
// methode to get random rolls 

public ArrayList<Integer> getTenRolls() {
    Random random = new Random();
    ArrayList<Integer> rolls = new ArrayList<Integer>(); 
    
    for (int i = 0; i < 10; i++) {
        rolls.add(random.nextInt(20)+1);
        // System.out.println(rolls.get(i));  
    }
    return rolls; 
}


// methode to get random letter  

public char getRandomLetter() {
    Random random = new Random();
    char[] lettres ={'a','b','c','d','e','f','g','h','j','k','l','m','z','r','t','y','u','i','o','p','w','x','c','v','n','q'}; 
    char c='a';
    for (int i = 0; i < lettres.length; i++) {
        lettres[i]=(char)(random.nextInt(25)+'a');
        // System.out.println(rolls.get(i));
        c=lettres[i];  
    }
    return c; 
}


// methode to get random password  

public String getRandomPassword() {
    Random random = new Random();
    char[] lettres ={'a','b','c','d','e','f','g','h','j','k','l','m','z','r','t','y','u','i','o','p','w','x','c','v','n','q'}; 
    char c='a';
    String password="";
    int j=0;
    while(j<9){
        for (int i = 0; i < lettres.length; i++) {
            lettres[i]=(char)(random.nextInt(25)+'a');
            c=lettres[i];  
        }
     
        password=password+c;
        j++;
        
    }
    return password;
}

// methode to get random password  

public ArrayList<String> getNewPasswordSet(int longuer) {
    ArrayList<String> listOfPassword = new ArrayList<String>();
    Random random = new Random();
    char[] lettres ={'a','b','c','d','e','f','g','h','j','k','l','m','z','r','t','y','u','i','o','p','w','x','c','v','n','q'}; 
    char c='a';
    String password="";
    // String[] listOfPassword={};
    int j=0,z=0;
    System.out.println("====================== > sizeOf ListOfPassword "+listOfPassword);
    // while(z<longuer){
        for(z=0;z<longuer;z++){
            
            while(j<8){
               
                for (int i = 0; i < lettres.length; i++) {
                    lettres[i]=(char)(random.nextInt(25)+'a');
                    c=lettres[i];  
                }
            
                password=password+c;
                
                j++;
                
            }
            

            listOfPassword.add(password);
            
}   
return listOfPassword;
}   

}


// methode to get this message to users 

// public ArrayList<Integer> getTenRolls(){
//     ArrayList<Integer> arr = new ArrayList<>(); 
//     Random random = new Random(); 
//     for(int i=1;i<=20;i++){
//             arr.add(random.nextInt(i));
//         }
//         System.out.println("----------- Random ------------\n");
//         for(int j=0;j<10;j++){
//             System.out.println(arr.get(j));
//         }
//     return(arr);

//     }