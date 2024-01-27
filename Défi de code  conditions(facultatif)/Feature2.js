// Code Challenge: Conditionals (Optional)

// ----------------------  Feature 2  ----------------------   

function getTimeOfDay(time, day) {
    var time = 0;
    var day = "Sunday";
    var arrTime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    var arrDay = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
    for (var i = 0; i < arrTime.length; i++) {
        if (time !== arrTime[i]) {
            console.log("Please enter a Time [1 .. 24] exactly ! ");
        }
        else {
            console.log("It's good time .");
        }
    }
    for (var i = 0; i < arrDay.length; i++) {
        if (time !== arrDay[i]) {
            console.log("Please enter a Day [Monday .. Sunday] exactly ! ");
        }
        else {
            console.log("It's good day .");
        }
    }
    if (time < 10) {
        console.log("Late !");
    }
    else if(time >= 15 && time <= 18)
    {
        if (time % 2 == 0) {
            console.log("ice cream,cookies or candy .")
        }
        else
        {
            console.log("Hot chocolate,tea or cake .")
        }
    }
    else if (time > 22 && time < 4) {
        console.log("Hot chocolate !")
    }
    else if (time > 4 && time < 10) {
        console.log("Ice Cream !");
        if (day == "Wednesday") {
            console.log("Strawberry");
        }
        else {
            console.log("Vanilla");
        }
    }
    else {
        console.log("Sleep !");
    }

}
getTimeOfDay(10, "Wednesday");