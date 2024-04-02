// GIVEN
console.log(example);
var example = "I'm the example!";
//AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";
var i=1
// Given predict 1
console.log('Predict ',i++);

console.log(hello);      // undefined                             
var hello = 'world';     // undefined
//AFTER HOISTING BY THE INTERPRETER 
//console.log(hello); // logs undefined                                  
//var hello = 'world';


// Given predict 2
console.log('Predict ',i++);
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';  
    console.log(needle); // magnet 
}

// Given predict 3
console.log('Predict ',i++);
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);  // log 'only okay' if call function print() 
}

console.log(brendan);  // super cool

// Given predict 4
console.log('Predict ',i++);
var food = 'chicken';
console.log(food);  // print 'chicken'
eat(); // print 'half-chicken'
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


// Given predict 5
console.log('Predict ',i++);
//mean();   // 
console.log(food);
var mean = function() { // mean is not a function if men is not function then dose not called
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// Given predict 6
console.log('Predict ',i++);

console.log(genre); // undefined
var genre = "disco";
rewind(); // print 'rock' and 'rnb'
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre); // print disco


// Given predict 7
console.log('Predict ',i++);

dojo = "san jose";
console.log(dojo); // print san jose
learn();  // print seattle and print burbank
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);  // print san jose

// Given predict 8
console.log('Predict ',i++);

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 60));
console.log(makeDojo("Berkeley", 0));

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        //dojo = "closed for now";   // error 
        dojo.hiring=false;
    }
    return dojo;
}

