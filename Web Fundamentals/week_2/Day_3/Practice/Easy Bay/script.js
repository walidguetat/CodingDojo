console.log("Hello")

// this function empty

function empty(element){
    alert("Your cart is empty");
}

// select id of img secculent1
var img = document.querySelector("#img_secculent1");
    
// create function img_over() if curser touch img then changed secculent1 to img secculent2
function img_over() {
    img.src = "./images/assets/succulents-2.jpg";
    img.alt = "Succulents2";
}

// create function img_out() if curser not touch this img secculent 2 then return the first img secculent1 to img secculent2

function img_out() {
    img.src = "./images/assets/succulents-1.jpg";
    img.alt = "Succulents1";
}

// function remove alert dark 
var x=document.querySelector(".position");
function remove(){
   x.remove();
}
