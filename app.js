
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalID = null;

initializeSlider();

function initializeSlider() {

    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalID = setInterval(next, 8000);
    }
    
}

function showSlide(index) {

    if(index >= slides.length) {
        slideIndex = 0;
    } else if(index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide=> {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prev() {
    slideIndex--;
    showSlide(slideIndex);
}

function next() {
    slideIndex++;
    showSlide(slideIndex);
}

var contactLink = document.getElementById('contact-link');
    
contactLink.addEventListener('click', function(event) {
                
    event.preventDefault();
    
    alert("The Contact page is currently under maintenance and not accessible.");
    
});