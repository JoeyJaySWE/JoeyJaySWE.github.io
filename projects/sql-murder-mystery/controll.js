let arrest = document.getElementsById("arrest");
let name = document.getElementsByName("name");
let weapon = document.getElementsByName("weapon");
let location = document.getElementsByName("where");

arrest.addEventListner("click", function(){
    if(name === "Jack Skellington" && weapon === "Poison" && location === "NK"){
        window.location.href = "correct.html";
    }
    else{
        window.location.href = "wrong.html";
    }
});