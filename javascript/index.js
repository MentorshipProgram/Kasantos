window.onload = function() {
    const divs = ['div1', 'div2', 'div3'];
    let currentIndex = 0;
    let intervalId;

      // Debug: Check if script is running
  
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

document.getElementById('playButton').addEventListener('click', function() {
  var videoContainer = document.getElementById('videoContainer');
  var iframe = document.getElementById('youtubeVideo');

  // Set the video URL (with autoplay enabled)
  iframe.src = "https://youtu.be/gqt4Bg-VnU8";
  
  // Show the video container
  videoContainer.style.display = 'block';
  
  // Scroll to the top of the page to show the video
  // window.scrollTo({ top: 0, behavior: 'smooth' });
});