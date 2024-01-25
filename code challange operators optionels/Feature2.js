// Code challange : Operators (optionels)

//          Feature 2


// create this function calculate the remainder thr pieces of cake
function howMuchleftOvercake(numbersOfPieces, numberOfPeople) {
    var remainder = numbersOfPieces % numberOfPeople; // declarted this varriable reamainder 
    return remainder; // return the result of remainder 
}
var remainder = howMuchleftOvercake(50, 14);
if (remainder === 0) {
    console.log("No leftOvers for you ! "); // print this "No leftOvers for you ! "  at screen if remainder equal zero 
}
else if (remainder <= 2) {
    console.log("You have some leftovers ! "); // print this "You have some leftovers  ! "  at screen if remainder equal two or less than 
}
else if (remainder => 3 && remainder <= 5) {
    console.log("You have leftovers to share ! "); // print this "You have leftovers to share ! "  at screen if remainder equal to 3 or than and equal to 5 or less 
}
else {
    console.log("Hold another party ! "); // print this "Hold another party ! "  at screen if remainder more than of 5 
}
    
