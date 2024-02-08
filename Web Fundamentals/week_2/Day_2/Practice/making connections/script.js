console.log("page loaded...");

// create function change name 

function change_name(element){
    var h1 = document.querySelector(".change_name"); 
    h1.innerHTML=" Walid Guetat ";
    console.log("Your name is update ! ");
}


// create function delete user 
total_users=2;
function delete_user1(element){
    var nbre_user=document.querySelector(".badge");
    nbre_user.innerHTML=total_users-1;
    var name_user=document.querySelector(".name1");
    name_user.remove();
    var avatar_user=document.querySelector(".avatar1");
    avatar_user.remove();
    var close_btn_user=document.querySelector(".icon_close1");
    close_btn_user.remove();
    var accept_btn_user=document.querySelector(".icon_accept1");
    accept_btn_user.remove();
}
   var i=total_users-1;
function delete_user2(element){
    var nbre_user2=document.querySelector(".badge");
    nbre_user2.innerHTML=i-1;
    var name_user2=document.querySelector(".name2");
    name_user2.remove();
    var avatar_user2=document.querySelector(".avatar2");
    avatar_user2.remove();
    var close_btn_user2=document.querySelector(".icon_close2");
    close_btn_user2.remove();
    var accept_btn_user2=document.querySelector(".icon_accept2");
    accept_btn_user2.remove();
}

// create function add users 

total_users1=500;
function add_user1(element){
    var nbre_user=document.querySelector(".badge2");
    nbre_user.innerHTML=total_users1+1+"+";
    var name_user=document.querySelector(".name1");
    name_user.remove();
    var avatar_user=document.querySelector(".avatar3");
    avatar_user.remove();
    var close_btn_user=document.querySelector(".icon_close1");
    close_btn_user.remove();
    var accept_btn_user=document.querySelector(".icon_accept1");
    accept_btn_user.remove();
}




