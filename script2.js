document.addEventListener('DOMContentLoaded', () => {
    let index = 0;
    const slides = document.querySelectorAll('.carousel-img');
    const numberOfSlides = slides.length;

    setInterval(() => {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        index = (index + 1) % numberOfSlides;
        slides[index].style.display = 'block';
    }, 3000); // Change image every 3 seconds
    
});
  