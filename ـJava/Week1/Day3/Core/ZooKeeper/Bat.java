package com.zoo.keeper;

public class Bat extends Mammal {

    public Bat() {
        this.energy = 300;
    }

    public void fly() {
        this.energy -= 50;
        System.out.println("The bat is airborne. Energy decreased by 50.");
    }

    public void eatHumans() {
        this.energy += 25;
        System.out.println("The bat is satisfied after eating humans. Energy increased by 25.");
    }

    public void attackTown() {
        this.energy -= 100;
        System.out.println("The bat is attacking the town. Energy decreased by 100.");
    }
}
