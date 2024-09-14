// script.js
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", function() {
    const background = document.getElementById('background');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroButton = document.getElementById('hero-button');
    const images = [
        'url(images/homelimit.png)', // Replace with your actual image paths
        'url(images/homelimit2.png)',
        'url(images/home3.png)'
    ];
    
    let currentIndex = 0;

    function startHideAnimation() {
        heroTitle.classList.add('hidden-title');
        heroSubtitle.classList.add('hidden-subtitle');
        heroButton.classList.add('hidden-button');
    }

    function startShowAnimation() {
        heroTitle.classList.remove('hidden-title');
        heroSubtitle.classList.remove('hidden-subtitle');
        heroButton.classList.remove('hidden-button');
    }

    function changeBackground(index) {
        // Start hide animation
        startHideAnimation();
        
        // Wait for the hide animation to finish
        setTimeout(() => {
            // Change the background image
            background.style.backgroundImage = images[index];

            // Start show animation after background change
            setTimeout(() => {
                startShowAnimation();
            }, 100); // Short delay to ensure animations work smoothly
        }, 1000); // Delay to allow the hide animation to complete
    }

    // Event listeners for dots
    document.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            if (index !== currentIndex) {
                currentIndex = index;
                changeBackground(currentIndex);
            }
        });
    });

    // Initial background change
    changeBackground(currentIndex);
});



const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const slider = document.querySelector('.coaches-slider');

let currentIndex = 0; // To track the current slide index
const maxVisibleCoaches = 3; // Number of coaches visible at a time
const coachWidth = 320; // Width of each coach including margin (adjust as needed)

// Function to update slider position
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * coachWidth}px)`;
}

// Left arrow click event
leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

// Right arrow click event
rightArrow.addEventListener('click', () => {
    if (currentIndex < slider.children.length - maxVisibleCoaches) {
        currentIndex++;
        updateSlider();
    }
});


// animatsiya
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.animate');

    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);  // Once the animation is done, stop observing
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});


