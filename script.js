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
