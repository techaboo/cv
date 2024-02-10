// Example: Smooth scrolling for navigation links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default jump behavior

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
