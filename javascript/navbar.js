let navbar = document.getElementById("navbar");
let threshold = 800; // The height at which the navbar will become fixed

window.onscroll = function() {
// Check how far the user has scrolled from the top
    if (window.pageYOffset > threshold) {
        navbar.classList.add("fixed-navbar"); // Add class to make navbar fixed
    } else {
        navbar.classList.remove("fixed-navbar"); // Remove class to return to normal
    }
}


let navbar2 = document.getElementById("navbar2");
let threshold2 = 800; // The height at which the navbar will become fixed

window.onscroll = function() {
// Check how far the user has scrolled from the top
    if (window.pageYOffset > threshold2) {
        navbar2.classList.add("fixed-navbar2"); // Add class to make navbar fixed
    } else {
        navbar2.classList.remove("fixed-navbar2"); // Remove class to return to normal
    }
}