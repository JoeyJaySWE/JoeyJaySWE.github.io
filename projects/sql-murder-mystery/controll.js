function find_murder(){

let murder_name = document.getElementById("name").value;
let murder_weapon = document.getElementById("weapon").value;
let murder_location = document.getElementById("where").value;



    if(murder_name === "Jack Skellington" && murder_weapon === "Poison" && murder_location === "NK"){
        window.location.href = "correct.html";
        console.log("Right!");
    }
    else{
        window.location.href = "wrong.html?name="+murder_name+"&weapon="+murder_weapon+"&location="+murder_location;
        // console.log("Wrong");
        // console.log(murder_name);
        // console.log(murder_weapon);
        // console.log(murder_location);
    }
};