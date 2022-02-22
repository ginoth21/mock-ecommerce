//image slider
const productImages = document.querySelectorAll(".product-images img");
const productImageSlides = document.querySelector(".image-slider");

let activeImageSlide = 0;

productImages.forEach((item, i) => {
    item.addEventListener("click", () => {
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlides.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})

//toggle version buttons
const verBtn = document.querySelectorAll(".size-radio-btn");
let checkBtn = 0;

verBtn.forEach((item, i) => {
    item.addEventListener("click", () => {
        verBtn[checkBtn].classList.remove('check');
        item.classList.add('check');
        checkBtn = i;
    })
})