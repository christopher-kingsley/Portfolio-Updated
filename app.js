// Initialize all sliders on DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
      slider.slideIndex = 0;
      const slides = slider.querySelectorAll('.slides img');
      slides.forEach((slide, i) => {
        slide.classList.toggle('displaySlide', i === 0);
      });
    });
  });
  
  function showSlide(slider, index) {
    const slides = slider.querySelectorAll('.slides img');
    if (index >= slides.length) {
      slider.slideIndex = 0;
    } else if (index < 0) {
      slider.slideIndex = slides.length - 1;
    } else {
      slider.slideIndex = index;
    }
  
    // Hide all slides, then show the current slide
    slides.forEach(slide => slide.classList.remove("displaySlide"));
    slides[slider.slideIndex].classList.add("displaySlide");
  }
  
  function prev(button) {
    // Get the slider container from the clicked button
    const slider = button.closest('.slider');
    showSlide(slider, slider.slideIndex - 1);
  }
  
  function next(button) {
    const slider = button.closest('.slider');
    showSlide(slider, slider.slideIndex + 1);
  }
  

  function openVideo() {
    document.getElementById("videoPopup").style.display = "flex";
    document.getElementById("popupVideo").play();
  }

  function closeVideo() {
    let videoPopup = document.getElementById("videoPopup");
    let video = document.getElementById("popupVideo");

    videoPopup.style.display = "none";
    video.pause();
    video.currentTime = 0; // Reset video to the beginning
  }
