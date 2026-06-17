const galleryGrid = document.getElementById("galleryGrid");

const latestImage = localStorage.getItem("latestImage");

if(latestImage){

const div = document.createElement("div");

div.className = "gallery-item";

div.innerHTML = `
<img src="${latestImage}">
`;

galleryGrid.prepend(div);

}
