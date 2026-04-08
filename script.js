// Smooth scroll is already handled by CSS scroll-behavior
// Contact form submission (example functionality)
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
});
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

// Auto slide every 4 seconds
setInterval(nextSlide, 4000);