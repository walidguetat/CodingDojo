
class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
    

}
// unit class
class Unit extends Card{
    constructor(name,cost,power,resilence){
        super(name,cost);
        this.resilence=resilence;
        this.power=power;
    }
    attack(target){
        if( target instanceof Unit ) {
            // implement card text here
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
    
}

// effect class
class Effect extends Card{
    constructor(name,cost,stat,magnitu){
        super(name,cost);
        this.stat=stat;
        this.magnitu=magnitu;
    }
    play(target){
        if( target instanceof Effect ) {
            // implement card text here
        } else {
            throw new Error( "Target must be Effect !");
        }
    }
}
















// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
