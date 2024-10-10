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

// reference to container

const imageUrlFooter = "/assets/lace-trim-footer.png";
const footerContainer = document.querySelector('.lace-trim-footer-container')

for (let i = 0; i < imageCount; i++){
    const img = document.createElement('img');
    img.src = imageUrlFooter;
    img.style.width = "100%";
    img.style.height = "auto";
    footerContainer.appendChild(img);
}
