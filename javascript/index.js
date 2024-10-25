window.onload = function() {
    const divs = ['div1', 'div2', 'div3'];
    let currentIndex = 0;
    let intervalId;
  
    // Function to show a specific div
    function showDiv(index) {
      divs.forEach((divId) => {
        document.getElementById(divId).style.display = 'none';
      });
      document.getElementById(divs[index]).style.display = 'block';
    }
  
    // Start the automatic cycling
    function startAutoCycle() {
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % divs.length;
        showDiv(currentIndex);
      }, 4000);
    }
  
    // Stop the automatic cycling
    function stopAutoCycle() {
      clearInterval(intervalId);
    }
  
    // Initialize with automatic cycling
    startAutoCycle();
  
    // Attach event listeners to buttons
    document.getElementById('next').addEventListener('click', function() {
      stopAutoCycle(); // Stop auto cycle when button is clicked
      currentIndex = (currentIndex + 1) % divs.length;
      showDiv(currentIndex);
      startAutoCycle(); // Restart auto cycle after a manual change
    });
  
    document.getElementById('prev').addEventListener('click', function() {
      stopAutoCycle(); // Stop auto cycle when button is clicked
      currentIndex = (currentIndex - 1 + divs.length) % divs.length; // Ensures no negative index
      showDiv(currentIndex);
      startAutoCycle(); // Restart auto cycle after a manual change
    });
  };
  

// another section

document.addEventListener("scroll", function() {
  const animatedElement = document.querySelector('.animated-element');
  const elementPosition = animatedElement.getBoundingClientRect().top;
  const viewportHeight = window.innerHeight;

  if (elementPosition < viewportHeight) {
    animatedElement.classList.add('active');
  }
});


// youtube video

  // Get the link, video container, and iframe
  const videoContainer = document.getElementById('video-container');
    const videoIframe = document.getElementById('video-iframe');
    const closeBtn = document.getElementById('close-btn');

    // Function to handle the video play event
    function playVideo(event) {
        event.preventDefault();  // Prevent the link from navigating

        const videoId = this.getAttribute('data-video-id');  // Get the video ID from data attribute
        // const youtubeVideoURL = `https://www.youtube.com/embed/${videoId}?autoplay=1`;  // Create YouTube URL
        const youtubeVideoURL = `https://www.youtube.com/watch?v=gqt4Bg-VnU8`;  // Create YouTube URL

        videoIframe.src = youtubeVideoURL;  // Set the video URL to iframe
        videoContainer.style.display = 'flex';  // Show the video container
    }

    // Get all video links and attach event listeners
    const videoLinks = document.querySelectorAll('.play-video-link');
    videoLinks.forEach(function(link) {
        link.addEventListener('click', playVideo);
    });

    // Close the video when the close button is clicked
    closeBtn.addEventListener('click', function() {
        videoContainer.style.display = 'none';  // Hide the video container
        videoIframe.src = '';  // Stop the video by clearing the src
    });


const slides = document.querySelector('.slides');
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slide').length;

const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

// Function to show the slide
function showSlide(index) {
    const slideWidth = 100; // Percentage width of each slide
    slides.style.transform = `translateX(-${index * slideWidth}%)`;
}

// Function to show the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Function to show the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Event listeners for navigation buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Initialize the first slide as active
showSlide(currentSlide);
