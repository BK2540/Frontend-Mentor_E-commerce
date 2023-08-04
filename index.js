const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom")

const modal = document.getElementById("modal")
const showModal = document.getElementById("showModal")
const span = document.getElementsByClassName("close")[0];


// create function for slide
let slideNumber = 1;
const length = images.length;

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 400}px)`;
    slideNumber++
};

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber-2) * 400}px)`;
    slideNumber--
};

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 400}px)`;
    slideNumber = length;
}

right.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : getFirstSlide();
});

left.addEventListener("click", () => {
    slideNumber > 1 ? prevSlide() : getLastSlide();
});


// When the user clicks on the button, open the modal
showModal.onclick = () => {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
};






