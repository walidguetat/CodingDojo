// intiallized an object pizza by values 

var pizza = {
    crustType:    "deep dish",
    sauceType:  "traditional",
    cheeses:   ["Mozzarella"],
    toppings: ["pepperoni","sausage"]
};
// print this object values at screen     

console.log("-------------------------------------------------------------------------------------------");
console.log(pizza);
console.log("-------------------------------------------------------------------------------------------");

// create function pizza oven 

function pizzaOven(crustType,sauceType,cheeses,toppings){
    var pizza={};
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses;
    pizza.toppings=toppings;
    return pizza;
}
// create pizza 1 

console.log("Pizza 1 ");
console.log("-------------------------------------------------------------------------------------------");
var pizza1=pizzaOven("deep dish","traditinal",["mozzerella"],["pepperoni","sausage"]);
console.log(pizza1);

// create pizza 2

console.log("Pizza 2 ");
console.log("-------------------------------------------------------------------------------------------");
var pizza2=pizzaOven("hand tossed","marinarra",["mozzerella","feta"],["mushrooms","olives","onions"]);
console.log(pizza2);
console.log("-------------------------------------------------------------------------------------------");

console.log("------------------  2 more pizza  ------------------");

// create pizza 3 

console.log("Pizza 3 ");
var pizza3=pizzaOven("deep dish","traditinal",["mozzerella","formage"],["sausage"]);
console.log(pizza3);

// create pizza 4 

console.log("Pizza 4 ");
console.log("-------------------------------------------------------------------------------------------");
var pizza4=pizzaOven("hand tossed","marinarra",["feta"],["olives","onions"]);
console.log(pizza4);
console.log("-------------------------------------------------------------------------------------------");



