let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        navbar.style.top = "-60px"; // Hide the navbar (adjust according to your navbar height)
    } else {
        // Scroll up
        navbar.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
