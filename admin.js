function login() {

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

if (
(username === "Rajababu" &&
password === "siddhivinayakinfra@111")

||

(username === "Admin" &&
password === "staff@23")
){

window.location.href = "dashboard.html";

}

else{

document.getElementById("error").innerText =
"Invalid Username or Password";

}

}
