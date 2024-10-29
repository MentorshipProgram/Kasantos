window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');

    setTimeout(function() {
        preloader.style.display = 'none';
    }, 2000); 
});

// Scroll to top function
let mybutton = document.getElementById("scrollToTopBtn");

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}  

// JavaScript for cursor circle
document.addEventListener('mousemove', (event) => {
    const circle = document.getElementById('cursor-circle');
    circle.style.left = `${event.clientX}px`;
    circle.style.top = `${event.clientY}px`;
});

let navbar = document.getElementById("navbar");
let navbar2 = document.getElementById("navbar2");
let threshold = 800; // The height at which the navbar will become fixed

// Consolidated scroll function
window.onscroll = function() {
    // Scroll-to-top button visibility
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }

    // Navbar fixed position handling
    if (window.pageYOffset > threshold) {
        navbar.classList.add("fixed-navbar"); // Add class to make navbar fixed
        navbar2.classList.add("fixed-navbar2"); // Add class to make navbar2 fixed
    } else {
        navbar.classList.remove("fixed-navbar"); // Remove class for normal
        navbar2.classList.remove("fixed-navbar2"); // Remove class for normal
    }
};
