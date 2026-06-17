const cloudName = "de8f7hwkc";
const uploadPreset = "siddhivinayakinfra_gallery";

const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

imageInput.addEventListener("change", () => {

const file = imageInput.files[0];

if(file){

preview.src = URL.createObjectURL(file);
preview.style.display = "block";

}

});

async function uploadImage(){

const file = imageInput.files[0];

if(!file){

alert("Please select an image");
return;

}

const formData = new FormData();

formData.append("file", file);
formData.append("upload_preset", uploadPreset);

document.getElementById("status").innerText =
"Uploading image...";

try{

const response = await fetch(
`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
{
method:"POST",
body:formData
});

const data = await response.json();

localStorage.setItem(
"latestImage",
data.secure_url
);

document.getElementById("status").innerText =
"✅ Project uploaded successfully";

}
catch(error){

document.getElementById("status").innerText =
"❌ Upload failed";

console.log(error);

}

}

function logout(){

window.location.href = "admin.html";

}
