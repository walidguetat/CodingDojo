/*
write a for-loop that starts at year 1996 and ends in 2024
    on every year (iteration) have it log the year and the string "JS is awesome!"
    on every 10 years, log "happy decade of JS!"
    when you reach the end, log "HAPPY 28 years of JAVASCRIPT! 🎈🎈🎈"


*/
// on intiallized this varriable firstDate at 1996
var dateFirst = 1996;
// on intiallized this varrriable lastDate at 2006
var dateLast = 2006
// on create this loop (for ) for iterate one by one
// on intiallized this varriable i at this varriable dateFirst i=dateFirst=1996
for (var i = firstDate; i <= dateLast; i++) {
    // on intillized a new varriable datePlusTen at a varriable dateFirst a plus ten 
    var datePlustTen = firstDate + 10;
    // create a condtion to compare enter two varriable if the firstDate is less than the datePlusTen 
    if (firstDate < datePlustTen) {
        // print this message  [ firstDate + " Js is awesome ! " ] if this condition is true
        console.log(firstDate + " Js is awesome ! ");
    }
    else {
        // print this message "happy decade of Js ! " condtion if this condition is false
        console.log("happy decade of Js ! ");
    }
}
// on termine this loops on print this message "HAPPY 28 years of JAVASCRIPT ! 🎈🎈🎈 ""
console.log("HAPPY 28 years of JAVASCRIPT ! 🎈🎈🎈 ");

