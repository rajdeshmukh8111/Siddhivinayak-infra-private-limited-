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
// LOADER

window.addEventListener("load", ()=>{

setTimeout(()=>{

document.getElementById("loader").style.display = "none";

},2000);

});
