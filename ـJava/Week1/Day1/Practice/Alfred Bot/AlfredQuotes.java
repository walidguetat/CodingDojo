import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        // YOUR CODE HERE
        return name;
    }
    
    public String dateAnnouncement() {
        // YOUR CODE HERE
        Date date1=new Date();
        return "Current date is : "+date1+" ";

    }
    
    public String respondBeforeAlexis(String conversation) {
        // YOUR CODE HERE

        return "for snarky response return string";
    }
    
	// NINJA BONUS
	// See the specs to overload the guestGreeting method
        // SENSEI BONUS
        // Write your own AlfredQuote method using any of the String methods you have learned!
}

