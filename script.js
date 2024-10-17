const imageCount = 4;

let imageUrl;
if (window.location.pathname.includes("suggestions.html")) {
    imageUrl = "../assets/lace-trim-header.png"; // path for suggestions.html
} else {
    imageUrl = "./assets/lace-trim-header.png"; // path for index.html
}

// reference to container
const container = document.querySelector('.lace-trim-container')

for (let i = 0; i < imageCount; i++){
    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.width = "100%";
    img.style.height = "auto";
    container.appendChild(img);
}

let imageUrlFooter;
if (window.location.pathname.includes("suggestions.html")) {
  imageUrlFooter = "../assets/lace-trim-footer.png"; // path for suggestions.html
} else {
  imageUrlFooter = "./assets/lace-trim-footer.png"; // path for index.html
}

const footerContainer = document.querySelector('.lace-trim-footer-container')

for (let i = 0; i < imageCount; i++){
    const img = document.createElement('img');
    img.src = imageUrlFooter;
    img.style.width = "100%";
    img.style.height = "auto";
    footerContainer.appendChild(img);
}

const imageUrlMid = "./assets/lace-trim-header.png";
const midContainer = document.querySelector('.midsection-lace')

for (let i = 0; i < imageCount; i++){
    const img = document.createElement('img');
    img.src = imageUrlMid;
    img.style.width = "100%";
    img.style.height = "auto";
    midContainer.appendChild(img);
}

const imageUrlLabel = "./assets/lace-label.png";
const laceContainer = document.querySelector('.lace-label')

for (let i = 0; i < 10; i++){
    const img = document.createElement('img');
    img.src = imageUrlLabel;
    img.style.width = "100%";
    img.style.height = "auto";
    laceContainer.appendChild(img);
}



let state = false;
let button = document.querySelector(".button");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");
let song = document.querySelector(".my-song");
let slider = document.querySelector(".slider");

button.addEventListener("click", () => {
  if (state == false) {
    record.classList.add("on");
    toneArm.classList.add("play");
    setTimeout(() => {
      song.play();
    }, 1000);
  } else {
    record.classList.remove("on");
    toneArm.classList.remove("play");
    song.pause();
  }
  state = !state;
});

window.addEventListener("load", () => {
    song.volume = 0.1;
  });
slider.addEventListener("input", (e) => {
  song.volume = Number(e.target.value);
    });