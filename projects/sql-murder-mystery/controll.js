let arrest = document.getElementsById("arrest");
let murder_name = document.getElementsByName("name");
let murder_weapon = document.getElementsByName("weapon");
let murder_location = document.getElementsByName("where");

arrest.addEventListner("click", function(){
    if(murder_name === "Jack Skellington" && murder_weapon === "Poison" && murder_location === "NK"){
        window.location.href = "correct.html";
    }
    else{
        window.location.href = "wrong.html";
    }
});