console.log("Hello world")

// create function message acceuil

function message_acceuil(element){
    console.log("function execute !!");
    alert("Loading weather report ...");
}

// create function accept cookies

function accept_cookies(element){
var cookies=document.querySelector(".cookies");
  cookies.remove();
}

// create function convert celius C° to  F° 
var celius=document.getElementById("degree");
function convert_celius(element){
    
    if(celius.value==="0")
    {
        // alert("your select celius");
        // celius degree
        
        // sp_left1 and sp_right1
        var sp_left1=document.querySelector(".sp_left1");
        sp_left1.innerHTML=24+"°";
        var sp_right1=document.querySelector(".sp_right1");
        sp_right1.innerHTML=18+"°";

        // sp_left2 and sp_right2
        var sp_left2=document.querySelector(".sp_left2");
        sp_left2.innerHTML=27+"°";
        var sp_right2=document.querySelector(".sp_right2");
        sp_right2.innerHTML=19+"°";

        // sp_left3 and sp_right3
        var sp_left3=document.querySelector(".sp_left3");
        sp_left3.innerHTML=21+"°";
        var sp_right3=document.querySelector(".sp_right3");
        sp_right3.innerHTML=19+"°";

        // sp_left4 and sp_right4
        var sp_left4=document.querySelector(".sp_left4");
        sp_left4.innerHTML=21+"°";
        var sp_right4=document.querySelector(".sp_right4");
        sp_right4.innerHTML=16+"°";

        
    } 
    else
    {
          // fahrenheit degree

        //  alert("your change Fahrenheit !");

          // sp_left1 and sp_right1
        var sp_left1=document.querySelector(".sp_left1");
        sp_left1.innerHTML=75+"°";
        var sp_right1=document.querySelector(".sp_right1");
        sp_right1.innerHTML=65+"°";

        // sp_left2 and sp_right2
        var sp_left2=document.querySelector(".sp_left2");
        sp_left2.innerHTML=80+"°";
        var sp_right2=document.querySelector(".sp_right2");
        sp_right2.innerHTML=66+"°";

        // sp_left3 and sp_right3
        var sp_left3=document.querySelector(".sp_left3");
        sp_left3.innerHTML=69+"°";
        var sp_right3=document.querySelector(".sp_right3");
        sp_right3.innerHTML=61+"°";

        // sp_left4 and sp_right4
        var sp_left4=document.querySelector(".sp_left4");
        sp_left4.innerHTML=78+"°";
        var sp_right4=document.querySelector(".sp_right4");
        sp_right4.innerHTML=70+"°";

        
    }
}