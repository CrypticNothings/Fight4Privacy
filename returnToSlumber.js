const starCount = 100; // Adjust the number of stars
const starsContainer = document.querySelector('.twinkling-stars'); // Correct selector

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Set random position and size for each star
    star.style.position = 'absolute'; // Make sure stars are positioned absolutely
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.width = Math.random() * 3 + 2 + 'px'; // Random width between 2 and 5px
    star.style.height = star.style.width; // Make it round
    star.style.backgroundColor = '#99ccff'; // Star color
    star.style.borderRadius = '50%'; // Make it round
    star.style.opacity = Math.random(); // Random opacity
    star.style.animationDelay = Math.random() + 's'; // Random delay for twinkling

    starsContainer.appendChild(star);
}
