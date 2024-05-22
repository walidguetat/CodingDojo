// Phone.java
public class Phone extends Device {

    public void makeCall() {
        if (battery < 5) {
            System.out.println("Not enough battery to make a call.");
        } else {
            battery -= 5;
            System.out.println("You make a call.");
            displayBattery();
            checkCriticalBattery();
        }
    }

    public void playGame() {
        if (battery < 25) {
            System.out.println("Not enough battery to play a game.");
        } else {
            battery -= 20;
            System.out.println("You play a game.");
            displayBattery();
            checkCriticalBattery();
        }
    }

    public void charge() {
        battery += 50;
        if (battery > 100) battery = 100; // Ensure battery does not exceed 100
        System.out.println("You charge the phone.");
        displayBattery();
    }

    private void checkCriticalBattery() {
        if (battery < 10) {
            System.out.println("Battery critical!");
        }
    }
}