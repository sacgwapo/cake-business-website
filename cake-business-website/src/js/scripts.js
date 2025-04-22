// Smooth scroll effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.querySelectorAll('.carousel').forEach((carousel, index) => {
    const track = carousel.querySelector('.carousel-track');
    const prevButton = carousel.querySelector('.carousel-button.prev');
    const nextButton = carousel.querySelector('.carousel-button.next');
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    let currentIndex = 0;

    // Function to move to a specific slide
    const moveToSlide = (index) => {
        track.style.transform = `translateX(-${index * slideWidth}px)`;
        currentIndex = index;
    };

    // Event listener for the "Next" button
    nextButton.addEventListener('click', () => {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0; // Loop back to the first slide
        }
        moveToSlide(nextIndex);
    });

    // Event listener for the "Previous" button
    prevButton.addEventListener('click', () => {
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1; // Loop back to the last slide
        }
        moveToSlide(prevIndex);
    });

    // Ensure the track is properly sized for all slides
    track.style.width = `${slides.length * slideWidth}px`;

    // Automatic slide functionality
    setInterval(() => {
        let nextIndex;
        if (index % 2 === 0) {
            // For even-indexed carousels (e.g., cakes), move forward
            nextIndex = currentIndex + 1;
            if (nextIndex >= slides.length) {
                nextIndex = 0; // Loop back to the first slide
            }
        } else {
            // For odd-indexed carousels (e.g., packages), move backward
            nextIndex = currentIndex - 1;
            if (nextIndex < 0) {
                nextIndex = slides.length - 1; // Loop back to the last slide
            }
        }
        moveToSlide(nextIndex);
    }, 4000); // Change slide every 4 seconds
});

function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = `Message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;

    window.location.href = `mailto:llenasisaac2@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}