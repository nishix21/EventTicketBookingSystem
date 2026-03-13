function showDetails(){

let details = document.querySelectorAll(".details");

details.forEach(function(detail){

if(detail.style.display === "block"){
detail.style.display = "none";
}
else{
detail.style.display = "block";
}

});

}


function validateForm(event){

event.preventDefault();   // stop page refresh

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let eventName = document.getElementById("event").value;
let tickets = document.getElementById("tickets").value;

if(name === "" || email === "" || eventName === "" || tickets === ""){
alert("Please fill all fields!");
return false;
}

/* Event price */

let price = 0;

if(eventName === "Music Concert"){
price = 500;
}
else if(eventName === "Cricket Match"){
price = 700;
}
else if(eventName === "Movie Night"){
price = 300;
}

let total = price * tickets;

alert("Booking Successful!\nTotal Price: ₹" + total);

return false;

}