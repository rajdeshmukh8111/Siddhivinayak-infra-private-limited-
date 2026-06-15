import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
const API_KEY = "AQ.Ab8RN6LVK17qHvBR7rwP22R4tOSDtRpWXMNAQPwhiAUNhn2kLA";

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash"
});
const companyInfo = `
You are the AI Assistant of Siddhivinayak Infra Private Limited.

Company Details:

- Established in 2008
- 15+ Projects Completed
- 400+ Happy Customers

Services:

- Residential Projects
- Commercial Projects
- Infrastructure Development
- Construction Solutions

Contact Information:

Email:
siddhivinayakinfrapvt@gmail.com

Company Name:
Siddhivinayak Infra Private Limited

Always answer professionally and help visitors understand the company.
`;

// VIDEO MUTE / UNMUTE

const video = document.getElementById("bgVideo");
const muteBtn = document.getElementById("muteBtn");

muteBtn.addEventListener("click", () => {

if(video.muted){
video.muted = false;
muteBtn.innerHTML =
'<i class="fa-solid fa-volume-high"></i>';
}
else{
video.muted = true;
muteBtn.innerHTML =
'<i class="fa-solid fa-volume-xmark"></i>';
}

});


// NAVBAR BACKGROUND ON SCROLL

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.style.background = "rgba(0,0,0,0.85)";
}
else{
navbar.style.background = "rgba(0,0,0,0.4)";
}

});


// SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});

// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", ()=>{

menu.classList.toggle("active");

});
// SCROLL REVEAL

window.addEventListener("scroll", reveal);

function reveal(){

var reveals = document.querySelectorAll(".reveal");

for(var i=0;i<reveals.length;i++){

var windowHeight = window.innerHeight;

var elementTop =
reveals[i].getBoundingClientRect().top;

var elementVisible = 100;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");

}

}

}
// ANIMATED COUNTERS

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const c = +counter.innerText;

const increment = target / 100;

if(c < target){

counter.innerText = `${Math.ceil(c + increment)}`;

setTimeout(updateCounter,20);

}

else{

counter.innerText = target;

}

};

updateCounter();

});

// TOP BUTTON

let topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop > 300){

topBtn.style.display = "block";

}

else{

topBtn.style.display = "none";

}

};

topBtn.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});
};
const contactForm = document.getElementById("contact-form");

if(contactForm){

contactForm.addEventListener("submit", function(e){

e.preventDefault();

const status = document.getElementById("status");

emailjs.sendForm(
"service_q0rls7q",
"template_aqhqemd",
this
).then(function(){

status.innerText = "Message sent successfully ✅";
status.style.color = "lightgreen";

document.getElementById("contact-form").reset();

}, function(error){

status.innerText = "Failed to send message ❌";
status.style.color = "red";

console.log(error);

});

});

}

async function sendMessage() {

const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

const message = userInput.value.trim();

if(message === "") return;

// Show user message
chatBox.innerHTML += `
<div class="user-message">
${message}
</div>
`;

userInput.value = "";

// Typing message
chatBox.innerHTML += `
<div class="bot-message" id="typing">
Typing...
</div>
`;

try{

const result = await model.generateContent(
companyInfo + "\nUser Question: " + message
);

const response = await result.response;
const text = response.text();

// Remove typing indicator
document.getElementById("typing").remove();

// Show Gemini reply
chatBox.innerHTML += `
<div class="bot-message">
${text}
</div>
`;

chatBox.scrollTop = chatBox.scrollHeight;

}
catch(error){

document.getElementById("typing").remove();

chatBox.innerHTML += `
<div class="bot-message">
⚠️ Sorry, something went wrong.
</div>
`;

console.error(error);

}

}
