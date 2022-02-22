const productContainers = [...document.querySelectorAll(".product-container")];
const preBtn = [...document.querySelectorAll(".pre-btn")];
const nextBtn = [...document.querySelectorAll(".next-btn")];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    preBtn[i].addEventListener("click", () =>{
        item.scrollLeft -= containerWidth;
    })

    nextBtn[i].addEventListener("click", () =>{
        item.scrollLeft += containerWidth;
    })
})