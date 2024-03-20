// app.js

// Function to handle click events on navbar links
function navigateToSection(event) {
    event.preventDefault(); // Prevent default link behavior

    var targetSectionId = event.target.getAttribute('href').substring(1); // Get target section id
    var targetSection = document.getElementById(targetSectionId); // Get target section element

    // Hide all sections
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Show target section
    targetSection.classList.add('active');
}

// Add click event listener to navbar links
var navbarLinks = document.querySelectorAll('nav a');
navbarLinks.forEach(function(link) {
    link.addEventListener('click', navigateToSection);
});
