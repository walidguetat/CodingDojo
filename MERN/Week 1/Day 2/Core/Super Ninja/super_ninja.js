


class Ninja{
    constructor(name){
        this.name=name;
        this.health=200;
        this.speed=10;
        this.strength=10;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("-------- [ Your Stat ] --------");
        console.log("Name : "+this.name);
        console.log("Strength : "+this.strength);
        console.log("Speed : "+this.speed);
        console.log("Health : "+this.health);
    }
    drinkSake(){
        this.health+=10;
    }

}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.wisdom=10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("This is a sensei methode")
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
