const imageCount = 5;
const imageLaceUrl = "/assets/lace-trim-header.png";

// reference to container
const container = document.querySelector('.lace-trim-container')

for (let i = 0; i < imageCount; i++){
    const img = document.createElement('img');
    img.src = imageLaceUrl;
    img.style.width = "100%";
    img.style.height = "auto";
    container.appendChild(img);
}