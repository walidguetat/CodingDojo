package com.zoo.keeper;

public class Gorilla extends Mammal {

    public Gorilla() {
        super();
    }

    public void throwSomething() {
        this.energy -= 5;
        System.out.println("The gorilla has thrown something. Energy decreased by 5.");
    }

    public void eatBananas() {
        this.energy += 10;
        System.out.println("The gorilla is satisfied after eating bananas. Energy increased by 10.");
    }

    public void climb() {
        this.energy -= 10;
        System.out.println("The gorilla has climbed a tree. Energy decreased by 10.");
    }
}
