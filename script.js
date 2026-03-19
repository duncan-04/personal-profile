function validateForm(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if(name === "" || email === ""){
alert("Please fill in all fields");
return false;
}

if(!email.includes("@")){
alert("Please enter a valid email");
return false;
}

alert("Message sent successfully!");
return true;

}
