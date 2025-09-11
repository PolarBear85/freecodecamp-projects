const lightBox = document.querySelector(".lightbox");
const lightBoxImg = document.querySelector("#lightbox-image");
const galleryItems = document.querySelectorAll(".gallery-item");
const closeButton = document.querySelector("#close-btn");

galleryItems.forEach(galleryItem => {
    galleryItem.addEventListener("click", ()=> {
        let imagePath = galleryItem.src;
        console.log(imagePath);
        let findThumb = imagePath.indexOf("-thumbnail");
        let newPath = imagePath.slice(0,findThumb)+".jpg"
        console.log(findThumb);
        console.log(imagePath.slice(0,findThumb)+".jpg");
        lightBox.style. display= "flex";
        lightBoxImg.src = newPath;
    });
});

closeButton.addEventListener("click",() => {
    lightBox.style.display = "none";
});

lightBox.addEventListener("click",()=> {
    lightBox.style.display="none";
});