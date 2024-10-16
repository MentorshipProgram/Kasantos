
    window.addEventListener('load', function() {
        var preloader = document.getElementById('preloader');
    
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 2000); 
    });



    // scroll to top function
    let mybutton = document.getElementById("scrollToTopBtn");

    // When the user scrolls down 300px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }  