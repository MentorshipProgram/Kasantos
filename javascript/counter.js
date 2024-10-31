        // Intersection Observer for triggering animation on scroll
        const counters = document.querySelectorAll('.counter h2');
        let started = false;

        function animateCounters() {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const increment = target / 100;

                    if(count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        }

        // Scroll observer to start the animation
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !started) {
                counters.forEach(counter => {
                    counter.style.opacity = '1';
                    counter.style.transform = 'translateY(0)';
                });
                animateCounters();
                started = true;
            }
        }, { threshold: 0.3 });

        observer.observe(document.getElementById('counterSection'));