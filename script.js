const imageCount = 4;
const imageUrl = "/assets/lace-trim-header.png";

// reference to container
const container = document.querySelector('.lace-trim-container')

for (let i = 0; i < imageCount; i++){
    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.width = "100%";
    img.style.height = "auto";
    container.appendChild(img);
}

const imageUrlFooter = "/assets/lace-trim-footer.png";
const footerContainer = document.querySelector('.lace-trim-footer-container')

for (let i = 0; i < imageCount; i++){
    const img = document.createElement('img');
    img.src = imageUrlFooter;
    img.style.width = "100%";
    img.style.height = "auto";
    footerContainer.appendChild(img);
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