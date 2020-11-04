let arrest = document.getElementById("arrest");
let murder_name = document.getElementsByName("name");
let murder_weapon = document.getElementsByName("weapon");
let murder_location = document.getElementsByName("where");

getElementById("arrest").addEventListener("click", find_murder);


function find_murder(){
    if(murder_name === "Jack Skellington" && murder_weapon === "Poison" && murder_location === "NK"){
        window.location.href = "correct.html";
    }
    else{
        window.location.href = "wrong.html";
    }
};