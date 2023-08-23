// advertisement section slideShow
let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}


// ModelBrands section slideShow
let index = 0;
displayImages();
function displayImages() {
    let i;
    const images = document.getElementsByClassName("image");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    index++;
    if (index > images.length) {
        index = 1;
    }
    images[index - 1].style.display = "block";
    setTimeout(displayImages, 5000);
}


// globalBrands section slideShow
let ind = 0;
displayGlobalImages();
function displayGlobalImages() {
    let i;
    const images = document.getElementsByClassName("globalImage");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    ind++;
    if (ind > images.length) {
        ind = 1;
    }
    images[ind - 1].style.display = "block";
    setTimeout(displayGlobalImages, 4000);
}


//side ads show/hide content
const sideAds = document.querySelector("#sideAds")
const titleAds = document.getElementById("titleAds");
const contentAds = document.getElementById("contentAds")


sideAds.addEventListener("click", ()=>{
titleAds.classList.toggle("hideAds")
sideAds.classList.toggle("showAds")
})